import React from "react";
import classes from './RegisterForm.module.scss';
import InputField from '../../../components/formFields/inputField/InputField';
import PasswordField from '../../../components/formFields/passwordField/PasswordField';
import FormButton from '../../../components/buttons/formButton/FormButton';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { authService } from "../../../services/AuthService";

const RegisterForm=()=>{
    const shema=yup.object().shape({
        name: yup.string().trim().min(3,'Ime mora imati najmanje 3 karaktera')
            .max(100,'Ime ne moze imati vise od 100 karaktera').required('Polje je obavezno!'),
        email: yup.string().trim().email('Polje mora da sarzi email adresu').required('Polje je obavezno!'),
        password: yup.string().min(8,'Lozinka ne moze biti kraca od 8 karaktera')
            .max(16,'Lozinka ne moze biti duza od 16 karaktera').required('Lozinka je obavezna!'),
        confirmPassword: yup.string().oneOf([yup.ref('password'),null],'Lozinke se ne poklapaju').required('polje je obavezno!')
    })

    const {handleSubmit, control, formState:{errors}}=useForm({resolver: yupResolver(shema)})

    const submitForm=(data)=>{
        console.log(data)
        // authService.register(data)
    }


    return(
        <div className={classes['container']}>
            <form onSubmit={handleSubmit(submitForm)}>
                <InputField
                    placeholder="Enter your full name"
                    name="name"
                    control={control}
                    error={errors?.name?.message}
                />
                <InputField
                    placeholder="Enter your e-mail"
                    name="email"
                    control={control}
                    error={errors?.email?.message}
                />
                <PasswordField
                    placeholder="Input password"
                    name="password"
                    control={control}
                    error={errors?.password?.message}
                />
                <PasswordField
                    placeholder="Confirm password"
                    name="confirmPassword"
                    control={control}
                    error={errors?.confirmPassword?.message}
                /> 
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

export default RegisterForm;