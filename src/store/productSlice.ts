import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";

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
        localStorage.setItem("items", JSON.stringify(state.items));
      }
    },

    removeItem(state, action) {
      const index = state.items.findIndex((item) => item.id == action.payload);
      state.items.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    updateItemInfo(state, action) {
      console.log(action);
      const currentIndex = state.items.findIndex(
        (item) => action.payload.id == item.id
      );
      const currentItem = state.items[currentIndex];

      const newData = action.payload.item;

      state.items.splice(currentIndex, 1, {
        ...currentItem,
        ...newData,
        comments: currentItem.comments,
      });

      localStorage.setItem("items", JSON.stringify(state.items));
    },
  },
});

export const { addItems, removeItem, updateItemInfo } = productsSlice.actions;

export default productsSlice.reducer;
