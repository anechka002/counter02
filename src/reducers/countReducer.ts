export type InitialType = {
  count: number
  min: number
  max: number
  minInputValue: number
  maxInputValue: number
}

const MIN_VALUE = 0;
const MAX_VALUE = 5;
const STEP = 1;

let initialState: InitialType = {
  count: MIN_VALUE,
  min: MIN_VALUE,
  max: MAX_VALUE,
  minInputValue: MIN_VALUE,
  maxInputValue: MAX_VALUE,
}

type UpdateMinInputValueAC = ReturnType<typeof updateMinInputValueAC>
type UpdateMaxInputValueAC = ReturnType<typeof updateMaxInputValueAC>
type IncrementCounterAC = ReturnType<typeof incrementCounterAC>
type ResetCounterAC = ReturnType<typeof resetCounterAC>

type ActionsType = UpdateMinInputValueAC | UpdateMaxInputValueAC | IncrementCounterAC | ResetCounterAC
// const counter = {
//   count
// }
export const countReducer = (state = initialState, action: ActionsType): InitialType => {
  switch(action.type) {
    case 'UPDATE-MIN_VALUE': {
      return {
        ...state,
        minInputValue: action.minInputValue
      }
    }
    case 'UPDATE-MAX_VALUE': {
      return {
        ...state,
        maxInputValue: action.maxInputValue
      }
    }
    case 'INCREMENT-COUNTER': {
      return {
        ...state,
        count: state.count + action.step
      }
    }
    case 'RESET-COUNTER': {
      return {
        ...state,
        count: action.minInputValue
      }
    }

    default: return state
  }
}

export const updateMinInputValueAC = (minInputValue: number) => {
  return {
    type: 'UPDATE-MIN_VALUE',
    minInputValue: minInputValue
  } as const
}
export const updateMaxInputValueAC = (maxInputValue: number) => {
  return {
    type: 'UPDATE-MAX_VALUE',
    maxInputValue: maxInputValue
  } as const
}

export const incrementCounterAC = (count: number) => {
  return {
    type: 'INCREMENT-COUNTER',
    step: STEP
  } as const
}

export const resetCounterAC = (minInputValue: number) => {
  return {
    type: 'RESET-COUNTER',
    minInputValue: MIN_VALUE
  } as const
}