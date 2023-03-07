// MODULES
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// RESOURCES
import {RootState} from "src/store/store";
import {ISensorData} from "src/types/generic";
import {generateSensorMock} from "src/utils/sensor.utils";

const initialState: ISensorData = generateSensorMock("Wind");

export const  windSlice = createSlice({
    name: 'Wind sensor',
    initialState,
    reducers: {
        updateWind: (state, action: PayloadAction<ISensorData>) => {
            state = action.payload
        },
    },
});

export const { updateWind } = windSlice.actions;

export const selectWindSensorState = (state: RootState) => state.wind;

export const windReducer = windSlice.reducer;
