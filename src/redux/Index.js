import { configureStore } from "@reduxjs/toolkit";
import users from "./lib/users";
import authSlice from "./lib/auth";
import products from './lib/products'

const store = configureStore({
  reducer: { authSlice,products,users}
})

export default store