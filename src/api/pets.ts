import type { PetApiResponse } from "../types/pet";

const API_URL = "https://eulerity-hackathon.appspot.com/pets";

export async function fetchPets(): Promise<PetApiResponse[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch pets");
    }

    return response.json();
}