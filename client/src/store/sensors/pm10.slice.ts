// MODULES
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// RESOURCES
import {RootState} from "src/store/store";
import {ISensorData} from "src/types/generic";
import {generateSensorMock} from "src/utils/sensor.utils";

const initialState: ISensorData = generateSensorMock("PM10");

export const  pm10Slice = createSlice({
    name: 'PM10 sensor',
    initialState,
    reducers: {
        updatePM10: (state, action: PayloadAction<ISensorData>) => {
            state = action.payload
        },
    },
});

export const { updatePM10 } = pm10Slice.actions;

export const selectPM10SensorState = (state: RootState) => state.pm10;

export const pm10Reducer = pm10Slice.reducer;
