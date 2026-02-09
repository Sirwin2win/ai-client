import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://session-chat-app.onrender.com/api/auth'


export const register = createAsyncThunk(
    'auth/register',
    async(formData,thunkAPI)=>{
       try {
         const response = await axios.post(`${API}/register`,formData, { withCredentials: true })
        return response.data
       } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
       }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async(formData,thunkAPI)=>{
       try {
         const response = await axios.post(`${API}/login`,formData, { withCredentials: true })
        return response.data
       } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
       }
    }
)

const authSlice = createSlice({
    name:'auth',
    initialState:{
        users:[],
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            // state.users = action.payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
        .addCase(login.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.users = action.payload
        })
        .addCase(login.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
    }
})

export default authSlice.reducer