import React from "react";
import './PasswordField.scss';
import { Input } from "antd";
import FieldWrapper from "../fieldWrapper/FieldWrapper";
import { Controller } from "react-hook-form";

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

export default PasswordField;