// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ color, effects, spacing }: Theme) => ({
    backgroundColor: color.surface,
    borderRadius: 6,
    boxShadow: effects.shadow,
    padding: `${spacing.s / 2}px ${spacing.s}px`,
    boxSizing: 'border-box',

    color: color.text,
    textAlign: 'center',

    display: 'grid',
    gridTemplateColumns: 'auto auto 1fr 1fr auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.xl,

    width: '100%',
});

const icon: Interpolation<Theme> = {
    height: 32,
    width: 32,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export { container, icon };
