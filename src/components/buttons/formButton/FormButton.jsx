import React from "react";
import classes from './FormButton.module.scss';

const FormButton=({label,backgroundColor,color})=>{
    return (
        <button 
            className={classes['form-button']}
            style={{backgroundColor:backgroundColor,color:color}}
        >
            {label}
        </button>
    );
}

export default FormButton;