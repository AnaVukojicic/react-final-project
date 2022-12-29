import React from 'react';
import './RadioField.scss';
import { Controller } from 'react-hook-form';
import FieldWrapper from '../fieldWrapper/FieldWrapper';
import { Radio } from 'antd';
import PropTypes from 'prop-types';

const RadioField=({label,error,name,control,options})=>{
    return (
        <FieldWrapper label={label} error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <Radio.Group
                        className='__radio_field'  
                        status={error ? "error" : ""}
                        {...field}
                    >
                        {options.map(opt=>{
                            return <Radio 
                                        key={opt.label}
                                        value={opt.value}
                                        style={{backgroundColor:opt.value}}
                                    ></Radio>
                        })}
                    </Radio.Group>
                )}
            />
        </FieldWrapper>
        
    );
}

RadioField.propTypes={
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
    options:PropTypes.arrayOf(PropTypes.shape({
        label:PropTypes.string,
        value:PropTypes.string
    })).isRequired
}

export default RadioField;