import React, { ChangeEvent } from 'react';
import s from './CountValue.module.css';
import { ScreenValue } from './screenValue/ScreenValue';
import { SetButton } from '../button/SetButton';

export function CountValue() {
  
  return (
    <div className={s.counterValue}>
      <ScreenValue/>
      <SetButton/>     
    </div>
  );
}

export default CountValue;
