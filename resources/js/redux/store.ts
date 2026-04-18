// store.js
import { configureStore } from '@reduxjs/toolkit'
import productoReducer from './productoSlice'

export const store = configureStore({
  reducer: {
    productos: productoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch