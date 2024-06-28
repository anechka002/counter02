import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { incrementCounterAC, resetCounterAC } from "../../reducers/countReducer";
import Button from "./Button";
import s from '../counter/Counter.module.css';
import { editModeAC } from "../../reducers/modeReducer";

export const ButtonsArea = () => {
  
  const isMax = useAppSelector(
    (state) => state.counter.count === state.counter.maxInputValue
  );
  const isMin = useAppSelector(
    (state) => state.counter.count === state.counter.minInputValue
  );

  const dispatch = useDispatch();
  
  const incrementCounterHandler = () => {
    dispatch(incrementCounterAC());
  };

  const resetCounterHandler = () => {
    dispatch(resetCounterAC());
  };

  const updateEditModeHandler = () => {
    dispatch(editModeAC(true))
  };
  return (
    <div className={s.btnStyle}>
      <Button
        className={s.btn}
        disabled={isMax}
        onClick={incrementCounterHandler}
      >
        inc
      </Button>

      <Button className={s.btn} onClick={resetCounterHandler} disabled={isMin}>
        reset
      </Button>

      <Button className={s.btn} onClick={updateEditModeHandler}>
        settings
      </Button>

    </div>
  );
};