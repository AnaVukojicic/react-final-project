import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { t } from 'react-switch-lang';
import './ImageModalForm.scss';
import * as yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';
import { profileService } from '../../../services/ProfileService';
import { useUser } from '../../../contexts/UserContext';
import FileField from '../../../components/formFields/fileField/FileField';
import FormButtonGroup from '../../../components/buttons/formButtonGroup/FormButtonGroup';
import PropTypes from 'prop-types';
import { message } from 'antd';

const ImageModalForm=({content,id,cancel})=>{
    const queryClient=useQueryClient();
    const {setUserData}=useUser();
    const allowedExtensions=['jpg','png','jfif','gif','jpeg','svg'];
    const [image,setImage]=useState(null)

    const editImage=useMutation(
        (data)=>profileService.editImage(data)
            .then(res=>{
                queryClient.invalidateQueries('user',id)
                message.success(t('common.success'))
                setUserData(res)
                cancel()
            })
            .catch(err=>{
                message.error(t('common.error'))
            })
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
                    control={control}
                    error={errors?.image?.message}
                    name='image'
                    onChange={(e)=>handleChange(e)}
                />
                <div className='__buttons'>
                    <FormButtonGroup onClick={()=>cancel()}/>
                </div>
            </div>
        </form>
    )
}

ImageModalForm.propTypes={
    content:PropTypes.string,
    id:PropTypes.number.isRequired,
    cancel:PropTypes.func
}

export default ImageModalForm;