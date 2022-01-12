import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    totalItems: 0,
    itemsToAdd: 0,
  },

  reducers: {
    addItem: (state) => {
      state.totalItems += state.itemsToAdd;
    },
    deleteItems: (state) => {
      state.totalItems = 0;
    },
    incrementItemsToAdd: (state) => {
      state.itemsToAdd = state.itemsToAdd + 1;
    },
    decrementItemsToAdd: (state) => {
      state.itemsToAdd = state.itemsToAdd - 1;
    },
  },
});

export const {
  addItem,
  deleteItems,
  incrementItemsToAdd,
  decrementItemsToAdd,
} = itemsSlice.actions;

export const selectItems = (state) => state.items.totalItems;
export const selectItemsToAdd = (state) => state.items.itemsToAdd;

export default itemsSlice.reducer;
