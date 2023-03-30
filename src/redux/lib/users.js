import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios('https://randomuser.me/api/?results=50')
    return response.data.results
  }
)

const users = createSlice({
  name: 'users',
  initialState: {
    users: [],
    viewUser:{},
    isloading: false },
  reducers: {
    setUsers: (state, action) =>{
      state.users = action.payload
    },
    setViewUser: (state, action) =>{
      state.viewUser = action.payload
    }
  },
  extraReducers:(builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error occurred"
      })
      }

})

export const { setUsers, setViewUser } = users.actions
export default users.reducer