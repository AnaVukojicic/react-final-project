import React from "react";
import './PasswordField.scss';
import { Input } from "antd";

const PasswordField=({placeholder})=>{
    return(
        <Input.Password 
            className="__password_field"
            placeholder={placeholder}
        />
    );
}

export default PasswordField;