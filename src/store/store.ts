import { configureStore } from "@reduxjs/toolkit";
import productSlice, { initialStateType as Products } from "./productSlice";

export type storeType = {
  products: Products;
};
export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
