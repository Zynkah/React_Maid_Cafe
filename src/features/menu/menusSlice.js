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

export const selectAllMenu = () => {
    return MENU
};

export const selectRandomMenu = () => {
    return MENU[Math.floor(MENU.length * Math.random())];
};

export const selectMenuById = (id) => {
    return MENU.find((menu) => menu.id === parseInt(id));
};

export const selectFeaturedMenu = () => {
    return MENU.find((menu) => menu.featured);
};