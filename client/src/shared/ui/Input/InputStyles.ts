import { styled } from 'styled-components'
//import themes, { Theme as t } from '@/styles/themes'
import { COLORS } from '../../constants/theme'

export const Input = styled.input`
  position: relative;
  display: block;
  width: 100%;
  padding: 16px 14px;
  border: 1px solid ${COLORS.purple};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Oxanium', sans-serif;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: transparent;
    transition: 300ms ease;
  }

  &.error {
    &::after {
      background-color: red;
    }
  }
`

export const Label = styled.label`
  position: relative;
  display: inline-block;
  padding: 3px 10px;
  border-top: 1px solid ${COLORS.purple};
  border-left: 1px solid ${COLORS.purple};
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    right: 0;
    width: 38px;
    transform: translateX(100%) rotate(65deg);
    transform-origin: left;
    background-color: ${COLORS.purple};
    border-top: 1px solid ${COLORS.purple};
  }
`
