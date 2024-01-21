import styled from 'styled-components'
import { Button } from '@/shared/ui/Button/style'
import { FONT_FAMILIES, TEXT_COLOR, FONT_WEIGHTS } from '@/shared/constants/theme'

const Main = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 30px;
  padding-top: 210px;
  padding-bottom: 90px;
`

const Title = styled.div`
  max-width: 420px;
  font-family: ${FONT_FAMILIES.poppins};
  font-size: 36px;
  font-weight: ${FONT_WEIGHTS.bold};

  .iam {
    position: relative;
    display: block;
    background: linear-gradient(90deg, ${TEXT_COLOR}, #309FBA, #FF6417);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .dev {
    position: absolute;
    background: linear-gradient(90deg, #8B5CF6, #EC4899);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Description = styled.div`
  max-width: 390px;
  font-family: ${FONT_FAMILIES.oxanium};
  font-size: 16px;
  font-weight: ${FONT_WEIGHTS.regular};
  color: ${TEXT_COLOR};
`

const ViewPortfolioButton = styled(Button)`
  width: 215px;
`

const Background = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  width: calc(100% + 180px);
  height: calc(100% - 40px);
  z-index: -1;
  border-radius: 24px;
  backdrop-filter: blur(15px);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      var(--angle),
      ${TEXT_COLOR}20,
      rgba(255, 255, 255, 0));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    animation: 5s rotate linear infinite;
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
`

export {
  Main,
  Title,
  Description,
  ViewPortfolioButton,
  Background
}