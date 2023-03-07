// MODULES
import React, {useCallback} from 'react';
import useWebSocket from "react-use-websocket";

// COMPONENTS
import {Footer} from "src/components/footer/footer";
import {Header} from "src/components/header/header";
import {Label} from "src/components/label/label";
import {SensorTile} from "src/components/sensor-tile/sensor-tile";

// RESOURCES
import {useAppDispatch, useAppSelector} from "src/store/hooks";
import {ISensorData} from "src/types/generic";
import {updateHumidity, selectHumiditySensorState} from "src/store/sensors/humidity.slice";
import {updatePM10, selectPM10SensorState} from "src/store/sensors/pm10.slice";
import {updatePM25, selectPM25SensorState} from "src/store/sensors/pm25.slice";
import {updatePressure, selectPressureSensorState} from "src/store/sensors/pressure.slice";
import {updateTemperature, selectTemperatureSensorState} from "src/store/sensors/temperature.slice";
import {updateWind, selectWindSensorState} from "src/store/sensors/wind.slice";

function App() {
    const dispatch = useAppDispatch();
    const humidityData = useAppSelector(selectHumiditySensorState);
    const pm10Data = useAppSelector(selectPM10SensorState);
    const pm25Data = useAppSelector(selectPM25SensorState);
    const pressureData = useAppSelector(selectPressureSensorState);
    const temperatureData = useAppSelector(selectTemperatureSensorState);
    const windData = useAppSelector(selectWindSensorState);

    const { sendMessage } = useWebSocket('ws://localhost:5001', {
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

    const handleSendMessage = useCallback(() => sendMessage('Hello'), [sendMessage]);

    return (
        <>
            <Header/>
            <main>
                <Label/>
                <SensorTile {...humidityData}/>
                <SensorTile {...pm25Data}/>
                <SensorTile {...pm10Data}/>
                <SensorTile {...pressureData}/>
                <SensorTile {...temperatureData}/>
                <SensorTile {...windData}/>
            </main>
            <Footer/>
        </>
    );
}

export default App;

// TODO: Lint
