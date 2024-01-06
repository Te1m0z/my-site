import { BREAKPOINTS } from '../constants/theme'

type TAppTheme = 'light' | 'system' | 'dark'

type Breakpoint = keyof typeof BREAKPOINTS;

export type {
  TAppTheme,
  Breakpoint,
}