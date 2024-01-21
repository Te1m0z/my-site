import React from 'react'
import {
  useController,
} from 'react-hook-form'
import cn from 'classnames'
//import { v4 as uuid } from 'uuid'
import * as s from './InputStyles'
import type {
  Control,
  RegisterOptions,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form'
import type { ReactNode, TextareaHTMLAttributes, InputHTMLAttributes } from 'react'

export type Props<T extends FieldValues> = {
  type?: 'text' | 'email' | 'password'
  name: Path<T>
  placeholder?: string
  multiline?: boolean
  width?: number
  control: Control<T>
  rules?: RegisterOptions
  defaultValue?: PathValue<T, Path<T>>
  label?: string
  children?: ReactNode
}

export type ExtendedProps<T extends FieldValues> = Props<T> & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
)

const Input = <T extends FieldValues>({
  type = 'text',
  name,
  placeholder = '',
  multiline = false,
  control,
  rules = {},
  defaultValue = '' as PathValue<T, Path<T>>,
  label,
  children,
  ...props
}: ExtendedProps<T>) => {

  // if (type === 'email')
  //   Object.assign(rules, {
  //     pattern: {
  //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //       message: 'Invalid email address',
  //     },
  //   })
  //
  //
  // if (type === 'password')
  //   rules = {
  //     minLength: {
  //       value: 8,
  //       message: 'Password must be at least 8 characters long',
  //     },
  //     ...rules,
  //   }
  //
  //
  // // Если нет дефолт сообщения - то устанавливаем
  // if (typeof rules.required === 'boolean')
  //   rules.required = {
  //     value: true,
  //     message: 'Поле ' + label + ' должно быть заполнено',
  //   }

  const { field, fieldState: { invalid } } = useController({ control, name, rules, defaultValue })

  return (
    <s.InputWrap className={cn('input', { error: invalid })}>
      {!!label && <s.Label className={cn({ invalid })}>{label}</s.Label>}
      {multiline ? (
        <textarea
          placeholder={placeholder}
          {...field}
        />
      ) : (
        <s.Input
          type={type}
          placeholder={placeholder}
          className={cn({ error: invalid })}
          {...field}
        />
      )}
      {children}
    </s.InputWrap>
  )
}

export default Input
