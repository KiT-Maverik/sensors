// MODULES
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// RESOURCES
import {RootState} from "src/store/store";
import {ISensorData} from "src/types/generic";
import {generateSensorMock} from "src/utils/sensor.utils";

const initialState: ISensorData = generateSensorMock("Temperature");

export const  temperatureSlice = createSlice({
    name: 'Temperature sensor',
    initialState,
    reducers: {
        updateTemperature: (state, action: PayloadAction<ISensorData>) => {
            state = action.payload
        },
    },
});

export const { updateTemperature } = temperatureSlice.actions;

export const selectTemperatureSensorState = (state: RootState) => state.sensors.temperature;

export const temperatureReducer = temperatureSlice.reducer;
