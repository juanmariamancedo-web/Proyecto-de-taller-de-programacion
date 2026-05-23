export type User = {
    id: number,
    name: string,
    lastname: string,
    email: string
}

export type Auth = {
    user: User | null;
}

export type PageProps = {
    auth: Auth
};

export type UsuarioState = {
  autenticado: Boolean
}
