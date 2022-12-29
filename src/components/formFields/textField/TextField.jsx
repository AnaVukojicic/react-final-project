import React from 'react';
import './TextField.scss';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import PropTypes from 'prop-types';
const { TextArea } = Input;

const TextField=({placeholder,label,error,name,control,rows})=>{
    return (
        <FieldWrapper label={label} error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <TextArea
                        className='__text_field'   
                        placeholder={placeholder}
                        rows={rows}
                        status={error ? "error" : ""}
                        {...field}
                    />
                )}
            />
        </FieldWrapper>
        
    );
}

TextField.propTypes={
    placeholder:PropTypes.string,
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
    rows:PropTypes.number
}

export default TextField;