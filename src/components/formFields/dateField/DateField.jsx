import { DatePicker } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import './DateField.scss';
import PropTypes from 'prop-types';

const DateField=({placeholder,label,error,control,name,bordered=true})=>{
    return(
        <FieldWrapper label={label} error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <DatePicker
                        format='DD/MM/YYYY'
                        className="__date_field"
                        bordered={bordered}
                        placeholder={placeholder}
                        status={error ? "error" : ""}
                        {...field}
                    />
                )}
            />
        </FieldWrapper>
    )
}

DateField.propTypes={
    placeholder:PropTypes.string,
    label:PropTypes.string,
    error:PropTypes.string,
    control:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,
    bordered:PropTypes.bool
}

export default DateField;