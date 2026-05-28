import { useEffect, useMemo, useRef, useState } from "react";

import PageContainer from "../components/layout/PageContainer";
import PetGrid from "../components/gallery/PetGrid";
import PetCard from "../components/pet/PetCard";
import Toolbar from "../components/selection/Toolbar";
import PetGridSkeleton from "../components/gallery/PetGridSkeleton";
import { ErrorState, EmptyState } from "../components/common/StateViews";

import { usePets } from "../hooks/usePets";
import { useSelection } from "../context/SelectionContext";

import { downloadPetsZip } from "../utils/downloadPetsZip";

import type { Pet } from "../types/pet";

type SortType = "name-asc" | "name-desc" | "date-newest" | "date-oldest";

const PAGE_SIZE = 8;

export default function Home() {
    const { pets, loading, error, empty } = usePets();
    const { selectedIds, selectAll, clearSelection, getSelectedPets } =
        useSelection();

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<SortType>("name-asc");
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);

    const loaderRef = useRef<HTMLDivElement | null>(null);

    const filteredPets = useMemo(() => {
        const q = search.trim().toLowerCase();

        const filtered = q
            ? pets.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q)
            )
            : [...pets];

        const sorters = {
            "name-asc": (a: Pet, b: Pet) =>
                a.title.localeCompare(b.title),
            "name-desc": (a: Pet, b: Pet) =>
                b.title.localeCompare(a.title),
            "date-newest": (a: Pet, b: Pet) =>
                b.createdAt.getTime() - a.createdAt.getTime(),
            "date-oldest": (a: Pet, b: Pet) =>
                a.createdAt.getTime() - b.createdAt.getTime(),
        };

        return filtered.sort(sorters[sort]);
    }, [pets, search, sort]);

    const visiblePets = useMemo(
        () => filteredPets.slice(0, visibleCount),
        [filteredPets, visibleCount]
    );

    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
    }, [search, sort]);

    useEffect(() => {
        const el = loaderRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                setVisibleCount((prev) =>
                    Math.min(prev + PAGE_SIZE, filteredPets.length)
                );
            },
            { rootMargin: "300px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [filteredPets.length]);

    const selectedPets = useMemo(
        () => getSelectedPets(pets),
        [pets, selectedIds, getSelectedPets]
    );

    const estimatedSizeMB = useMemo(
        () =>
            ((selectedPets.length * 400 * 1024) / (1024 * 1024)).toFixed(2),
        [selectedPets.length]
    );

    const handleDownload = async () => {
        if (isDownloading) return;

        const selected = getSelectedPets(pets);
        if (!selected.length) return;

        setIsDownloading(true);
        setDownloadProgress(0);

        try {
            await downloadPetsZip(selected, setDownloadProgress);
        } finally {
            setIsDownloading(false);
            setDownloadProgress(0);
        }
    };

    if (loading) {
        return (
            <PageContainer>
                <h1>Pet Gallery</h1>
                <PetGridSkeleton />
            </PageContainer>
        );
    }

    if (error) return <ErrorState message={error} />;
    if (empty) return <EmptyState />;

    return (
        <PageContainer>
            <Toolbar
                search={search}
                sort={sort}
                onSearch={setSearch}
                onSort={setSort}
                total={filteredPets.length}
                selectedIds={selectedIds}
                onSelectAll={() => selectAll(filteredPets.map((p) => p.id))}
                onClear={clearSelection}
                onDownload={handleDownload}
                isDownloading={isDownloading}
                progress={downloadProgress}
                estimatedSizeMB={estimatedSizeMB}
            />

            <h1>Pet Gallery</h1>

            <PetGrid>
                {visiblePets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </PetGrid>

            <div ref={loaderRef} style={{ height: 1, marginTop: 24 }} />
        </PageContainer>
    );
}