import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './redux/category/categorySlice';

const store = configureStore(
  {
    reducer: {
      brewery: categoryReducer,
    },
  },
);

export default store;
