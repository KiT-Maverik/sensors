// MODULES
import { Interpolation, Theme } from '@emotion/react';
import {palette} from "src/styles/palette.styles";

const humidity: Interpolation<Theme> = {
    fill: palette.sensors.humidity,
};

const pm10: Interpolation<Theme> = {
    fill: palette.sensors.pm10,
};

const pm25: Interpolation<Theme> = {
    fill: palette.sensors.pm25,
};

const pressure: Interpolation<Theme> = {
    fill: palette.sensors.pressure,
};

const temperature: Interpolation<Theme> = {
    fill: palette.sensors.temperature,
};

const wind: Interpolation<Theme> = {
    fill: palette.sensors.wind,
};

export { humidity, pm10, pm25, pressure, temperature, wind};
