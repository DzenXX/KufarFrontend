import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const createPost = createAsyncThunk('post/createPost', async (params) => {
   console.log("fetch")
   console.log(params)
   const { data } = await axios.post('posts', params)
   return data;
})

export const fetchPosts = createAsyncThunk('post/fetchPosts', async (params) => {
   console.log("fetch")
   const { data } = await axios.get('/posts')
   console.log(data)
   return data;
})

export const fetchOnePost = createAsyncThunk('post/fetchOnePost', async (params) => {
   console.log(params)
   const { data } = await axios.get(`/posts/${params}`)
   console.log(data)
   return data;
})

export const fetchPostsForUser = createAsyncThunk('post/fetchPostsForUser', async (params) => {
   console.log("fetch")
   const { data } = await axios.get('/posts/personal')
   console.log(data)
   return data;
})

export const addPhoto = createAsyncThunk('post/addPhoto', async (params) => {
   console.log("fetch")
   console.log(params)
   const { data } = await axios.post('/upload', params)
   return data;
})



const initialState = {
   posts: [],
   post: {},
   searchValue: '',
   status: 'loading'
}


const postSlice = createSlice({
   name: 'chat',
   initialState,
   reducers: { 
   changeSearchValue: (state, action) => {
      state.searchValue = action.payload
   }
   },
   extraReducers: {
      [fetchPosts.pending]: (state) => {
         state.status = 'loading';
         // state.posts = null;
      },
      [fetchPosts.fulfilled]: (state, action) => {
         state.status = 'loaded';
         console.log(action.payload)
         state.posts = action.payload;
         console.log(state.messages)
      },
      [fetchPosts.rejected]: (state) => {
         state.status = 'error';
         state.posts = null;
      },
      [fetchPostsForUser.pending]: (state) => {
         state.status = 'loading';
         // state.posts = null;
      },
      [fetchPostsForUser.fulfilled]: (state, action) => {
         state.status = 'loaded';
         console.log(action.payload)
         state.posts = action.payload;
         console.log(state.messages)
      },
      [fetchPostsForUser.rejected]: (state) => {
         state.status = 'error';
         state.posts = null;
      },
      [fetchOnePost.pending]: (state) => {
         state.status = 'loading';
         // state.posts = null;
      },
      [fetchOnePost.fulfilled]: (state, action) => {
         state.status = 'loaded';
         console.log(action.payload)
         state.post = action.payload;
         console.log(state.messages)
      },
      [fetchOnePost.rejected]: (state) => {
         state.status = 'error';
         state.post = null;
      },
   }
});

export const selectPosts = (state) => state.post.posts
export const selectPost = (state) => state.post.post
export const selectSearchValue = (state) => state.post.searchValue

export const { changeSearchValue } = postSlice.actions

export const postReducer = postSlice.reducer


