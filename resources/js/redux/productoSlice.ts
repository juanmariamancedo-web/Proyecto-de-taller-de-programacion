import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Producto from '../../models/Producto'
import { ProductoState } from '../../models/Producto'
import { fetchCarrito, clearCarrito } from './carritoThunks'

const initialState: ProductoState = {
  productos: []
}

const productoSlice = createSlice({
  name: 'carrito',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Producto>) => {
      const item = state.productos.find(
        i => i.product.id === action.payload.id
      )

      if (item) {
        item.amount += 1
      } else {
        state.productos.push({
          product: action.payload,
          amount: 1
        })
      }
    },

    increase: (state, action: PayloadAction<number>) => {
      const item = state.productos.find(i => i.product.id === action.payload)
      if (item) item.amount += 1
    },
    addWithQuantity: (
      state,
      action: PayloadAction<{ producto: Producto; cantidad: number }>
    ) => {
      const { producto, cantidad } = action.payload

      const item = state.productos.find(
        i => i.product.id === producto.id
      )

      item?.product
      if (item) {
        item.amount += cantidad
      } else {
          state.productos.push({
              product: { ...producto },  
              amount: cantidad
          })
      }
    },
    decrease: (state, action: PayloadAction<number>) => {
      const item = state.productos.find(i => i.product.id === action.payload)

      if (!item) return

      if (item.amount > 1) {
        item.amount -= 1
      } else {
        state.productos = state.productos.filter(
          i => i.product.id !== action.payload
        )
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.productos = state.productos.filter(
        i => i.product.id !== action.payload
      )
    },

    clear: (state) => {
      state.productos = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarrito.fulfilled, (state, action) => {
        state.productos = action.payload
      })
      .addCase(clearCarrito.fulfilled, (state) => {
        state.productos = []
      })
  }
})

export const { add, increase, decrease, remove, clear, addWithQuantity } = productoSlice.actions
export default productoSlice.reducer