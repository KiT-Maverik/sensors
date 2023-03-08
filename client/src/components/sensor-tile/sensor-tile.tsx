/** @jsxImportSource @emotion/react */

// MODULES
import {useCallback, useState} from "react";
import useWebSocket from "react-use-websocket";

//COMPONENTS
import {Typography} from "src/components/typography/typography";
import {SensorIcon} from "src/components/sensor-icon/sensor-icon";
import {StatusWidget} from "src/components/status-widget/status-widget";
import {ConnectionButton} from "src/components/connection-button/connection-button";

// RESOURCES
import {ISensorData, TSensors} from "src/types/generic";
import {generateSensorMock} from "src/utils/sensor.utils";

// STYLE
import * as style from 'src/components/sensor-tile/sensor-tile.style';
import {useAppSelector} from "src/store/hooks";
import {selectFilterState} from "src/store/filter/filter.slice";

interface ISensorTileProps {
    type: TSensors
}

/**
 *
 */
export const SensorTile = ({type}: ISensorTileProps) => {
    const [sensorData, setSensorData] = useState<ISensorData>(generateSensorMock(type));
    const filterEnabled = useAppSelector(selectFilterState);

    const resetSensor = useCallback(() => setSensorData({
        ...sensorData,
        connected: false,
        value: "",
        unit: "",
    }), [sensorData, setSensorData]);

    useWebSocket('ws://localhost:5001', {
        onMessage: e => {
            const data: ISensorData = JSON.parse(e.data);

            if (data.name === type) setSensorData(data);
        },
    });

    if (filterEnabled && !sensorData.connected) return null;

    return (
            <div css={style.container}>
                <div css={style.icon}>
                    <SensorIcon sensor={sensorData.name}/>
                </div>
                <StatusWidget status={(sensorData.connected) ? 'online' : 'offline'}/>
                <Typography variant='Heading 2'>{sensorData.name}</Typography>
                <Typography variant='Heading 2'>{(sensorData.value) ? `${sensorData.value} ${sensorData.unit}` : '-'}</Typography>
                <ConnectionButton connected={sensorData.connected} sensorId={sensorData.id} resetSensor={resetSensor}/>
            </div>
    );
};
