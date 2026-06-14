import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from './store'
import { ProductoState } from '../../models/Producto'

// carritoThunks.ts
export const syncCarrito = createAsyncThunk<void, void, { state: RootState }>(
  'carrito/sync',
  async (_, { getState }) => {
    const { productos } = getState().productos 

    const items = productos.map(i => ({
      producto_id: i.product.id,
      cantidad: i.amount
    }))

    await axios.post('/api/carrito', { items })
  }
)

export const fetchCarrito = createAsyncThunk<ProductoState['productos'], void>(
  'carrito/fetch',
  async () => {
    const { data } = await axios.get<ProductoState['productos']>('/api/carrito')
    return data
  }
)

export const clearCarrito = createAsyncThunk<void>(
  'carrito/clear',
  async () => {
    await axios.delete('/api/carrito')
  }
)