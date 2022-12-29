import React from 'react';
import { t } from 'react-switch-lang';
import FormButton from '../formButton/FormButton';

const FormButtonGroup=({onClick})=>{
    return(
        <>
            <FormButton 
                label={t('common.cancel')}
                backgroundColor="#F2F2F2" 
                color="#140C6F"
                onClick={onClick}
            />
            <FormButton 
                label={t('common.save')}
                backgroundColor="#140C6F"
                color="#FFFFFF" 
                type="submit"
            />
        </>
    )
}

export default FormButtonGroup;