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
      const indexToRemove = action.payload;

      const items = state.items.slice();
      items.splice(indexToRemove, 1);
      return { items };
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
