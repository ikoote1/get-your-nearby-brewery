// import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.openbrewerydb.org/v1/breweries';

export const getData = createAsyncThunk('brewery/getData', async () => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const categorySlice = createSlice(
  {
    name: 'brewery',
    initialState: {
      dataStore: [],
      isLoading: true,
    },
    reducers: {
      showData: (state, action) => ({
        ...state,
        brewery: state.dataStore.filter((item) => item.id === action.payload),
      }),
    },
    extraReducers: (builder) => {
      builder
        .addCase(getData.pending, (state) => ({
          ...state,
          isLoading: true,
        }))
        .addCase(getData.fulfilled, (state, action) => (
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

export const { showData } = categorySlice.actions;
export default categorySlice.reducer;
