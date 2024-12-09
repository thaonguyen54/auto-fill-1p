export type AuthCredentials = {
    email: string;
    address: string;
    password: string;
    secretKey: string;
}

export type Vault = {
    id: string;
    name: string;
    content_version: number;
    created_at: string;
    updated_at: string;
    items: number
}