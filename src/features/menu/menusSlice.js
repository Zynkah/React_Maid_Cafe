import { MENU } from '../../app/shared/MENU'

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   menuArray: MENU
};

const menuSlice = createSlice({
name: 'menu',
initialState
});

export const menuReducer = menuSlice.reducer;

export const selectAllMenu = (state) => {
    return state.menu.menuArray;
};

export const selectRandomMenu = () => {
    return MENU[Math.floor(MENU.length * Math.random())];
};

export const selectMenuById = (id) => (state) => {
    return state.menu.menuArray.find((menu) => menu.id === parseInt(id));
};

export const selectFeaturedMenu = (state) => {
    return state.menu.menuArray.find((menu) => menu.featured);
};