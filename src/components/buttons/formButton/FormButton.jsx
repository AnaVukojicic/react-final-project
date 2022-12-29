import React from "react";
import classes from './FormButton.module.scss';
import PropTypes from 'prop-types';

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

FormButton.propTypes={
    label:PropTypes.string,
    backgroundColor:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
    type:PropTypes.oneOf(['button','submit'])
}

export default FormButton;