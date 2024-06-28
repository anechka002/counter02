import { AnyAction, combineReducers, legacy_createStore as createStore } from "redux";
import { countReducer } from "../reducers/countReducer";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { modeReducer } from "../reducers/modeReducer";

const rootReducer = combineReducers({
  counter: countReducer,
  mode: modeReducer
})
// const state = {
//   counter: {
//     count
//     max

//   }
// }
export const store = createStore(rootReducer)
export type RootReducerType = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>