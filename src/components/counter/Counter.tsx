import React, { useState } from 'react';
import { CounterStateType } from '../../App';
import s from './Counter.module.css'
import Button from '../button/Button';

type Props = {
  updateEditMode: (value: boolean) => void
  counterState: CounterStateType
  incrementCounter: () => void
  resetCounter: () => void
}

export function Counter({counterState, incrementCounter, resetCounter, updateEditMode}: Props) {

  const updateEditModeHandler = () => {
    updateEditMode(true)
  }

  return (
    <div className={s.counter}>
      <div className={counterState.counter === counterState.max ? s.valueItem : s.counterItem}>{counterState.counter}</div>
      <div className={s.btnStyle}>
        <Button className={s.btn} disabled={counterState.counter === counterState.max} onClick={incrementCounter}>inc</Button>
        <Button className={s.btn} onClick={resetCounter}>reset</Button>
        <Button className={s.btn} onClick={updateEditModeHandler}>settings</Button>
        {/* <button className={s.btn} disabled={counterState.counter === counterState.max} onClick={incrementCountHandler}>inc</button>
        <button className={s.btn} onClick={resetCounterHandler}>reset</button>
        <button className={s.btn} onClick={updateEditModeHandler}>settings</button> */}
      </div>
    </div>
  )
}