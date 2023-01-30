import { useState } from "react";

const useInputHook = () => {

const [enteredInput, setEnteredInput] = useState('');
const [validInput, setValidInput] = useState(null);
const [touch, setTouched] = useState(false);

const validate = (value,type) => {
    setEnteredInput(value);
    if(type === 'email'){
        setValidInput(value.includes('@') || value.trim() === '' ? true : false)
    }else{
        console.log('check')
        setValidInput(value.trim() === '' ? false : true)
    }
}

const Blur = () => {
         setTouched(true)
}


   return { validate, Blur, touch, validInput, enteredInput}
}

export default useInputHook;