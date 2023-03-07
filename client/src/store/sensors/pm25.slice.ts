// MODULES
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// RESOURCES
import {RootState} from "src/store/store";
import {ISensorData} from "src/types/generic";
import {generateSensorMock} from "src/utils/sensor.utils";

const initialState: ISensorData = generateSensorMock("PM2.5");

export const  pm25Slice = createSlice({
    name: 'PM2.5 sensor',
    initialState,
    reducers: {
        updatePM25: (state, action: PayloadAction<ISensorData>) => {
            state = action.payload
        },
    },
});

export const { updatePM25 } = pm25Slice.actions;

export const selectPM25SensorState = (state: RootState) => state.sensors.pm25;

export const pm25Reducer = pm25Slice.reducer;
