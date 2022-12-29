import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { t } from 'react-switch-lang';
import { categoryService } from '../../services/CategoryService';
import { expenseService } from '../../services/ExpenseService';
import FormButton from '../buttons/formButton/FormButton';
import './DeleteForm.scss';
import PropTypes from 'prop-types';

const DeleteForm=({id,label,cancel,type})=>{
    const queryClient = useQueryClient();

    const deleteTransaction=useMutation(
        ()=>expenseService.deleteExpense(id)
            .then(res=>{
                queryClient.invalidateQueries('expenses')
                cancel()
            })
            .catch(err=>console.log(err))
    )

    const deleteCategory=useMutation(
        ()=>categoryService.deleteCategory(id)
            .then(res=>{
                queryClient.invalidateQueries('all-categories')
                cancel()
            })
            .catch(err=>console.log(err))
    )

    const deleteData=(id)=>{
        if(type==='transaction'){
            deleteTransaction.mutate(id)
        }else if(type==='category'){
            deleteCategory.mutate(id)
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

DeleteForm.propTypes={
    id:PropTypes.number.isRequired,
    label:PropTypes.string,
    cancel:PropTypes.func,
    type:PropTypes.oneOf(['transaction','category']).isRequired
}

export default DeleteForm;