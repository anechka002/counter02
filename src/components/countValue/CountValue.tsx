import React, { ChangeEvent, useState } from 'react'
import { CounterStateType } from '../../App'
import s from './CountValue.module.css'

type Props = {
  updateEditMode: (isEditMode: boolean) => void
  counterState: CounterStateType
  updateMinInputValue: (minInputValue: number) => void
  updateMaxInputValue: (maxInputValue: number) => void
  incrementCounter: () => void
}

export function CountValue(props: Props) {

  const onClickSetNewValueHandler = () =>{
    localStorage.setItem('maxValue', JSON.stringify(props.counterState.maxInputValue))
    localStorage.setItem('minValue', JSON.stringify(props.counterState.minInputValue))
    props.updateEditMode(false)
  }

  const onChangeMinInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    props.updateMinInputValue(+e.currentTarget.value)
  }

  const onChangeMaxInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    props.updateMaxInputValue(+e.currentTarget.value)
  }
  

  // const goBack = () => {
  //   props.updateEditMode(false)
  // }

  return (
    <div className={s.counterValue}>
      <div className={s.inputField}>
        <div>
          <span>max value:</span>
          <input 
            className={props.counterState.minInputValue >= props.counterState.maxInputValue ? s.inputRed : s.inputStyle}
            type="number" 
            value={props.counterState.maxInputValue}
            onChange={onChangeMaxInputValue}
          />
        </div>
        <div>
          <span>min value:</span>
          <input 
            className={props.counterState.minInputValue < 0 || props.counterState.minInputValue >= props.counterState.maxInputValue ? s.inputRed : s.inputStyle}
            type="number" 
            value={props.counterState.minInputValue}
            onChange={onChangeMinInputValue}
          />
        </div>
      </div>
        <div className={s.btnField}>
          <button 
            className={s.btn}
            onClick={onClickSetNewValueHandler}
            disabled={props.counterState.minInputValue < 0 || props.counterState.minInputValue >= props.counterState.maxInputValue}
          >
            set
          </button>  
        </div>
    </div>
  )
}

export default CountValue