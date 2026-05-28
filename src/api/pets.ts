/**
 * fetchPets
 *
 * @description
 * API utility function responsible for retrieving pet data
 * from the remote Eulerity pets endpoint.
 *
 * @input
 * - No arguments required.
 *
 * @output
 * - Promise<PetApiResponse[]>
 * - Returns an array of raw pet objects from the API response.
 *
 * @rationale
 * Keeping API logic isolated in a dedicated utility makes the
 * application easier to maintain, reuse, and extend as the
 * data layer evolves.
 *
 * @errorHandling
 * - Throws an Error if the HTTP response is unsuccessful.
 */

import type { PetApiResponse } from "../types/pet";

const API_URL = "https://eulerity-hackathon.appspot.com/pets";

export async function fetchPets(): Promise<PetApiResponse[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch pets");
    }

    return response.json();
}