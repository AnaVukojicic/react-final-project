import { Select } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import './SelectField.scss';
import PropTypes from 'prop-types';

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

SelectField.propTypes={
    placeholder:PropTypes.string,
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
    options:PropTypes.arrayOf(PropTypes.shape({
        label:PropTypes.string,
        value:PropTypes.string
    })).isRequired,
    multiple:PropTypes.bool,
    bordered:PropTypes.bool
}

export default SelectField;