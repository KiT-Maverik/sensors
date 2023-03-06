// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ spacing }: Theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.l,
    width: '100%',
    padding: `0 ${spacing.s / 2}px` ,
    boxSizing: 'border-box',
});

const sensorIcon: Interpolation<Theme> = ({ color, spacing }: Theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: spacing.l,
    fill: color.secondary,
});

const header: Interpolation<Theme> = ({ color }: Theme) => ({
    flexGrow: 1,
    color: color.text,
});

export { container, header, sensorIcon };
