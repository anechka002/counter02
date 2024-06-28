import React, { ChangeEvent } from 'react'
import { useAppSelector } from '../../../hooks/hooks';
import s from '../CountValue.module.css'
import Input from '../../input/Input';
import { updateMaxInputValueAC, updateMinInputValueAC } from '../../../reducers/countReducer';
import { useDispatch } from 'react-redux';

export const ScreenValue = () => {
  const minInputValue = useAppSelector(
    (state) => state.counter.minInputValue
  );
  const maxInputValue = useAppSelector(
    (state) => state.counter.maxInputValue
  );

  const dispatch = useDispatch();

  const onChangeMinInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateMinInputValueAC(+e.currentTarget.value));
  };

  const onChangeMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateMaxInputValueAC(+e.currentTarget.value));
    // updateMinInputValue(+e.currentTarget.value) // можно так
  };
  
  return (
    <div className={s.inputField}>
        <div>
          <span>max value:</span>
          <Input
            className={
              minInputValue >= maxInputValue ? s.inputRed : s.inputStyle
            }
            type="number"
            value={maxInputValue}
            //onChangeValue={value=>updateMaxInputValue(+value)} // так тоже можно
            onChange={onChangeMaxInputValue}
          />
        </div>
        <div>
          <span>min value:</span>
          <Input
            className={
              minInputValue < 0 || minInputValue >= maxInputValue
                ? s.inputRed
                : s.inputStyle
            }
            type={'number'}
            value={minInputValue}
            onChange={onChangeMinInputValue}
          />
        </div>
      </div>
  )
}
