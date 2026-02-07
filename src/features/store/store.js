import { configureStore } from "@reduxjs/toolkit";
import chatSlice from '../chat/chatSlice'
import authSlice from '../auth/authSlice'


const store = configureStore({
    reducer:{
        chats:chatSlice,
        auth:authSlice
    }
})

export default store