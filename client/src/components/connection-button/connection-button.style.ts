// MODULES
import {Interpolation, Theme} from '@emotion/react';

// RESOURCES
import {palette} from "src/styles/palette.styles";

const travel = {
    male: -2,
    female: 3,
}
const container: Interpolation<Theme> = {
    background: 'none',
    height: 32,
    width: 32,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.3s',
    cursor: 'pointer',
    transform: 'rotate(-45deg)',
};
const connected: Interpolation<Theme> = {
    border: `1px solid ${palette.utilitary.connected}`,

    svg: {
        fill: palette.utilitary.connected,
    },

    '#connection-socket-female': {
        transition: '0.3s',
        transform: `translate(${travel.female}px)`,
    },

    '#connection-socket-male': {
        transition: '0.3s',
        transform: `translate(${travel.male}px)`,
    },

    ':hover': {
        transition: '0.3s',
        border: `1px solid ${palette.utilitary.disconnected}`,

        svg: {
            fill: palette.utilitary.disconnected,
        },

        '#connection-socket-female': {
            transition: '0.3s',
            transform: `translate(0px)`,
        },

        '#connection-socket-male': {
            transition: '0.3s',
            transform: `translate(0px)`,
        },
    }
};
const disconnected: Interpolation<Theme> = {
    border: `1px solid ${palette.utilitary.disconnected}`,

    svg: {
        fill: palette.utilitary.disconnected,
    },

    ':hover': {
        transition: '0.3s',
        border: `1px solid ${palette.utilitary.connected}`,

        svg: {
            fill: palette.utilitary.connected,
        },

        '#connection-socket-female': {
            transition: '0.3s',
            transform: `translate(${travel.female}px)`,
        },

        '#connection-socket-male': {
            transition: '0.3s',
            transform: `translate(${travel.male}px)`,
        },
    }
};

export {container, connected, disconnected};
