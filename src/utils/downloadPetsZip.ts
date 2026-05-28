import JSZip from "jszip";
import { saveAs } from "file-saver";
import type { Pet } from "../types/pet";

type ProgressCallback = (progress: number) => void;

type SizeCallback = (sizeBytes: number) => void;

/**
 * Fetch image as blob + return size
 */
async function fetchImage(pet: Pet): Promise<{ blob: Blob; size: number }> {
    const res = await fetch(pet.url);

    if (!res.ok) {
        throw new Error(`Failed to fetch ${pet.title}`);
    }

    const blob = await res.blob();
    return { blob, size: blob.size };
}

/**
 * Safe filename helper
 */
function sanitizeFileName(name: string) {
    return name
        .replace(/[^a-z0-9_\-]/gi, "_")
        .replace(/_+/g, "_")
        .toLowerCase();
}

/**
 * Optional: limited concurrency runner
 */
async function runWithConcurrency<T>(
    items: T[],
    limit: number,
    worker: (item: T) => Promise<void>
) {
    const queue = [...items];
    const workers: Promise<void>[] = [];

    const run = async () => {
        while (queue.length) {
            const item = queue.shift();
            if (!item) return;
            await worker(item);
        }
    };

    for (let i = 0; i < limit; i++) {
        workers.push(run());
    }

    await Promise.all(workers);
}

/**
 * MAIN ZIP DOWNLOAD FUNCTION
 */
export async function downloadPetsZip(
    pets: Pet[],
    onProgress?: ProgressCallback,
    onSizeCalculated?: SizeCallback
) {
    const zip = new JSZip();
    const folder = zip.folder("pets");

    if (!folder) return;

    // -----------------------------
    // 1. Estimate total size first
    // -----------------------------
    let estimatedSize = 0;

    try {
        const sizeChecks = await Promise.all(
            pets.map(async (pet) => {
                const res = await fetch(pet.url, { method: "HEAD" });

                const size = Number(res.headers.get("content-length")) || 0;
                return size;
            })
        );

        estimatedSize = sizeChecks.reduce((a, b) => a + b, 0);
        onSizeCalculated?.(estimatedSize);
    } catch {
        // fallback: unknown sizes
        estimatedSize = 0;
        onSizeCalculated?.(0);
    }

    // -----------------------------
    // 2. Download images (concurrent)
    // -----------------------------
    let completed = 0;
    let bytesProcessed = 0;

    await runWithConcurrency(pets, 5, async (pet) => {
        try {
            const { blob, size } = await fetchImage(pet);

            const fileName = `${sanitizeFileName(pet.title)}_${pet.id}.jpg`;

            folder.file(fileName, blob);

            completed++;
            bytesProcessed += size;

            // progress by count (0–1)
            onProgress?.(completed / pets.length);
        } catch (err) {
            console.error(`Failed to fetch image: ${pet.title}`, err);
        }
    });

    // -----------------------------
    // 3. Generate ZIP
    // -----------------------------
    const content = await zip.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: {
            level: 6,
        },
    });

    saveAs(content, "pets.zip");
}