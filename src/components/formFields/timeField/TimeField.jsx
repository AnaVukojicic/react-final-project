import { TimePicker } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import '../dateField/DateField.scss';
import PropTypes from 'prop-types';

const TimeField=({placeholder,label,error,control,name,bordered=true})=>{
    return(
        <FieldWrapper label={label} error={error} shrink='1.3'>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <TimePicker
                        format='HH:mm'
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

TimeField.propTypes={
    placeholder:PropTypes.string,
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
    bordered:PropTypes.bool
}

export default TimeField;