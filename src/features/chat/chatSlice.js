import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://session-chat-app.onrender.com/api/chat'

export const createChat = createAsyncThunk(
    'chats/createChat',
    async(formData,thunkAPI)=>{
        try {
            const response = await axios.post(`${API}`,formData)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const chatSlice = createSlice({
    name:'chats',
    initialState:{
        chats:[],
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createChat.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(createChat.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.chats = action.payload
        })
        .addCase(createChat.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
    }
})

export default chatSlice.reducer