// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ color, effects, spacing }: Theme) => ({
    backgroundColor: color.surface,
    boxShadow: effects.shadow,
    padding: `${spacing.m}px 0`,
    textAlign: 'center',
});

const logo: Interpolation<Theme> = ({ color}: Theme) => ({
    fill: color.text,
});

export { container, logo };
