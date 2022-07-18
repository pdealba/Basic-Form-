import { useState } from "react";

const BasicForm = (props) => {
  //Name
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameIsValid = enteredName.trim() !== "";
  const enteredInputNameIsInvalid = !nameIsValid && enteredNameTouch;

  const nameOnBlurHandler = () => {
    setEnteredNameTouch(true);
  };

  const formIsValidHandler = (event) => {
    event.preventDefault();

    if (nameIsValid && enteredInputNameIsInvalid) {
      setEnteredName("");
      setEnteredNameTouch(false);

      setEnteredLastName("");
      setEnteredLastNameTouch(false);
    }
  };

  const nameClassType = enteredInputNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  //Last Name
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameTouch, setEnteredLastNameTouch] = useState(false);

  const enteredLastNameHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const lastNameOnBlurHandler = () => {
    setEnteredLastNameTouch(true);
  };
  const lastNameValid = enteredLastName.trim() !== '';
  const enteredLastNameIsInvalid = enteredLastNameTouch && !lastNameValid; 

  const lastNameClassType = enteredLastNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formIsValidHandler}>
      <div className="control-group">
        <div className={nameClassType}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={enteredNameHandler}
            value={enteredName}
            onBlur={nameOnBlurHandler}
          />
          {enteredInputNameIsInvalid && (
            <p className="error-text">Please set a valid Name!</p>
          )}
        </div>
        <div className={lastNameClassType}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={enteredLastNameHandler}
            value={enteredLastName}
            onBlur={lastNameOnBlurHandler}
          />
          {enteredLastNameIsInvalid && <p className="error-text">Please set a valid Last Name!</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
