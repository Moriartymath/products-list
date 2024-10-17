import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";
import { act } from "react";

export type initialStateType = {
  items: Array<Product>;
};

const initialState = {
  items: JSON.parse(localStorage.getItem("items") || "[]"),
} as initialStateType;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItems(state, action) {
      if (!state.items.find((el) => el.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItems } = productsSlice.actions;

export default productsSlice.reducer;
