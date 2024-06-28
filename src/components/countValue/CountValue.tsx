import React, { ChangeEvent } from 'react';
import s from './CountValue.module.css';
import { ScreenValue } from './screenValue/ScreenValue';
import { SetButton } from '../button/SetButton';

type Props = {
  updateEditMode: (isEditMode: boolean) => void;
};

export function CountValue({ updateEditMode }: Props) {
  
  return (
    <div className={s.counterValue}>
      <ScreenValue/>
      <SetButton updateEditMode={updateEditMode}/>     
    </div>
  );
}

export default CountValue;
