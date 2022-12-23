import React from 'react';
import './TextField.scss';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
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

export default TextField;