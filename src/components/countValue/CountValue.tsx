import React, { ChangeEvent } from 'react';
import s from './CountValue.module.css';
import Input from '../input/Input';
import Button from '../button/Button';
import {
  setCounterAC,
  updateMaxInputValueAC,
  updateMinInputValueAC,
} from '../../reducers/countReducer';
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { ScreenValue } from './screenValue/ScreenValue';
import { SetButton } from '../button/SetButton';

type Props = {
  updateEditMode: (isEditMode: boolean) => void;
};

export function CountValue({ updateEditMode }: Props) {
  const { minInputValue, maxInputValue } = useAppSelector(
    (state) => state.counter
  );
  
  const dispatch = useDispatch();

  const onClickSettingsHandler = () => { 
    dispatch(setCounterAC(minInputValue))
    updateEditMode(false);
  };

  const onChangeMinInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateMinInputValueAC(+e.currentTarget.value));
  };

  const onChangeMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateMaxInputValueAC(+e.currentTarget.value));
    // updateMinInputValue(+e.currentTarget.value) // можно так
  };

  return (
    <div className={s.counterValue}>
      {/* <ScreenValue/>
      <SetButton updateEditMode={updateEditMode}/> */}
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
      <div className={s.btnField}>
        <Button
          className={s.btn}
          onClick={onClickSettingsHandler}
          disabled={minInputValue < 0 || minInputValue >= maxInputValue}
        >
          set
        </Button>
      </div>
    </div>
  );
}

export default CountValue;
