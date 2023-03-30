import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

const initialState = {
  isAuth: false,
   user: (Cookies.get('user') && JSON.parse(Cookies.get('user'))) || null,
  }
const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    login:(state,action) =>{
      state.user = action.payload
    },
    logOut:(state,action) =>{
      state.user = action.payload
    },
  }
})

export const {login, logOut} = authSlice.actions
export default authSlice.reducer