import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

const appStore = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default appStore;
