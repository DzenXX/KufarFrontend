import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
   console.log("fetch")
   console.log(params)
   const { data } = await axios.post('/auth/login', params)
   return data;
})

export const fetchRegistration = createAsyncThunk('auth/fetchRegistration', async (params) => {
   console.log("fetch")
   const { data } = await axios.post('/auth/register', params)
   return data;
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
   console.log("fetch")
   const { data } = await axios.get('/auth/me')
   return data;
})


const initialState = {
   data: {},
   status: 'loading'
}


const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: { 
      logout: (state) => {
         state.data = null
      },
   },
   extraReducers: {
      [fetchAuth.pending]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchAuth.fulfilled]: (state, action) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchAuth.rejected]: (state) => {
         state.status = 'error';
         state.data = null;
      },
      [fetchAuthMe.pending]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchAuthMe.fulfilled]: (state, action) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchAuthMe.rejected]: (state) => {
         state.status = 'error';
         state.data = null;
      },
      [fetchRegistration.pending]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchRegistration.fulfilled]: (state, action) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchRegistration.rejected]: (state) => {
         state.status = 'error';
         state.data = null;
      }
   }
});

export const selectIsAuth = (state) => Boolean(state.auth.data)
export const selectName = (state) => state.auth.data?.fullName
export const selectEmail = (state) => state.auth.data?.email

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions 

