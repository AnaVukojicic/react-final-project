import { Select } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import './SelectField.scss';

const SelectField=({placeholder,label,error,control,name,options,multiple=false,bordered=true})=>{
    return(
        <FieldWrapper label={label} error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <Select
                        bordered={bordered}
                        options={options}
                        mode={multiple ? "multiple" : ""}
                        allowClear
                        className="__select_field"
                        placeholder={placeholder}
                        status={error ? "error" : ""}
                        {...field}
                    />
                )}
            />
        </FieldWrapper>
    )
}

export default SelectField;