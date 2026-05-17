export type Auth = {
    user: {
        id: number;
        name: string;
        email: string;
    } | null;
}

export type PageProps = {
    auth: Auth
};