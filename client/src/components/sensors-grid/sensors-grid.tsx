// MODULES
import React from 'react';

// COMPONENTS
import {SensorTile} from "src/components/sensor-tile/sensor-tile";

export const SensorsGrid = () => {

    return (<>
        <SensorTile type="Humidity"/>
        <SensorTile type="PM2.5"/>
        <SensorTile type="PM10"/>
        <SensorTile type="Pressure"/>
        <SensorTile type="Temperature"/>
        <SensorTile type="Wind"/>
    </>)
}
