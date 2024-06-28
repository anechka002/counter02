import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import CountValue from './components/countValue/CountValue';
import { useAppSelector } from './hooks/hooks';
import { useDispatch } from 'react-redux';
import { editModeAC } from './reducers/modeReducer';

function App() {

  // const getFromStorage = () => {
  //   let minNumber = localStorage.getItem('minValue');
  //   let maxNumber = localStorage.getItem('maxValue');
  //   return {
  //     min: JSON.parse(minNumber ?? `${MIN_VALUE}`) ,
  //     max: maxNumber ? JSON.parse(maxNumber) : MAX_VALUE,
  //   }
  // }

  // const [editMode, setEditMode] = useState(false)

  const editMode = useAppSelector(state => state.mode.editMode)
  const dispatch = useDispatch();

  // const [counterState, setCounterState] = useState<CounterStateType>({
  //   counter: MIN_VALUE,
  //   ...getFromStorage(),
  //   minInputValue: MIN_VALUE,
  //   maxInputValue: MAX_VALUE,
  // })

  const updateEditMode = (value: boolean) => {
    dispatch(editModeAC(value))
    // setEditMode(value)
    // setCounterState(prev => ({
    //   ...counterState,
    //   counter: counterState.minInputValue,
    //   max: prev.maxInputValue,
    //   min: prev.minInputValue
    // }))
  }

  const updateMinInputValue = (minInputValue: number) => {
    // setCounterState(prevState => ({...prevState, minInputValue}))
  }

  const updateMaxInputValue = (maxInputValue: number) => {
    // setCounterState(prevState => ({...prevState, maxInputValue}))
  }

  const incrementCounter = () => {
    // if(count.counter < count.maxInputValue) {
    //   dispatch(incrementCounterAC(0))

      // setCounterState({
      //   ...counterState,
      //   counter: counterState.counter + STEP,
      // })
    // }
  }

  const resetCounter = () => {
    // setCounterState({
    //   ...counterState,
    //   counter: counterState.minInputValue
    // })
  }

  return (
    <div className="App">
      {editMode ? (
        <CountValue/>
      ) : (
        <Counter/>
        )
      }
    </div>
  );
}

export default App;
