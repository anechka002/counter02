import React, { useEffect, useState } from 'react';
import s from './Counter.module.css';
import Button from '../button/Button';
import { useAppSelector } from '../../hooks/hooks';
import {
  incrementCounterAC,
  resetCounterAC,
} from '../../reducers/countReducer';
import { useDispatch } from 'react-redux';

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
      <Screen />
      <ButtonsArea updateEditMode={updateEditMode} />
    </div>
  );
}

const Screen = () => {
  const count = useAppSelector((state) => state.counter.count);
  const isMax = useAppSelector(
    (state) => state.counter.count === state.counter.maxInputValue
  );
  return <div className={isMax ? s.valueItem : s.counterItem}>{count}</div>;
};

type ButtonsAreaProps = {
  updateEditMode: (isEditMode: boolean) => void;
};

const ButtonsArea = ({ updateEditMode }: ButtonsAreaProps) => {
  const dispatch = useDispatch();
  const isMax = useAppSelector(
    (state) => state.counter.count === state.counter.maxInputValue
  );
  const isMin = useAppSelector(
    (state) => state.counter.count === state.counter.minInputValue
  );
  const incrementCounterHandler = () => {
    dispatch(incrementCounterAC());
  };

  const resetCounterHandler = () => {
    dispatch(resetCounterAC());
  };

  const updateEditModeHandler = () => {
    updateEditMode(true);
  };
  return (
    <div className={s.btnStyle}>
      <Button
        className={s.btn}
        disabled={isMax}
        onClick={incrementCounterHandler}
      >
        inc
      </Button>
      <Button className={s.btn} onClick={resetCounterHandler} disabled={isMin}>
        reset
      </Button>
      <Button className={s.btn} onClick={updateEditModeHandler}>
        settings
      </Button>
    </div>
  );
};

