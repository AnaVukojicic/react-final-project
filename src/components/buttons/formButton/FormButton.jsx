import React from "react";
import classes from './FormButton.module.scss';

const FormButton=({label,backgroundColor,color,onClick=()=>{},type='button'})=>{
    return (
        <button 
            className={classes['form-button']}
            style={{backgroundColor:backgroundColor,color:color}}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
}

export default FormButton;