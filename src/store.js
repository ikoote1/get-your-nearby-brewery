import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(
    {
        reducer: {
            brewery: categoryReducer,
        }
    }
);

export default store;