import React from 'react';
import './NumberField.scss';
import { InputNumber } from 'antd';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import PropTypes from 'prop-types';

const NumberField=({placeholder,label,error,name,control,prefix='',step})=>{
    return (
        <FieldWrapper label={label} error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <InputNumber 
                        step={step}   
                        prefix={prefix}
                        className='__number_field'   
                        placeholder={placeholder}
                        status={error ? "error" : ""}
                        {...field}
                    />
                )}
            />
        </FieldWrapper>
        
    );
}

NumberField.propTypes={
    placeholder:PropTypes.string,
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
    prefix:PropTypes.string,
    step:PropTypes.string
}

export default NumberField;