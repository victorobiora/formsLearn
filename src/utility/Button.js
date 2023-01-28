import classes from './Button.module.css'
import React from 'react'


const Button = props => {
let butClass = '';

    if(!props.buttonStyle) {
   butClass = classes.buttonInvalid
   console.log(butClass)
    }
    
   return  <div className={classes.div}>
        <button className={`${classes.button} ${butClass}`} onClick = {props.onButtonHit}>
        {props.text}
    </button>
    </div>
   
}

export default Button;