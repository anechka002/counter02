import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { incrementCounterAC } from "../../reducers/countReducer";
import Button from "./Button";
import s from '../counter/Counter.module.css';

export const IncrementButton = () => {
  const dispatch = useDispatch();
  const isMax = useAppSelector(
    (state) => state.counter.count === state.counter.maxInputValue
  );

  const incrementCounterHandler = () => {
    dispatch(incrementCounterAC());
  };
  
  return <Button className={s.btn} disabled={isMax} onClick={incrementCounterHandler}>inc</Button>
}