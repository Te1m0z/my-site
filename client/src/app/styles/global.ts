import { createGlobalStyle } from 'styled-components'
import { TEXT_COLOR, BG_COLOR, FONT_FAMILIES, FONT_SIZES, SIZES, FONT_WEIGHTS } from '@/shared'

export const GlobalStylesWithTheme = createGlobalStyle`
	body {
		color: ${TEXT_COLOR};
		background-color: ${BG_COLOR};
	}
`

const GlobalStyles = createGlobalStyle`
	body,
	html {
		overflow-x: hidden;
		scroll-behavior: smooth;
	}

	body {
		font-family: ${FONT_FAMILIES.oxanium};
		font-size: ${FONT_SIZES.base};
		font-weight: ${FONT_WEIGHTS.regular};
		line-height: 1.5;
		color: ${TEXT_COLOR};
		background-color: ${BG_COLOR};
		transition: 300ms ease background-color, 300ms ease color;

		background-image: url('https://pbs.twimg.com/media/GAEbE2bWoAAIonp?format=jpg&name=medium');
	}

	#__next {
		display: flex;
		flex-flow: column nowrap;
		min-width: 320px;
		min-height: 100vh;
		
		/* REMOVE */
		height: 3000px;
	}

	.container {
		width: 100%;
		max-width: ${SIZES.siteContainer};
		padding: 0 15px;
		margin: 0 auto;
		height: 100%;
	}

	img {
		object-fit: cover;
	}

	.icon {
		display: block;
		margin: 0;
		padding: 0;
		pointer-events: none;
		touch-action: none;
		fill: var(--fill-color, currentColor);
		stroke: var(--stroke-color, transparent);
	}
`

export default GlobalStyles
