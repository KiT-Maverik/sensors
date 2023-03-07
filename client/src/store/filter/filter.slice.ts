// MODULES
import { createSlice } from '@reduxjs/toolkit';

// RESOURCES
import {RootState} from "src/store/store";

export interface FilterState {
    enabled: boolean;
}

const initialState: FilterState = {
    enabled: false,
}

export const  filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        disable: (state) => {
            state.enabled = false
        },
        enable: (state) => {
            state.enabled = true
        },
    },
});

export const { enable, disable } = filterSlice.actions;

export const selectFilterState = (state: RootState) => state.filter.enabled;

export const filterReducer = filterSlice.reducer;
