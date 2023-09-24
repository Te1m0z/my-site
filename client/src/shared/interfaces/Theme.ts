import { BREAKPOINTS } from '../constants/theme'

type TAppTheme = 'light' | 'dark'

type Breakpoint = keyof typeof BREAKPOINTS;

export type {
  TAppTheme,
  Breakpoint,
}