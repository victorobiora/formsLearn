import classes from './Button.module.css'
import React from 'react'


const Button = props => {
    
   return  <div className={classes.div}>
        <button className={classes.button} onClick = {props.onButtonHit}>
        {props.text}
    </button>
    </div>
   
}

export default Button;