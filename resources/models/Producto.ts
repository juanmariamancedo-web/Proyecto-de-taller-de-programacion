// types.ts
export type Producto = {
  id: number
  name: string
  description: string
  img: string
  price: number
}

type CartItem = {
  producto: Producto
  cantidad: number
}

type State = {
  productos: CartItem[]
}

export default Producto;
export {CartItem , State};