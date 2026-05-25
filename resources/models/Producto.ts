// types.ts
export type Producto = {
  id: number
  name: string
  description: string
  image: string
  price: number
  stock: number
  low_stock: number
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