/** @jsxImportSource @emotion/react */

// MODULES
import {useMemo} from "react";

// RESOURCES
import {TSensors} from "src/types/generic";

//ICONS
import {ReactComponent as HumidityIcon} from "src/resources/sensors/humidity.svg";
import {ReactComponent as PM10Icon} from "src/resources/sensors/pm10.svg";
import {ReactComponent as PM25Icon} from "src/resources/sensors/pm25.svg";
import {ReactComponent as PressureIcon} from "src/resources/sensors/pressure.svg";
import {ReactComponent as TemperatureIcon} from "src/resources/sensors/temperature.svg";
import {ReactComponent as WindIcon} from "src/resources/sensors/wind.svg";

// STYLE
import * as style from './sensor-icon.style';

interface ISensorIconProps {
    sensor: TSensors;
}

/**
 *
 */
export const SensorIcon = ({ sensor }: ISensorIconProps) => {
    return useMemo(() => {
        switch (sensor) {
            case "Humidity":
                return <HumidityIcon css={style.humidity}/>;
            case "PM10":
                return <PM10Icon css={style.pm10}/>;
            case "PM2.5":
                return <PM25Icon css={style.pm25}/>;
            case "Pressure":
                return <PressureIcon css={style.pressure}/>;
            case "Temperature":
                return <TemperatureIcon css={style.temperature}/>;
            case "Wind":
                return <WindIcon css={style.wind}/>;
        }
    }, [sensor]);
};
