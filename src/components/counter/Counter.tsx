import React, { useState } from 'react';
import s from './Counter.module.css'
import Button from '../button/Button';
import { useAppSelector } from '../../hooks/hooks';
import { incrementCounterAC, resetCounterAC } from '../../reducers/countReducer';
import { useDispatch } from 'react-redux';

type Props = {
  updateEditMode: (isEditMode: boolean) => void
}

export function Counter({updateEditMode}: Props) {
  const {count, max, min, minInputValue, maxInputValue} = useAppSelector(state => state.counter)
  // const count = useAppSelector(state => state.counter.count)
  // const max = useAppSelector(state => state.counter.max)
  const dispatch = useDispatch()


  const incrementCounterHandler = () => {
    dispatch(incrementCounterAC(count))
  }

  const resetCounterHandler = () => {
    dispatch(resetCounterAC(min))
  }

  const updateEditModeHandler = () => {
    updateEditMode(true)
  }

  return (
    <div className={s.counter}>
      <div className={count === max ? s.valueItem : s.counterItem}>{count}</div>
      <div className={s.btnStyle}>
        <Button className={s.btn} disabled={count === max} onClick={incrementCounterHandler}>inc</Button>
        <Button className={s.btn} onClick={resetCounterHandler}>reset</Button>
        <Button className={s.btn} onClick={updateEditModeHandler}>settings</Button>
      </div>
    </div>
  )
}

