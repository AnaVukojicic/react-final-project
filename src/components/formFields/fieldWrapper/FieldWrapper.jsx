import React from 'react';
import classes from "./FieldWrapper.module.scss";

const FieldWrapper = ({label='',error='',children,shrink=''})=> {
    return(
        <div className={classes['container']} style={{flexShrink:shrink}}>
            {label!=='' &&
                <label>{label}</label>
            }
            <div>{children}</div>
            <p>{error}</p>
        </div>

    );
}

export default FieldWrapper;