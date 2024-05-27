import { combineReducers, legacy_createStore as createStore } from "redux";
import { countReducer } from "../reducers/countReducer";

const rootReducer = combineReducers({
  counter: countReducer
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