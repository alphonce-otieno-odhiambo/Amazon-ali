import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//the global store containig one slice
//It can have multiple slices
export const  store  = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
