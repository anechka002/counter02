import { useAppSelector } from "../../../hooks/hooks";
import s from '../Counter.module.css'

export const Screen = () => {
  const count = useAppSelector((state) => state.counter.count);
  const isMax = useAppSelector(
    (state) => state.counter.count === state.counter.maxInputValue
  );
  
  return <div className={isMax ? s.valueItem : s.counterItem}>{count}</div>;
};