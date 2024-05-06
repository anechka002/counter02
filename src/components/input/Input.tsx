import React, { ChangeEvent, ComponentPropsWithoutRef, InputHTMLAttributes } from 'react'

type Props = {
  onChangeValue?:(value: string)=>void
}& ComponentPropsWithoutRef<'input'>

function Input({ onChange,onChangeValue, ...restProps }: Props) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }
  return (
    <input {...restProps} onChange={handleOnChange}/>  
  )
}

export default Input