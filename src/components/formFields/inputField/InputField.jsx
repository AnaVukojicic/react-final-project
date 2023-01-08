import React from 'react';
import './InputField.scss';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import PropTypes from 'prop-types';

const InputField=({placeholder,type='text',label,error,name,control,bordered=true})=>{
    return (
        <FieldWrapper label={label} error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <Input
                        className='__input_field'   
                        bordered={bordered}
                        placeholder={placeholder}
                        type={type}
                        status={error ? "error" : ""}
                        {...field}
                    />
                )}
            />
        </FieldWrapper>
        
    );
}

InputField.propTypes={
    placeholder:PropTypes.string,
    type:PropTypes.oneOf(['text','email']),
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
    bordered:PropTypes.bool
}

export default InputField;