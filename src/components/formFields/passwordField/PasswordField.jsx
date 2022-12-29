import React from "react";
import './PasswordField.scss';
import { Input } from "antd";
import FieldWrapper from "../fieldWrapper/FieldWrapper";
import { Controller } from "react-hook-form";
import PropTypes from 'prop-types';

const PasswordField=({placeholder,label,error,control,name})=>{
    return(
        <FieldWrapper label={label} error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <Input.Password 
                        className="__password_field"
                        placeholder={placeholder}
                        status={error ? "error" : ""}
                        {...field}
                    />
                )}
            />
        </FieldWrapper>
    );
}

PasswordField.propTypes={
    placeholder:PropTypes.string,
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired
}

export default PasswordField;