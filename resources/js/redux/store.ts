// store.js
import { configureStore } from '@reduxjs/toolkit'
import productoReducer from './productoSlice'
import usuarioReducer from './usuarioReducer'

export const store = configureStore({
  reducer: {
    productos: productoReducer,
    autenticado: usuarioReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch