import React, { useEffect, useState } from 'react'
import classes from './Forms.module.css'
import Button from '../utility/Button';
import useInputHook from '../hooks/useInputHook';


const Forms = props => {
    const  { validate: validateName,
        validInput: validInputName,
         enteredInput: enteredInputName} = useInputHook()

    const  { validate: validateEmail,
         validInput: validInputEmail,
          enteredInput: enteredInputEmail} = useInputHook()

    const [formValid, setFormValid] = useState(false)
        
 
    const formSubmitHandler = event => {
        event.preventDefault()
        console.log('gkojb9jofpm;bl')
        }

        const enteredNameHandler = event => {
            validateName(event.target.value, 'name')
            console.log(enteredInputName)
        };

        const enteredEmailHandler = event => {
            validateEmail(event.target.value, 'email');
            console.log(enteredInputEmail)
        }
      
        const inputClass = (para) => para || para === null ? classes.input :
         `${classes.input} ${classes.notValid}`;

         useEffect(()=> {
        if(validInputEmail && validInputName){
            setFormValid(true)
        }
        console.log(formValid)
         }, [validInputName, validInputEmail, formValid])

    return (
          <form className = {classes.forms} onSubmit = {formSubmitHandler}>
        <div >
            <h5> Your Name </h5>
            <input type='text'
            className={inputClass(validInputName)}
            onChange = {enteredNameHandler}
            onBlur = {enteredNameHandler} />
            {validInputName === false && <p> name cannot be empty</p>}
        </div>
        <div>
            <h5> Your Email </h5>
            <input type='email'className={inputClass(validInputEmail)}
              onChange = {enteredEmailHandler}
              onBlur = {enteredEmailHandler}
              />
        {validInputEmail === false && <p> please enter a valid email</p>}
        </div>
        <Button text = 'Submit' onButtonHit = {formSubmitHandler} buttonStyle={formValid}/>
    </form>
    )
  
}

export default Forms;