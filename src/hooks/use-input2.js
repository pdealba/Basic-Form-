import { useState } from "react";

const useInput2 = (valueIsValid) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);
  
  const enteredNameHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameIsValid = enteredName.trim() !== '';
  const enteredInputNameIsInvalid = !nameIsValid && enteredNameTouch;

  
  const inputOnBlurHandler = () => {
    setEnteredNameTouch(true);
  }
}