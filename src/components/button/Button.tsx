import React, { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
}&ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: Props) {
  return (
    <button {...props} />
  )
}

export default Button