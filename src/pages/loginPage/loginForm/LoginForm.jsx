import React from "react";
import classes from './LoginForm.module.scss';
import InputField from '../../../components/formFields/inputField/InputField';
import PasswordField from '../../../components/formFields/passwordField/PasswordField';
import FormButton from '../../../components/buttons/formButton/FormButton';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authService } from "../../../services/AuthService";
import { storageService } from "../../../services/StorageService";
import { storageKeys } from "../../../config/config";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const LoginForm=()=>{
    const navigate=useNavigate();

    const login=(email,password)=>{
        authService.login(email,password)
            .then(res=>{
                console.log(res)
                storageService.set(storageKeys.TOKEN,res.getAccessToken())
                setTimeout(()=>{
                    navigate('/home')
                },300)
            })
            .catch(err=>{
                console.log(err)
                message.error('Pogresni kredencijali')
            })
    }

    const shema=yup.object().shape({
        email: yup.string().trim().email('Polje mora da sarzi email adresu').required('Polje je obavezno!'),
        password: yup.string().min(8,'Lozinka ne moze biti kraca od 8 karaktera')
            .max(16,'Lozinka ne moze biti duza od 16 karaktera').required('Lozinka je obavezna!'),
    })

    const {handleSubmit, control, formState:{errors}}=useForm({resolver: yupResolver(shema)})

    const submitForm=(data)=>{
        console.log(data)
        login(data.email,data.password)
    }
    
    return(
        <div className={classes['container']}>
            <form onSubmit={handleSubmit(submitForm)}>
                <InputField
                    placeholder="Enter e-mail"
                    name="email"
                    control={control}
                    error={errors?.email?.message}
                />
                <PasswordField
                    placeholder="Enter password"
                    name="password"
                    control={control}
                    error={errors?.password?.message}
                />  
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
        </div>
    );
}

export default LoginForm;