import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
    ListOfAllProducts: (state, action) => {
      state.items = action.payload;
    },
    createNewProduct: (state, action) => {
      state.items.push(action.payload);
    },
    editProductSlice: (state, action) => {
      const { id, data } = action.payload;
      const existingProduct = state.items.find((product) => product.id === id);
      if (existingProduct) {
        Object.assign(existingProduct, data);
      }
    },
  },
});

export const { ListOfAllProducts, createNewProduct, editProductSlice } =
  productSlice.actions;

export default productSlice.reducer;
