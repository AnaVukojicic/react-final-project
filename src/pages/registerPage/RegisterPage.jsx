import React from "react";
import classes from './RegisterPage.module.scss';
import AuthLayout from '../../components/layouts/authLayout/AuthLayout';
import RegisterForm from "./registerForm/RegisterForm";

const RegisterPage=()=>{
    return(
        <AuthLayout page="register">
            <h3 className={classes['title']}>Dobrodošli</h3>
            <div className={classes['form-container']}>
                <RegisterForm/>
            </div>
        </AuthLayout>
    );
}

export default RegisterPage;