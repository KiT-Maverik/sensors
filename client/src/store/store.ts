// MODULES
import {configureStore, combineReducers} from '@reduxjs/toolkit'

// REDUCERS
import {filterReducer} from "src/store/filter/filter.slice";
import {availableSensorsReducer} from "src/store/filter/available-sensors.slice";
import {displayedSensorsReducer} from "src/store/filter/displayed-sensors.slice";

export const store = configureStore({
    reducer: {
        filter: combineReducers({
            status: filterReducer,
            availableSensors: availableSensorsReducer,
            displayedSensors: displayedSensorsReducer,
        }),
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
