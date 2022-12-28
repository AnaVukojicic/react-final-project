import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { t } from 'react-switch-lang';
import FormButton from '../../../components/buttons/formButton/FormButton';
import './ImageModalForm.scss';
import * as yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';
import { profileService } from '../../../services/ProfileService';
import { useUser } from '../../../contexts/UserContext';
import FileField from '../../../components/formFields/fileField/FileField';

const ImageModalForm=({content,id,cancel})=>{
    const queryClient=useQueryClient();
    const {userData,setUserData}=useUser();
    const allowedExtensions=['jpg','png','jfif','gif','jpeg','svg'];
    const [image,setImage]=useState(null)

    const editImage=useMutation(
        (data)=>profileService.editImage(data)
            .then(res=>{
                queryClient.invalidateQueries('user',userData?.id)
                setUserData(res)
                cancel()
            })
            .catch(err=>console.log(err))
    )

    const shema=yup.object().shape({
        image:yup.mixed().test('fileFormat',t('profile.errors.format'),(value)=>{
                    return value && allowedExtensions.includes(value.split('.')[value.split('.').length-1])
                }).required(t('profile.errors.required'))
    })

    const {handleSubmit,control,formState:{errors}}=useForm({resolver:yupResolver(shema)})

    const handleChange=(e)=>{
        setImage(e.target.files[0])
    }

    const submitForm=()=>{
        editImage.mutate(image)
    }

    return(
        <form onSubmit={handleSubmit(submitForm)}>
            <div className='__image_form_container'>
                <p className='__content'>{content}</p>
                <FileField
                    type='file'
                    control={control}
                    error={errors?.image?.message}
                    name='image'
                    onChange={(e)=>handleChange(e)}
                />
                <div className='__buttons'>
                    <FormButton 
                        onClick={()=>cancel()}
                        label={t('common.cancel')}
                        backgroundColor="#F2F2F2"
                        color="black"
                    />
                    <FormButton 
                        label={t('common.save')}
                        backgroundColor="#140C6F"
                        type='submit'
                        color="#FFFFFF"
                    />
                </div>
            </div>
        </form>
    )
}

export default ImageModalForm;