import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () =>{
    const response = await axios('https://dummyjson.com/carts')
    return response.data.carts
  }
)

const products = createSlice({
name:'products',
initialState:{products:[], isloading:false},
reducers:{},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = 'Fulfilled';
      state.products = action.payload;
    },

    [fetchProducts.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occurred"
    }}
})

export default products.reducer