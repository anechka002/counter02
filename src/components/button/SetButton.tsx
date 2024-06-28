import React from 'react'
import s from '../countValue/CountValue.module.css'
import Button from './Button'
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { setCounterAC } from '../../reducers/countReducer';
import { editModeAC } from '../../reducers/modeReducer';

export const SetButton = () => {
  const minInputValue = useAppSelector(
    (state) => state.counter.minInputValue
  );
  const maxInputValue = useAppSelector(
    (state) => state.counter.maxInputValue
  );

  const dispatch = useDispatch();

  const onClickSettingsHandler = () => {
    dispatch(setCounterAC(minInputValue))
    dispatch(editModeAC(false))
  };

  return (
    <div className={s.btnField}>
        <Button
          className={s.btn}
          onClick={onClickSettingsHandler}
          disabled={minInputValue < 0 || minInputValue >= maxInputValue}
        >
          set
        </Button>
    </div>
  )
}
