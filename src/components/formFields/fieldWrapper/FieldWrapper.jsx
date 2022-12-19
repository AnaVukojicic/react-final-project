import React from 'react';
import classes from "./FieldWrapper.module.scss";

const FieldWrapper = ({label='',error='',children})=> {
    return(
        <div className={classes['container']}>
            {label!=='' &&
                <label>{label}</label>
            }
            <div>{children}</div>
            <p>{error}</p>
        </div>

    );
}

export default FieldWrapper;