// MODULES
import {configureStore, combineReducers} from '@reduxjs/toolkit'

// REDUCERS
import {filterReducer} from "src/store/filter/filter.slice";
import {availableSensorsReducer} from "src/store/filter/available-sensors.slice";
import {displayedSensorsReducer} from "src/store/filter/displayed-sensors.slice";
import {humidityReducer} from "src/store/sensors/humidity.slice";
import {pm10Reducer} from "src/store/sensors/pm10.slice";
import {pm25Reducer} from "src/store/sensors/pm25.slice";
import {pressureReducer} from "src/store/sensors/pressure.slice";
import {temperatureReducer} from "src/store/sensors/temperature.slice";
import {windReducer} from "src/store/sensors/wind.slice";

export const store = configureStore({
    reducer: {
        filter: combineReducers({
            status: filterReducer,
            availableSensors: availableSensorsReducer,
            displayedSensors: displayedSensorsReducer,
        }),
        sensors: combineReducers({
            humidity: humidityReducer,
            pm10: pm10Reducer,
            pm25: pm25Reducer,
            pressure: pressureReducer,
            temperature: temperatureReducer,
            wind: windReducer,
        }),
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
