import React from 'react';
import './FileField.scss';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import PropTypes from 'prop-types';

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

FileField.propTypes={
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
    onChange:PropTypes.func
}

export default FileField;