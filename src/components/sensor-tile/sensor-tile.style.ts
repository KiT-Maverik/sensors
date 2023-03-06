// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ color, effects, spacing }: Theme) => ({
    backgroundColor: color.surface,
    borderRadius: 6,
    boxShadow: effects.shadow,
    padding: `${spacing.s / 2}px ${spacing.s}px`,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: color.text,

    width: 570,
});

const icon: Interpolation<Theme> = {
    height: 32,
    width: 32,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};



export { container, icon };
