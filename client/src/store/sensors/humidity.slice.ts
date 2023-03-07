// MODULES
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// RESOURCES
import {RootState} from "src/store/store";
import {ISensorData} from "src/types/generic";
import {generateSensorMock} from "src/utils/sensor.utils";

const initialState: ISensorData = generateSensorMock("Humidity");

export const  humiditySlice = createSlice({
    name: 'Humidity sensor',
    initialState,
    reducers: {
        updateHumidity: (state, action: PayloadAction<ISensorData>) => {
            state = action.payload
        },
    },
});

export const { updateHumidity } = humiditySlice.actions;

export const selectHumiditySensorState = (state: RootState) => state.sensors.humidity;

export const humidityReducer = humiditySlice.reducer;
