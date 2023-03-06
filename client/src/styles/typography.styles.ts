// MODULES
import { Interpolation, Theme } from '@emotion/react';

export type TTypography = 'Heading 1' | 'Heading 2' | 'Text';

const heading1: Interpolation<Theme> = ({ fontSize }: Theme) => ({
	fontSize : fontSize.l,
	fontWeight: 'bold',
});

const heading2: Interpolation<Theme> = ({ fontSize }: Theme) => ({
	fontSize : fontSize.m,
	fontWeight: 300,
	letterSpacing: 0.3,
});

const text: Interpolation<Theme> = ({ fontSize }: Theme) => ({
	fontSize : fontSize.s,
	fontWeight: 300,
	letterSpacing: 0.3,
});

export { heading1, heading2, text };
