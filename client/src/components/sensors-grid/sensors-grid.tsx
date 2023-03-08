// MODULES
import React from 'react';
import useWebSocket from "react-use-websocket";

// COMPONENTS
import {SensorTile} from "src/components/sensor-tile/sensor-tile";

// RESOURCES
import {useAppDispatch} from "src/store/hooks";
import {ISensorData} from "src/types/generic";
import {updateHumidity} from "src/store/sensors/humidity.slice";
import {updatePM10} from "src/store/sensors/pm10.slice";
import {updatePM25} from "src/store/sensors/pm25.slice";
import {updatePressure} from "src/store/sensors/pressure.slice";
import {updateTemperature} from "src/store/sensors/temperature.slice";
import {updateWind} from "src/store/sensors/wind.slice";

export const SensorsGrid = () => {
    const dispatch = useAppDispatch();

    useWebSocket('ws://localhost:5001', {
        onMessage: e => {
            const data: ISensorData = JSON.parse(e.data);

            switch (data.name) {
                case "Humidity": {
                    dispatch(updateHumidity(data));
                    break;
                }
                case "PM2.5": {
                    dispatch(updatePM25(data));
                    break;
                }
                case "PM10": {
                    dispatch(updatePM10(data));
                    break;
                }
                case "Pressure": {
                    dispatch(updatePressure(data));
                    break;
                }
                case "Temperature": {
                    dispatch(updateTemperature(data));
                    break;
                }
                case "Wind": {
                    dispatch(updateWind(data));
                    break;
                }
            }
        },
    });

    return (<>
        <SensorTile type="Humidity"/>
        <SensorTile type="PM2.5"/>
        <SensorTile type="PM10"/>
        <SensorTile type="Pressure"/>
        <SensorTile type="Temperature"/>
        <SensorTile type="Wind"/>
    </>)
}
