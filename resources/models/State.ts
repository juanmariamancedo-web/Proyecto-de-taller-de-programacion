import { CartItem } from "./Producto"

export type State = {
  productos: CartItem[]
  autenticado: Boolean
}