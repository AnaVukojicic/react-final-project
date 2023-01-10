import React from "react";
import classes from './RegisterForm.module.scss';
import InputField from '../../../components/formFields/inputField/InputField';
import PasswordField from '../../../components/formFields/passwordField/PasswordField';
import FormButton from '../../../components/buttons/formButton/FormButton';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { authService } from "../../../services/AuthService";
import { storageService } from "../../../services/StorageService";
import { storageKeys } from "../../../config/config";
import { profileService } from "../../../services/ProfileService";
import { useUser } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const RegisterForm=()=>{
    const {setUserData}=useUser();
    const navigate=useNavigate();

    const registerUser=(data)=>{
        authService.register(data)
            .then(res=>{
                return authService.login(data?.email,data?.password)
            })
            .then(res=>{
                storageService.set(storageKeys.TOKEN,res.getAccessToken())
            })
            .then(res=>{
                return profileService.getUserInfo()
            })
            .then(res=>{
                setUserData(res)
                setTimeout(()=>{
                    navigate('/home')
                },300)
            })
            .catch(err=>{
                if(err?.response?.data?.message==="The email has already been taken."){
                    message.error("E-mail već postoji!")
                }
                else{
                    message.error('Greška prilikom registracije!')
                }
            })
    }

    const shema=yup.object().shape({
        name: yup.string().trim().min(3,'Ime mora imati najmanje 3 karaktera')
            .max(100,'Ime ne može imati više od 100 karaktera').required('Polje je obavezno!'),
        email: yup.string().trim().email('Polje mora da sarži email adresu').required('Polje je obavezno!'),
        password: yup.string().min(8,'Lozinka ne može biti kraća od 8 karaktera')
            .max(16,'Lozinka ne može biti duža od 16 karaktera').required('Lozinka je obavezna!'),
        confirmPassword: yup.string().oneOf([yup.ref('password'),null],'Lozinke se ne poklapaju!')
            .required('Polje je obavezno!')
    })

    const {handleSubmit, control, formState:{errors}}=useForm({resolver: yupResolver(shema)})

    const submitForm=(data)=>{
        registerUser(data)
    }


    return(
        <div className={classes['container']}>
            <form onSubmit={handleSubmit(submitForm)}>
                <InputField
                    placeholder="Unesite puno ime"
                    name="name"
                    control={control}
                    error={errors?.name?.message}
                />
                <InputField
                    placeholder="Unesite vaš e-mail"
                    name="email"
                    control={control}
                    error={errors?.email?.message}
                />
                <PasswordField
                    placeholder="Unesite password"
                    name="password"
                    control={control}
                    error={errors?.password?.message}
                />
                <PasswordField
                    placeholder="Potvrdite password"
                    name="confirmPassword"
                    control={control}
                    error={errors?.confirmPassword?.message}
                /> 
                <div className={classes['button-container']}>
                    <FormButton 
                        label="Log in"
                        backgroundColor="#84C57A"
                        color="#FFFFFF"    
                        type="submit"
                    />
                </div>
            </form>
        </div> 
    );
}

export default RegisterForm;