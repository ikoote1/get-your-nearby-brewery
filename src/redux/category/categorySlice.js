import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getData = createAsyncThunk('brewery/getData', async () => {
    try {
        const response = await fetch(url);
        const data = response.json();
        return data;
    } catch (error) {
        return error;
    }
} );

const categorySlice = createSlice(
    {
        name: 'brewery',
        initialState: {
            dataStore: [],
            isLoading: true,
        }
    }
);

export default categorySlice.reducer