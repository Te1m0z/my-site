import styled from 'styled-components'
import { FONT_SIZES, TEXT_COLOR, FONT_FAMILIES, DEVICES } from '@/shared'

const Header = styled.header`
  border: 1px dotted red;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const Inner = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100px;

  @media ${DEVICES.md} {
    height: 50px;
  }
`

const LogoBlock = styled.div`
  font-size: ${FONT_SIZES.large};
`

const MenuBlock = styled.nav`
  margin: 0 -10px;
  font-family: ${FONT_FAMILIES.poppins};

  & a {
    position: relative;
    padding: 3px;
    margin: 0 10px;

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
  }
`

const ThemeBlock = styled.div`
  display: flex;
  align-items: center;

  & > button {
    border: 2px solid red;
    padding: 10px;
  }
`

export {
  Header,
  Inner,
  LogoBlock,
  MenuBlock,
  ThemeBlock,
}
