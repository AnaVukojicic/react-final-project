import React from 'react';
import './FileField.scss';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';

const FileField=({placeholder,type='text',label,error,name,control,bordered=true,onChange})=>{
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
                        onChange={(e)=>{
                            onChange(e);
                            field.onChange(e)
                        }}
                    />
                )}
            />
        </FieldWrapper>
        
    );
}

export default FileField;