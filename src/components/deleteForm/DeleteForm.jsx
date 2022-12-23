import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { t } from 'react-switch-lang';
import { expenseService } from '../../services/ExpenseService';
import FormButton from '../buttons/formButton/FormButton';
import './DeleteForm.scss';

const DeleteForm=({id,label,cancel,type})=>{
    const queryClient = useQueryClient();

    const deleteTransaction=useMutation(
        ()=>expenseService.deletExpense(id)
            .then(res=>{
                queryClient.invalidateQueries('expenses')
                cancel()
            })
            .catch(err=>console.log(err))
    )

    const deleteData=(id)=>{
        if(type==='transaction'){
            deleteTransaction.mutate(id)
        }else if(type==='category'){
            console.log("DELETE CATEGORY",id)
        }
    }
    return(
        <div className='__delete_container'>
            <div className='__delete_content'>{label}</div>
            <div className='__modal_buttons'>
                <FormButton 
                    onClick={cancel}
                    label={t('common.cancel')}
                    backgroundColor="#F2F2F2"
                    color="black"
                />
                <FormButton 
                    onClick={()=>deleteData(id)}
                    label={t('common.delete')}
                    backgroundColor="#C81919"
                    color="black"
                />
            </div>
        </div>
    )
}

export default DeleteForm;