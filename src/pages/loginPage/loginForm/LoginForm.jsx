import React from "react";
import classes from './LoginForm.module.scss';
import InputField from '../../../components/formFields/inputField/InputField';
import PasswordField from '../../../components/formFields/passwordField/PasswordField';
import FormButton from '../../../components/buttons/formButton/FormButton';

const RegisterForm=()=>{
    return(
        <form>
            <div className={classes['inputs-container']}>
                <InputField
                    placeholder="Enter e-mail"
                    type="email"
                />
                <PasswordField
                    placeholder="Enter password "
                />
            </div>  
            <p className={classes['forgot-password']}>
                Forgot password
            </p>
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