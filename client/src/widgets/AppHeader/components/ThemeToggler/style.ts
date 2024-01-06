import styled from 'styled-components'
import { TEXT_COLOR } from '@/shared'

const ThemeToggler = styled.button`
  display: flex;
  column-gap: 15px;
`

const ThemeTogglerItem = styled.div`
  position: relative;
  padding-bottom: 10px;
  
  &.active {
    &::before {
      width: 100%;
    }
  }

  &:hover {
    &::before {
      width: 100%;
      right: auto;
      left: 0;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0%;
    height: 1px;
    background-color: ${TEXT_COLOR};
    transition: width 300ms ease;
  }
`

export {
  ThemeToggler,
  ThemeTogglerItem
}