import React from 'react';
import './NumberField.scss';
import { InputNumber } from 'antd';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';

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

export default NumberField;