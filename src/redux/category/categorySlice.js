import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getData = createAsyncThunk('brewery/getData', async () => {
    try {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
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
        },
        extraReducers: (builder) => {
            builder
              .addCase(getData.pending, (state) => ({
                ...state,
                isLoading: true,
              }))
              .addCase(getData.fulfilled, (state, action) => (
                console.log(getData),
                {
                  ...state,
                  isLoading: false,
                  dataStore: action.payload,
                }))
              .addCase(getData.rejected, (state) => ({
                ...state,
                isLoading: false,
                error: 'state error',
              }));
          },
    },
);

export default categorySlice.reducer