// types.ts
export type Producto = {
  id: number
  name: string
  description: string
  image: string
  price: number
}

type CartItem = {
  producto: Producto
  cantidad: number
}


type ProductoState = {
  productos: CartItem[]
}


export default Producto;
export {CartItem , ProductoState};