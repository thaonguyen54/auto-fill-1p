export type User = {
    id: string;
    name: string;
    domain: string;
    type: string;
}

export type VaultDataType = {
    id: string;
    name: string;
    description?: string;
    content_version: number;
    created_at: string;
    updated_at: string;
    items: number
}