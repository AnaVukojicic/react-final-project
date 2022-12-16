import React from 'react';
import './InputField.scss';
import { Input } from 'antd';

const InputField=({placeholder,type='text'})=>{
    return (
        <Input
            className='__input_field'
            placeholder={placeholder}
            type={type}
        />
    );
}

export default InputField;