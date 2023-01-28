import React, { useEffect, useState } from 'react'
import classes from './Forms.module.css'
import Button from '../utility/Button'


const Forms = props => {
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(null);
    const [emailInputValid, setEmailInputValid] = useState(null)
    const [formValid, setFormValid] = useState(false)
        
    let errorMessageText = 'Name Cannot be Empty'   
    let [errorMessageEmail, setErrorMessageEmail] = useState('email cannot be empty')


    const formSubmitHandler = event => {
        event.preventDefault()
        console.log('gkojb9jofpm;bl')
        }

        const enteredNameHandler = event => {
            if(event.target.value.trim() === ''){
             setEnteredNameIsValid(false)     
            }else {
                setEnteredNameIsValid(true)
            }

        };

        const enteredEmailHandler = event => {
            if(!event.target.value.includes('@') && event.target.value.trim() !== ''){
                setEmailInputValid(false)
                setErrorMessageEmail('E-mails need to have @ included')
            }else if(event.target.value.trim() === ''){
                     setEmailInputValid(false)
                     setErrorMessageEmail('E-mail cannot be empty')
            } else {
                setEmailInputValid(true)
            }
        }
      
        const inputClass = (para) => para || para === null ? classes.input :
         `${classes.input} ${classes.notValid}`;

         useEffect(()=> {
        if(enteredNameIsValid && emailInputValid){
            setFormValid(true)
        }
        console.log(formValid)
         }, [enteredNameIsValid, emailInputValid, formValid])

    return (
          <form className = {classes.forms} onSubmit = {formSubmitHandler}>
        <div >
            <h5> Your Name </h5>
            <input type='text'
            className={inputClass(enteredNameIsValid)}
            onChange = {enteredNameHandler}
            onBlur = {enteredNameHandler} />
            {enteredNameIsValid === false && <p> {errorMessageText}</p>}
        </div>
        <div>
            <h5> Your Email </h5>
            <input type='email'className={inputClass(emailInputValid)}
              onChange = {enteredEmailHandler}
              onBlur = {enteredEmailHandler}
              />
        {emailInputValid === false && <p> {errorMessageEmail} </p>}
        </div>
        <Button text = 'Submit' onButtonHit = {formSubmitHandler} buttonStyle={formValid}/>
    </form>
    )
  
}

export default Forms;