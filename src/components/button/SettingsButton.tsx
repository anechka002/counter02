import Button from "./Button";
import s from '../counter/Counter.module.css';
import { useDispatch } from "react-redux";
import { editModeAC } from "../../reducers/modeReducer";

export const SittingsButton = () => {

  const dispatch = useDispatch();

  const updateEditModeHandler = () => {
    dispatch(editModeAC(true))
  };

  return <Button className={s.btn} onClick={updateEditModeHandler}>settings</Button>
}