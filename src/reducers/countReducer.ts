export type InitialType = {
  count: number
  minInputValue: number
  maxInputValue: number
}

const MIN_VALUE = 0;
const MAX_VALUE = 5;
const STEP = 1;

const initialState: InitialType = {
  count: MIN_VALUE,
  minInputValue: MIN_VALUE,
  maxInputValue: MAX_VALUE,
}

type UpdateMinInputValueAC = ReturnType<typeof updateMinInputValueAC>
type UpdateMaxInputValueAC = ReturnType<typeof updateMaxInputValueAC>
type IncrementCounterAC = ReturnType<typeof incrementCounterAC>
type ResetCounterAC = ReturnType<typeof resetCounterAC>
type SetCounterAC = ReturnType<typeof setCounterAC>

type ActionsType = UpdateMinInputValueAC | UpdateMaxInputValueAC | IncrementCounterAC | ResetCounterAC | SetCounterAC

export const countReducer = (state = initialState, action: ActionsType): InitialType => {
  switch(action.type) {
    case 'UPDATE-MIN_VALUE': {
      return {
        ...state,
        minInputValue: action.minInputValue,
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
        count: state.count + STEP
      }
    }
    case 'RESET-COUNTER': {
      return {
        ...state,
        count: state.minInputValue
      }
    }
    case 'SET-COUNTER': {
      return {
        ...state,
        count: action.minInputValue,
      }
    }

    default: return state
  }
}

export const updateMinInputValueAC = (minInputValue: number) => {
  return {type: 'UPDATE-MIN_VALUE', minInputValue: minInputValue} as const
}

export const updateMaxInputValueAC = (maxInputValue: number) => {
  return {type: 'UPDATE-MAX_VALUE', maxInputValue: maxInputValue} as const
}

export const incrementCounterAC = () => {
  return {type: 'INCREMENT-COUNTER'} as const
}

export const resetCounterAC = () => {
  return {type: 'RESET-COUNTER'} as const
}

export const setCounterAC = (minInputValue: number) => {
  return {type: 'SET-COUNTER', minInputValue} as const
}