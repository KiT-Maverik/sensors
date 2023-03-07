/** @jsxImportSource @emotion/react */
// TODO: resolve

//COMPONENTS
import {Typography} from "src/components/typography/typography";
import {SensorIcon} from "src/components/sensor-icon/sensor-icon";
import {StatusWidget} from "src/components/status-widget/status-widget";
import {ConnectionButton} from "src/components/connection-button/connection-button";

// RESOURCES
import {ISensorData} from "src/types/generic";

// STYLE
import * as style from 'src/components/sensor-tile/sensor-tile.style';

/**
 *
 */
export const SensorTile = ({id, name, connected, unit, value }: ISensorData) => {

    return (
            <div css={style.container}>
                <div css={style.icon}>
                    <SensorIcon sensor={name}/>
                </div>
                <StatusWidget status={(connected) ? 'online' : 'offline'}/>
                <Typography variant='Heading 2'>{name}</Typography>
                <Typography variant='Heading 2'>{(value) ? `${value} ${unit}` : '-'}</Typography>
                <ConnectionButton connected={connected} sensorId={id}/>
            </div>
    );
};
