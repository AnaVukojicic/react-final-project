import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { t } from "react-switch-lang";
import InputField from "../../components/formFields/inputField/InputField";
import PasswordField from "../../components/formFields/passwordField/PasswordField";
import classes from './ProfilePage.module.scss';
import UserIcon from '../../images/UserIcon.svg';
import Edit from '../../images/Edit.svg';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useUser } from "../../contexts/UserContext";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { profileService } from "../../services/ProfileService";
import { useModal } from "../../contexts/ModalContext";
import ImageModalForm from "./imageModal/ImageModalForm";
import FormButtonGroup from "../../components/buttons/formButtonGroup/FormButtonGroup";
import { useNavigate } from "react-router-dom";

const ProfilePage=()=>{
    const queryClient=useQueryClient();
    const navigate=useNavigate()
    const {userData,setUserData}=useUser();
    const {open,close}=useModal();

    const {data:user}=useQuery(
        ['user',userData?.id],
        ()=>profileService.getUserInfo()
            .then(res=>{
                reset({
                    name:res?.name,
                    password:res?.password
                })
                setUserData(res)
                return res;
            }),
        {
            enabled:true
        }
    )

    const editUser=useMutation(
        (data)=>profileService.editUser(data)
            .then(res=>{
                queryClient.invalidateQueries('user',userData?.id)
                setUserData(res)
            })
            .catch(err=>console.log(err))
    )

    const openEditModal=()=>{
        open({
            title: t('profile.edit-image'),
            content: <ImageModalForm 
                        content={t('profile.edit-content')}
                        id={userData?.id}
                        cancel={()=>close()}
                    />
        })
    }

    const shema=yup.object().shape({
        name: yup.string().trim().min(3,t('profile.errors.min',{number:3}))
            .max(100,t('profile.errors.max',{number:100})).required(t('profile.errors.required')),
        password: yup.string().min(8,t('profile.errors.min',{number:8}))
            .max(16,t('profile.errors.max',{number:16})).required(t('profile.errors.required'))
    })

    const {handleSubmit,control,reset,formState:{errors}}=useForm({resolver:yupResolver(shema)})

    

    const submitForm=(data)=>{
        editUser.mutate({
            ...data,
            email:user?.email,
            id:user?.id
        })
    }

    return(
        <form onSubmit={handleSubmit(submitForm)}>
            <div className={classes['container']}>
                <div className={classes['profile-container']}>
                    <div className={classes['title']}>
                        <h3>{t('profile.title')}</h3>
                    </div>
                    <div className={classes['profile']}>
                        <div className={classes['image']}>
                            <img 
                                className={classes['img']} 
                                src={user ? user?.getProfilePhoto() : UserIcon} 
                                alt="profile"
                            />
                            <img 
                                className={classes['edit']} 
                                src={Edit} alt=""
                                onClick={()=>openEditModal()}
                            />
                        </div>
                        <div className={classes['info']}>
                            <div className={classes['form-container']}>
                                <InputField
                                    placeholder={t('profile.name')}
                                    label={t('profile.name')}
                                    name="name"
                                    control={control}
                                    error={errors?.name?.message}
                                />
                                <PasswordField
                                    placeholder={t('profile.password')}
                                    label={t('profile.password')}
                                    name="password"
                                    control={control}
                                    error={errors?.password?.message}
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes['buttons']}>
                    <FormButtonGroup onClick={()=>navigate(-1)}/>
                </div>
            </div>
        </form>
    )
}

export default ProfilePage;