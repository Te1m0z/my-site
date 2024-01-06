import styled from 'styled-components'
import { SIZES } from '@/shared/constants/theme'

const Main = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 30px;
  padding-top: 210px;
  padding-bottom: 90px;
  //border: 1px solid red;
`

const Title = styled.div`
  max-width: 420px;
`

const Description = styled.div`
  max-width: 390px;
`

const Button = styled.div`
  display: flex;
  column-gap: 15px;
`

const Background = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  width: calc(100% + 180px);
  height: calc(100% - 40px);
  padding: 2px;
  z-index: -1;
  border-radius: 50px; 
  border: 5px solid transparent;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.50), transparent) border-box;
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(15px);
  }
`

export {
  Main,
  Title,
  Description,
  Button,
  Background
}