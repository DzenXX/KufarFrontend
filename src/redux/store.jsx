import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { chatReducer } from './slices/chat';
import { postReducer } from './slices/post';


const store = configureStore({
    reducer: {
        auth: authReducer,
        chat: chatReducer,
        post: postReducer,
    }
})

export default store