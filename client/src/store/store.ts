// MODULES
import {configureStore} from '@reduxjs/toolkit'

// RESOURCES
import {filterReducer} from "src/store/filter/filter.slice";
import {humidityReducer} from "src/store/sensors/humidity.slice";
import {pm10Reducer} from "src/store/sensors/pm10.slice";
import {pm25Reducer} from "src/store/sensors/pm25.slice";
import {pressureReducer} from "src/store/sensors/pressure.slice";
import {temperatureReducer} from "src/store/sensors/temperature.slice";
import {windReducer} from "src/store/sensors/wind.slice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        humidity: humidityReducer,
        pm10: pm10Reducer,
        pm25: pm25Reducer,
        pressure: pressureReducer,
        temperature: temperatureReducer,
        wind: windReducer,
    }
})
// TODO: Organise store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
