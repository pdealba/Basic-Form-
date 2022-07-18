import { useState } from "react";

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);
  
  const enteredNameHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameIsValid = enteredName.trim() !== '';
  const enteredInputNameIsInvalid = !nameIsValid && enteredNameTouch;

  
  const nameOnBlurHandler = () => {
    setEnteredNameTouch(true);
  }
  
  const formIsValidHandler = event =>{
    event.preventDefault();

    if(nameIsValid )

    setEnteredName('');
    setEnteredNameTouch(false);
  }
  
  const nameClassType = enteredInputNameIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formIsValidHandler}>
      <div className='control-group'>
        <div className={nameClassType}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={enteredNameHandler} value={enteredName} onBlur={nameOnBlurHandler}/>
          {enteredInputNameIsInvalid && <p className="error-text">Please set a valid Name</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
