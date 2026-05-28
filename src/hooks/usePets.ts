/**
 * usePets
 *
 * @description
 * Custom React hook for fetching and managing pet data state.
 *
 * @input
 * - No direct arguments.
 * - Internally calls fetchPets() to retrieve API data.
 *
 * @output
 * Returns an object containing:
 * - pets: Normalized array of Pet objects
 * - loading: Boolean fetch state
 * - error: Error message if request fails
 * - empty: Boolean indicating no pets were returned
 *
 * @rationale
 * Centralizes pet-fetching logic into a reusable hook to keep
 * UI components clean and focused on rendering.
 */

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

                const normalized: Pet[] = data.map((pet) => ({
                    id: slugify(pet.title),
                    title: pet.title,
                    description: pet.description,
                    url: pet.url,
                    createdAt: new Date(pet.created),

                    estimatedSize: Math.floor(Math.random() * 2000 + 500),
                }));

                if (mounted) {
                    setPets(normalized);
                }
            } catch (err) {
                if (mounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Unknown error"
                    );
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
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