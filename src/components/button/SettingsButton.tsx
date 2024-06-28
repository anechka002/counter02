import Button from "./Button";
import s from '../counter/Counter.module.css';

type Props = {
  updateEditMode: (isEditMode: boolean) => void;
}

export const SittingsButton = ({updateEditMode}: Props) => {

  const updateEditModeHandler = () => {
    updateEditMode(true);
  };

  return <Button className={s.btn} onClick={updateEditModeHandler}>settings</Button>
}