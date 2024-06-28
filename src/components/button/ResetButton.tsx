import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { resetCounterAC } from "../../reducers/countReducer";
import Button from "./Button";
import s from '../counter/Counter.module.css';

export const ResetButton = () => {
  const dispatch = useDispatch();
  const isMin = useAppSelector((state) => state.counter.count === state.counter.minInputValue)
  const resetCounterHandler = () => {
    dispatch(resetCounterAC());
  };
  return <Button className={s.btn} onClick={resetCounterHandler} disabled={isMin}>reset</Button>
}