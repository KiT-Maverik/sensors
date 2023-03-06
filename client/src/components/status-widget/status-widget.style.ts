// MODULES
import { Interpolation, Theme } from '@emotion/react';

// RESOURCES
import {palette} from "src/styles/palette.styles";

const common: Interpolation<Theme> = {
    color: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 86,
    lineHeight: '24px',
    borderRadius: 12,
};

const offline: Interpolation<Theme> = {
    backgroundColor: palette.utilitary.offline,
    ...common,
};

const online: Interpolation<Theme> = {
    backgroundColor: palette.utilitary.online,
    ...common,
};

export { offline, online };
