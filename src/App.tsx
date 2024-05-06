import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import CountValue from './components/countValue/CountValue';

export type CounterStateType = {
  counter: number
  min: number
  max: number
  minInputValue: number
  maxInputValue: number
}

const MIN_VALUE = 0;
const MAX_VALUE = 5;
const STEP = 1;

function App() {
  
  const getFromStorage = () => {
    let minNumber = localStorage.getItem('minValue');
    let maxNumber = localStorage.getItem('maxValue');
    return {
      min: JSON.parse(minNumber ?? `${MIN_VALUE}`) ,
      max: maxNumber ? JSON.parse(maxNumber) : MAX_VALUE,
    }
  }

  const [editMode, setEditMode] = useState(false)

  const [counterState, setCounterState] = useState<CounterStateType>({
    counter: MIN_VALUE,
    ...getFromStorage(),
    minInputValue: MIN_VALUE,
    maxInputValue: MAX_VALUE,
  })

  const updateMinInputValue = (minInputValue: number) => {
    setCounterState(prevState => ({...prevState, minInputValue}))
  }

  const updateMaxInputValue = (maxInputValue: number) => {
    setCounterState(prevState => ({...prevState, maxInputValue}))
  }

  const updateEditMode = (value: boolean) => {
    setEditMode(value)
    setCounterState(prev => ({
      ...counterState,
      counter: counterState.minInputValue,
      max: prev.maxInputValue,
      min: prev.minInputValue
    }))
  }

  const incrementCounter = () => {
    if(counterState.counter < counterState.maxInputValue) {
      setCounterState({
        ...counterState,
        counter: counterState.counter + STEP,
      })
    }
  }

  const resetCounter = () => {
    setCounterState({
      ...counterState,
      counter: counterState.minInputValue
    })
  }

  return (
    <div className="App">
      {editMode ? (
        <CountValue 
          updateEditMode={updateEditMode} 
          counterState={counterState}
          updateMinInputValue={updateMinInputValue}
          updateMaxInputValue={updateMaxInputValue}
        />
      ) : (
        <Counter 
          counterState={counterState}
          incrementCounter={incrementCounter}
          resetCounter={resetCounter}
          updateEditMode={updateEditMode}
        />
        )
      }
    </div>
  );
}

export default App;
