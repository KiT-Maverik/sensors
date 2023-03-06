// MODULES
import React from 'react';

// COMPONENTS
import {Footer} from "src/components/footer/footer";
import {Header} from "src/components/header/header";
import {Label} from "src/components/label/label";
import {StatusWidget} from "src/components/status-widget/status-widget";
import {SensorTile} from "src/components/sensor-tile/sensor-tile";
import {ISensorData} from "src/types/generic";

// TODO: delete
const mock: ISensorData = {
    id: 'sensorId',
    name: "Humidity",
    connected: true,
    unit: "%",
    value: "60",
}

function App() {
    return (
        <>
            <Header/>
            <main>
                <Label/>
                <SensorTile {...mock}/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
