import { useState } from "react";

const useForm = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueInputHasError, setValueInputHasError] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    if (enteredValueIsValid) setValueInputHasError(false);
  };

  const reset = () => {
    setEnteredValue("");
  };
  const inputInfo = {
    value: enteredValue,
    valueInputHasError,
    setValueInputHasError,
    enteredValueIsValid,
    valueChangeHandler,
    reset,
  };
  return inputInfo;
};

export default useForm;
