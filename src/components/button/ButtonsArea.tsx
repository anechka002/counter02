import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { incrementCounterAC, resetCounterAC } from "../../reducers/countReducer";
import Button from "./Button";
import s from '../counter/Counter.module.css';

type ButtonsAreaProps = {
  updateEditMode: (isEditMode: boolean) => void;
};

export const ButtonsArea = ({ updateEditMode }: ButtonsAreaProps) => {
  const dispatch = useDispatch();
  const isMax = useAppSelector(
    (state) => state.counter.count === state.counter.maxInputValue
  );
  const isMin = useAppSelector(
    (state) => state.counter.count === state.counter.minInputValue
  );
  const incrementCounterHandler = () => {
    dispatch(incrementCounterAC());
  };

  const resetCounterHandler = () => {
    dispatch(resetCounterAC());
  };

  const updateEditModeHandler = () => {
    updateEditMode(true);
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