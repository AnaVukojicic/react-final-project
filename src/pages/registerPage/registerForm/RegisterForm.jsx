import React from "react";
import classes from './RegisterForm.module.scss';
import InputField from '../../../components/formFields/inputField/InputField';
import PasswordField from '../../../components/formFields/passwordField/PasswordField';
import FormButton from '../../../components/buttons/formButton/FormButton';

const RegisterForm=()=>{
    return(
        <form>
            <div className={classes['inputs-container']}>
                <InputField
                    placeholder="Enter your full name"
                />
                <InputField
                    placeholder="Enter your e-mail"
                    type="email"
                />
                <PasswordField
                    placeholder="Input password"
                />
                <PasswordField
                    placeholder="Confirm password"
                />
            </div>  
            <div className={classes['button-container']}>
                <FormButton 
                    label="Log in"
                    backgroundColor="#84C57A"
                    color="#FFFFFF"    
                />
            </div>
        </form>
    );
}

export default RegisterForm;