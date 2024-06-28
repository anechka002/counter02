import React, { useEffect, useState } from 'react';
import s from './Counter.module.css';
import { ButtonsArea } from '../button/ButtonsArea';
import { Screen } from './screen/Screen';

export function Counter() {
  // const {
  //   count,
  //   maxInputValue: max,
  //   minInputValue,
  // } = useAppSelector((state) => state.counter);

  // const max = useAppSelector(state => state.counter.max)

  return (
    <div className={s.counter}>
      <Screen/>
      <ButtonsArea/>
      {/* <div className={s.btnStyle}>
        <IncrementButton/>
        <ResetButton/>
        <SittingsButton/>
      </div> */}
    </div>
  );
}
