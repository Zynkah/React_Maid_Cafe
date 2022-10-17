import { BANQUETS } from '../../app/shared/BANQUETS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    banquetsArray: BANQUETS
};

const banquetsSlice = createSlice({
    name: 'banquets',
    initialState
});

export const banquetsReducer = banquetsSlice.reducer;

export const selectFeaturedBanquet = (state) => {
    return state.banquets.banquetsArray.find((banquet) => banquet.featured);
};
