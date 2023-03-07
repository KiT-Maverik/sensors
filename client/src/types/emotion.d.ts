// MODULES
import '@emotion/react';

// RESOURCES
import { TFontSize, TLayout } from 'src/styles/theme.style';

declare module '@emotion/react' {

	// Naming convention disabled because following interface redefines third-party interface
	// eslint-disable-next-line @typescript-eslint/naming-convention
	export interface Theme {
		color: {
			primary: string,
			secondary: string,
			surface: string,
			text: string,
			background: string,
		},
		effects: {
			shadow: string;
		}
		font: {
			roboto: string;
		}
		fontSize: { [fontSize in TFontSize]: string; },
		spacing: {
			s: number;
			m: number;
			l: number;
			xl: number;
		}
	}
}
