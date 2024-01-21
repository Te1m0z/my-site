import { styled } from 'styled-components'
//import themes, { Theme as t } from '@/styles/themes'
import { COLORS } from '@/shared'

export const InputWrap = styled.div`
  position: relative;

  &.error {
    animation: shake 0.3s ease-in-out 0s 2;
  }

  @keyframes shake {
    0% {
      left: 0rem;
    }
    25% {
      left: 0.3rem;
    }
    75% {
      left: -0.3rem;
    }
    100% {
      left: 0rem;
    }
  }
`

export const Input = styled.input`
  position: relative;
  display: block;
  width: 100%;
  padding: 16px 14px;
  border: 1px solid ${COLORS.purple};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Oxanium', sans-serif;

  &.error {
    border-color: red;
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

  &.invalid {
    color: red;
    border-color: red;
    &::before {
      border-color: red;
    }
  }
`
