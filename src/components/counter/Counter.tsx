import React, { useEffect, useState } from 'react';
import s from './Counter.module.css';
import { ButtonsArea } from '../button/ButtonsArea';
import { Screen } from './screen/Screen';

type Props = {
  updateEditMode: (isEditMode: boolean) => void;
};

export function Counter({ updateEditMode }: Props) {
  // const {
  //   count,
  //   maxInputValue: max,
  //   minInputValue,
  // } = useAppSelector((state) => state.counter);

  // const max = useAppSelector(state => state.counter.max)

  return (
    <div className={s.counter}>
      <Screen/>
      <ButtonsArea updateEditMode={updateEditMode} />
      {/* <div className={s.btnStyle}>
        <IncrementButton/>
        <ResetButton/>
        <SittingsButton updateEditMode={updateEditMode}/>
      </div> */}
    </div>
  );
}
