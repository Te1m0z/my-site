import type { ReactNode } from 'react'
import React from 'react'

import * as s from './style'

export type ButtonProps = {
  type?: 'submit' | 'button'
  children: ReactNode | string
}

export default function Button({ type = 'button', children }: ButtonProps) {
  return (
    <s.Button type={type}>
      {children}
    </s.Button>
  )
}
