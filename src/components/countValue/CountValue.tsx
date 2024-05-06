import React, { ChangeEvent, useState } from 'react'
import { CounterStateType } from '../../App'
import s from './CountValue.module.css'
import Input from '../input/Input'
import Button from '../button/Button'

type Props = {
  updateEditMode: (isEditMode: boolean) => void
  counterState: CounterStateType
  updateMinInputValue: (minInputValue: number) => void
  updateMaxInputValue: (maxInputValue: number) => void
}

export function CountValue({updateEditMode, counterState, updateMinInputValue, updateMaxInputValue}: Props) {

  const onClickSettingsHandler = () => {
    localStorage.setItem('maxValue', JSON.stringify(counterState.maxInputValue))
    localStorage.setItem('minValue', JSON.stringify(counterState.minInputValue))
    updateEditMode(false)
  }

  const onChangeMinInputValue = (e:ChangeEvent<HTMLInputElement>) => { // можно так
    updateMinInputValue(+e.currentTarget.value)
  }

  return (
    <div className={s.counterValue}>
      <div className={s.inputField}>
        <div>
          <span>max value:</span>
          <Input 
            className={counterState.minInputValue >= counterState.maxInputValue ? s.inputRed : s.inputStyle}
            type="number" 
            value={counterState.maxInputValue}
            onChangeValue={value=>updateMaxInputValue(+value)} // так тоже можно
          />
          {/* <input 
            className={props.counterState.minInputValue >= props.counterState.maxInputValue ? s.inputRed : s.inputStyle}
            type="number" 
            value={props.counterState.maxInputValue}
            onChange={onChangeMaxInputValue}
          /> */}
        </div>
        <div>
          <span>min value:</span>
          <Input
            className={counterState.minInputValue < 0 || counterState.minInputValue >= counterState.maxInputValue ? s.inputRed : s.inputStyle} 
            type={"number"} 
            value={counterState.minInputValue} 
            onChange={onChangeMinInputValue}
          />
          {/* <input 
            className={props.counterState.minInputValue < 0 || props.counterState.minInputValue >= props.counterState.maxInputValue ? s.inputRed : s.inputStyle}
            type="number" 
            value={props.counterState.minInputValue}
            onChange={onChangeMinInputValue}
          /> */}
        </div>
      </div>
        <div className={s.btnField}>
          <Button
            className={s.btn}
            onClick={onClickSettingsHandler}
            disabled={counterState.minInputValue < 0 || counterState.minInputValue >= counterState.maxInputValue}
          >set</Button>
          {/* <button 
            className={s.btn}
            onClick={onClickSetNewValueHandler}
            disabled={props.counterState.minInputValue < 0 || props.counterState.minInputValue >= props.counterState.maxInputValue}
          >
            set
          </button>   */}
        </div>
    </div>
  )
}

export default CountValue