import React from 'react';
import './FileField.scss';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';

const FileField=({label,error,name,control,onChange})=>{
    return (
        <FieldWrapper label={label} error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <Input
                        className='__file_field'   
                        type="file"
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