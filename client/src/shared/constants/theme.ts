import theme from 'styled-theming'
import type { TAppTheme } from '../interfaces/Theme'
import { oxanium, poppins } from '@/app/styles/fonts'

const DEFAULT_THEME: TAppTheme = 'light'

const COLORS = {
  purple: '#EC4899',
  greyDark: '#0C0F1F',
  white: '#F9FAFB',
} as const

const FONT_SIZES = {
  base: '18px',
  large: '25px',
} as const

const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const

const FONT_FAMILIES = {
  oxanium: oxanium.style.fontFamily,
  poppins: poppins.style.fontFamily,
} as const

const SIZES = {
  siteContainer: '1024px',
} as const

const BREAKPOINTS = {
  xxl: '1920px',
  xl: '1200px',
  lg: '991px',
  md: '768px',
  sm: '600px',
  xs: '400px',
} as const

const DEVICES = {
  xs: `(max-width: ${BREAKPOINTS.xs})`,
  sm: `(max-width: ${BREAKPOINTS.sm})`,
  md: `(max-width: ${BREAKPOINTS.md})`,
  lg: `(max-width: ${BREAKPOINTS.lg})`,
  xl: `(max-width: ${BREAKPOINTS.xl})`,
  xxl: `(max-width: ${BREAKPOINTS.xxl})`,
} as const

const TEXT_COLOR = theme('value', {
  light: COLORS.greyDark,
  dark: COLORS.white,
})

const BG_COLOR = theme('value', {
  light: COLORS.white,
  dark: COLORS.greyDark,
})

export {
  DEFAULT_THEME,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  FONT_FAMILIES,
  BREAKPOINTS,
  SIZES,
  TEXT_COLOR,
  BG_COLOR,
  DEVICES,
}
