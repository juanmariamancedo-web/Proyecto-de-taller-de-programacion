import { createSlice } from '@reduxjs/toolkit'
import { UsuarioState } from '../../models/Auth'

const initialState: UsuarioState = {
  autenticado: false
}

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    toggle: (state) => {
        state.autenticado = !state.autenticado
    }, 
    login: (state) => {
      state.autenticado = true;
    },
    logout: (state) => {
      state.autenticado = false
    }
  }
})

export const { toggle, login, logout } = usuarioSlice.actions
export default usuarioSlice.reducer