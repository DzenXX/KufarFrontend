import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const createMessage = createAsyncThunk('chat/createMessage', async (params) => {
   console.log("fetch")
   console.log(params)
   const { data } = await axios.post('/messages/create', params)
   return data;
})
export const fetchMessages = createAsyncThunk('chat/fetchMessage', async (params) => {
   console.log("fetch")
   const { data } = await axios.get('/messages/get')
   console.log(data)
   return data;
})

const initialState = {
   messages: [],
   status: 'loading'
}


const chatSlice = createSlice({
   name: 'chat',
   initialState,
   reducers: { 
   },
   extraReducers: {
      [fetchMessages.pending]: (state) => {
         state.status = 'loading';
         // state.messages = null;
      },
      [fetchMessages.fulfilled]: (state, action) => {
         state.status = 'loaded';
         console.log(action.payload)
         state.messages = action.payload;
         console.log(state.messages)
      },
      [fetchMessages.rejected]: (state) => {
         state.status = 'error';
         state.messages = null;
      },
   }
});

export const selectMessages = (state) => state.chat.messages

export const chatReducer = chatSlice.reducer


