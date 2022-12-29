import React from 'react';
import classes from "./FieldWrapper.module.scss";
import PropTypes from 'prop-types';

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

FieldWrapper.propTypes={
    label:PropTypes.string,
    error:PropTypes.string,
    children:PropTypes.any,
    shrink:PropTypes.string
}

export default FieldWrapper;