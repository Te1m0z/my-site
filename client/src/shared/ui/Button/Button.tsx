import React from 'react'
//import cn from 'classnames'
import * as s from './ButtonStyles'
import type { ReactNode } from 'react'

export type ButtonProps = {
  type?: 'submit' | 'button'
  children: ReactNode | string
}

const Button: React.FC<ButtonProps> = ({ type = 'button', children }: ButtonProps) => {

  return (
    <s.Button type={type}>
      {children}
    </s.Button>
  )
}

export default Button
