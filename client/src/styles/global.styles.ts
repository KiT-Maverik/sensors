// MODULES
import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

// RESOURCES
import { theme } from 'src/styles/theme.style';

const globalStyles = css`
	${emotionNormalize} 
	
	#root {

		// Layout
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: space-between;
		min-height: 100vh;

		// Styling
		user-select: none;
	};
	
	body {
		font-family: 'Roboto', sans-serif;
	}

	html { 
		font-size: 10px;

		background-color: ${theme.color.background};
	}
	
	main {
		flex-grow: 1;

		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: ${theme.spacing.m}px;
		margin: 0 auto;
	},
	
	h1, h2, p {
	  margin: 0;
    },
`;

export { globalStyles };
