export type User = {
    id: number,
    name: string,
    lastname: string,
    email: string,
    cuil_cuit: number,
    role: string,
    province: string,
    city: string,
    postcode: number
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
