import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const items = [...state.items, action.payload];
      return { items };
    },
    removeItem: (state, action) => {
      const idToRemove = action.payload.id;
      const items = state.items.filter((item) => item.id !== idToRemove);
      return { items };
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
