import { Checkbox } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import './CheckboxField.scss';
import PropTypes from 'prop-types';

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

CheckboxField.propTypes={
    label:PropTypes.string,
    error:PropTypes.string,
    control:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,
    options:PropTypes.arrayOf(PropTypes.shape({
        label:PropTypes.string,
        key:PropTypes.string
    })).isRequired
}

export default CheckboxField;