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
	}

	#__next {
		display: flex;
		flex-flow: column nowrap;
		min-width: 320px;
		min-height: 100vh;
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
`

export default GlobalStyles
