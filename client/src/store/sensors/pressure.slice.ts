// MODULES
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// RESOURCES
import {RootState} from "src/store/store";
import {ISensorData} from "src/types/generic";
import {generateSensorMock} from "src/utils/sensor.utils";

const initialState: ISensorData = generateSensorMock("Pressure");

export const  pressureSlice = createSlice({
    name: 'Pressure sensor',
    initialState,
    reducers: {
        updatePressure: (state, action: PayloadAction<ISensorData>) => {
            state = action.payload
        },
    },
});

export const { updatePressure } = pressureSlice.actions;

export const selectPressureSensorState = (state: RootState) => state.sensors.pressure;

export const pressureReducer = pressureSlice.reducer;
