import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from '../features/menu/menusSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer
  },
});
