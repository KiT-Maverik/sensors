// MODULES
import { Theme } from '@emotion/react';

// RESOURCES
import { palette } from 'src/styles/palette.styles';

export const theme: Theme = {
	color : {
		primary : palette.primary,
		secondary : palette.secondary,
		surface : palette.surface,
		text : palette.text,
		background : palette.background,
	},
	effects: {
		shadow: '0px 1px 3px rgba(3, 0, 71, 0.17)',
	},
	font : { roboto : 'Roboto, sans-serif' },
	fontSize : {
			s : '1.4rem',
			m : '1.6rem',
			l : '2.5rem',
	},
	spacing : {
		s : 12,
		m : 18,
		l : 24,
		xl : 36,
	},
} as const;

export type TFontSize = 's' | 'm' | 'l';

export type TFont = keyof typeof theme.font;
