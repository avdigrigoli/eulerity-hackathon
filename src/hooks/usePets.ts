import { useEffect, useState } from "react";
import { fetchPets } from "../api/pets";
import type { Pet, PetApiResponse } from "../types/pet";

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

async function getImageSizeMB(url: string): Promise<number> {
    try {
        const res = await fetch(url);
        const blob = await res.blob();
        return Number((blob.size / (1024 * 1024)).toFixed(2));
    } catch {
        return 0;
    }
}

export function usePets() {
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;

        async function loadPets() {
            try {
                setLoading(true);
                setError(null);

                const data: PetApiResponse[] = await fetchPets();

                const normalized: Pet[] = await Promise.all(
                    data.map(async (pet) => {
                        const fileSizeMB = pet.url
                            ? await getImageSizeMB(pet.url)
                            : 0;

                        return {
                            id: slugify(pet.title),
                            title: pet.title,
                            description: pet.description,
                            url: pet.url,
                            createdAt: new Date(pet.created),

                            // REAL VALUE
                            fileSizeMB,
                        };
                    })
                );

                if (mounted) setPets(normalized);
            } catch (err) {
                if (mounted) {
                    setError(
                        err instanceof Error ? err.message : "Unknown error"
                    );
                }
            } finally {
                if (mounted) setLoading(false);
            }
        }

        loadPets();

        return () => {
            mounted = false;
        };
    }, []);

    return {
        pets,
        loading,
        error,
        empty: !loading && pets.length === 0,
    };
}