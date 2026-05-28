export interface PetApiResponse {
    title: string;
    description: string;
    url: string;
    created: string;
}

export interface Pet {
    id: string;
    title: string;
    description: string;
    url: string;
    createdAt: Date;
    estimatedSize?: number;
}