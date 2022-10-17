import { MAIDS } from '../../app/shared/MAIDS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    maidsArray: MAIDS
};

const maidsSlice = createSlice({
    name: 'maids',
    initialState
});

export const maidsReducer = maidsSlice.reducer;

export const selectAllMaids = (state) => {
    return state.maids.maidsArray;
};

export const selectFeaturedMaids = (state) => {
    return state.maids.maidsArray.find((maid) => maid.featured);
};