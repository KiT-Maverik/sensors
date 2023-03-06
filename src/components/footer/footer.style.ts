// MODULES
import { Interpolation, Theme } from '@emotion/react';

const style: Interpolation<Theme> = ({ color, spacing }: Theme) => ({
    backgroundColor: color.primary,
    padding: `${spacing.m}px 0`,
    display: 'flex',
    justifyContent: 'center',
    gap: spacing.xl,
    color: color.surface,
});

export { style };
