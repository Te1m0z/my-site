import * as s from './style'

export default function HelloSection() {

  return (
    <s.Main>
      <s.Background />
      <s.Title>
        <span className='iam'>Hi, my name is Dmitry I am a Web &nbsp;<span className='dev'>Developer</span></span>
      </s.Title>
      <s.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </s.Description>
      <s.ViewPortfolioButton>
        View Portfolio
      </s.ViewPortfolioButton>
    </s.Main>
  )
}
