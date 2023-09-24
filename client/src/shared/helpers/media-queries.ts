import { css, type CSSProp } from 'styled-components'
import { DEVICES } from '../constants/theme'

const media = {
  xs: (...args) => css`
    @media ${DEVICES.xs} {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media ${DEVICES.sm} {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media ${DEVICES.md} {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media ${DEVICES.lg} {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media ${DEVICES.xl} {
      ${css(...args)};
    }
  `,
  xxl: (...args) => css`
    @media ${DEVICES.xxl} {
      ${css(...args)};
    }
  `,
}

export {
    media
}