// MODULES
import { Interpolation, Theme } from '@emotion/react';

const noRecords: Interpolation<Theme> = ({ color, spacing }: Theme) => ({
    padding: `${spacing.xl}px 0`,
    color: color.text,
    opacity: '50%',
});

export { noRecords };
