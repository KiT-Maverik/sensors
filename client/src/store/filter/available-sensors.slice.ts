// MODULES
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// RESOURCES
import {RootState} from "src/store/store";

export interface IAvailableSensorsState {
    qty: number;
}

const initialState: IAvailableSensorsState = {
    qty: 0,
}

export const  availableSensorsSlice = createSlice({
    name: 'available sensors',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<number>) => {
            state.qty = action.payload
        },
    },
});

export const { set } = availableSensorsSlice.actions;

export const selectAvailableSensorsState = (state: RootState) => state.availableSensors.qty;

export const availableSensorsReducer = availableSensorsSlice.reducer;
