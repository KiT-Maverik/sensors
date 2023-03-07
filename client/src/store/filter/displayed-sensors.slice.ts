// MODULES
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// RESOURCES
import {RootState} from "src/store/store";

export interface IDisplayedSensorsState {
    qty: number;
}

const initialState: IDisplayedSensorsState = {
    qty: 0,
}

export const  displayedSensorsSlice = createSlice({
    name: 'displayed sensors',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<number>) => {
            state.qty = action.payload
        },
    },
});

export const { set } = displayedSensorsSlice.actions;

export const selectDisplayedSensorsState = (state: RootState) => state.filter.displayedSensors.qty;

export const displayedSensorsReducer = displayedSensorsSlice.reducer;
