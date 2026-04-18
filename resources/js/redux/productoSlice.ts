import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Producto from '../../models/Producto'
import { State } from '../../models/Producto'

const initialState: State = {
  productos: []
}

const productoSlice = createSlice({
  name: 'carrito',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Producto>) => {
      const item = state.productos.find(
        i => i.producto.id === action.payload.id
      )

      if (item) {
        item.cantidad += 1
      } else {
        state.productos.push({
          producto: action.payload,
          cantidad: 1
        })
      }
    },

    increase: (state, action: PayloadAction<number>) => {
      const item = state.productos.find(i => i.producto.id === action.payload)
      if (item) item.cantidad += 1
    },
    addWithQuantity: (
      state,
      action: PayloadAction<{ producto: Producto; cantidad: number }>
    ) => {
      const { producto, cantidad } = action.payload

      const item = state.productos.find(
        i => i.producto.id === producto.id
      )

      if (item) {
        item.cantidad += cantidad
      } else {
        state.productos.push({
          producto,
          cantidad
        })
      }
    },
    decrease: (state, action: PayloadAction<number>) => {
      const item = state.productos.find(i => i.producto.id === action.payload)

      if (!item) return

      if (item.cantidad > 1) {
        item.cantidad -= 1
      } else {
        state.productos = state.productos.filter(
          i => i.producto.id !== action.payload
        )
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.productos = state.productos.filter(
        i => i.producto.id !== action.payload
      )
    },

    clear: (state) => {
      state.productos = []
    }
  }
})

export const { add, increase, decrease, remove, clear, addWithQuantity } = productoSlice.actions
export default productoSlice.reducer