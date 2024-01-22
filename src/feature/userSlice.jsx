import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    user:null,
};

export const registerUser = createAsyncThunk(
    'user/registerUser', 
    async (user, thunkAPI) => {
    console.log(`Register User: ${user}`);
    console.log(`Register User: ${JSON.stringify(user)}`);
});

export const loginUser = createAsyncThunk(
    'user/registerUser', 
    async (user, thunkAPI) => {
    console.log(`Login User: ${user}`);
});


const userSlice = createSlice ({
    name:'user',
    initialState,
})

export default userSlice.reducer;