import React from "react";
import classes from './LoginPage.module.scss';
import AuthLayout from '../../components/layouts/authLayout/AuthLayout';
import LoginForm from "./loginForm/LoginForm";
import LoginImage from '../../images/LoginImage.svg';

const LoginPage=()=>{
    return(
        <AuthLayout page="login">
            <div className={classes['container']}>
                <h3 className={classes['title']}>Dobrodošli nazad</h3>
                <div className={classes['img-container']}>
                    <img src={LoginImage} alt="login"/>
                </div>
                <div className={classes['form-container']}>
                    <LoginForm/>
                </div>
            </div>
        </AuthLayout>
        
    );
}

export default LoginPage;