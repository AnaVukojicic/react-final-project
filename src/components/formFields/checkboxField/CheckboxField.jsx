import { Checkbox } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import './CheckboxField.scss';

const CheckboxField=({label,error,control,name,options})=>{
    return(
        <FieldWrapper label={label} error={error} shrink='1.3'>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <Checkbox.Group
                        className="__checkbox_field"
                        status={error ? "error" : ""}
                        options={options}
                        {...field}
                    />
                )}
            />
        </FieldWrapper>
    )
}

export default CheckboxField;