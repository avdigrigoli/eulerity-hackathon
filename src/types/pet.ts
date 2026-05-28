/**
 * PetApiResponse
 *
 * @description
 * Represents the raw pet data returned from the external API.
 */
export interface PetApiResponse {
    title: string;
    description: string;
    url: string;
    created: string;
}

/**
 * Pet
 *
 * @description
 * Represents the normalized pet model used throughout the application.
 */
export interface Pet {
    id: string;
    title: string;
    description: string;
    url: string;
    createdAt: Date;
    estimatedSize?: number;
}