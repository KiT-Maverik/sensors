// MODULES
import {Interpolation, Theme} from '@emotion/react';

const style: Interpolation<Theme> = ({color}: Theme) => ({
    background: 'none',
    border: 'none',
    height: 32,
    width: 32,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.3s',
    cursor: 'pointer',

    svg: {
        fill: color.text,
    },

    ':hover': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        transition: '0.3s',
    }
});

export {style};
