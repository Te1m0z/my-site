import styled from 'styled-components'
//import themes, { Theme as t } from '@/styles/themes'
//import { COLORS } from '@/styles/vars'

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 150px;
`

export const InputContainer = styled.div`
  margin-bottom: 20px;

  /* &:last-of-type {
    margin-bottom: 40px;
  } */
`

export const FormTitle = styled.h3`
  margin-bottom: 40px;
  font-size: 30px;
  text-align: center;
`

export const FormError = styled.div`
  color: red;
`
