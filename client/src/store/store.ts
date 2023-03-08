// MODULES
import {configureStore, combineReducers} from '@reduxjs/toolkit'

// REDUCERS
import {filterReducer} from "src/store/filter/filter.slice";

export const store = configureStore({
    reducer: {
        filter: combineReducers({
            status: filterReducer,
        }),
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
