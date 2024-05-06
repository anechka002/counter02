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

function App() {
  
  const getFromStorage = () => {
    let minNumber = localStorage.getItem('minValue');
    let maxNumber = localStorage.getItem('maxValue');
    return {
      minNumber: minNumber ? JSON.parse(minNumber) : 0,
      maxNumber: maxNumber ? JSON.parse(maxNumber) : 5,
    }
  }


  // const [minValue, setMinValue] = useState<number>(getFromStorage().minNumber)
  // const [maxValue, setMaxValue] = useState<number>(getFromStorage().maxNumber)
  // const [count, setCount] = useState<number>(minValue)
  const [editMode, setEditMode] = useState(false)

  const [counterState, setCounterState] = useState<CounterStateType>({
    counter: 0,
    min: getFromStorage().minNumber,
    max: getFromStorage().maxNumber,
    minInputValue: 0,
    maxInputValue: 5,
  })

  console.log(counterState.max)

  const updateMinInputValue = (minInputValue: number) => {
    setCounterState({...counterState, minInputValue})
  }

  const updateMaxInputValue = (maxInputValue: number) => {
    setCounterState({...counterState, maxInputValue})
  }

  const updateEditMode = (value: boolean) => {
    setEditMode(value)
    setCounterState({
      ...counterState,
      counter: counterState.minInputValue,
    })
  }

  const incrementCounter = () => {
    if(counterState.counter < counterState.maxInputValue) {
      setCounterState({
        ...counterState,
        counter: counterState.counter + 1,
        max: counterState.maxInputValue
      })
    }
  }

  const resetCounter = () => {
    setCounterState({
      ...counterState,
      counter: counterState.minInputValue
    })
  }

  // const onHandleSetupEditMode = () => setEditMode(true)

  return (
    <div className="App">
      {editMode ? (
        <CountValue 
          updateEditMode={updateEditMode} 
          counterState={counterState}
          updateMinInputValue={updateMinInputValue}
          updateMaxInputValue={updateMaxInputValue}
          incrementCounter={incrementCounter}
        />
      ) : (
        <Counter 
          counterState={counterState}
          incrementCounter={incrementCounter}
          resetCounter={resetCounter}
          updateEditMode={updateEditMode}
          // onHandleSetupEditMod={onHandleSetupEditMode}
        />
        )
      }
    </div>
  );
}

export default App;
