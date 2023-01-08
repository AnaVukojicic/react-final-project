import React from "react";
import classes from './AddTransactionPage.module.scss';
import {t} from 'react-switch-lang';
import * as yup from 'yup';
import SelectField from "../../components/formFields/selectField/SelectField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DateField from "../../components/formFields/dateField/DateField";
import dayjs from "dayjs";
import TimeField from "../../components/formFields/timeField/TimeField";
import NumberField from "../../components/formFields/numberField/NumberField";
import TextField from "../../components/formFields/textField/TextField";
import CheckboxField from "../../components/formFields/checkboxField/CheckboxField";
import { useQuery } from "react-query";
import { categoryService } from "../../services/CategoryService";
import { expenseService } from "../../services/ExpenseService";
import { useNavigate, useParams } from "react-router-dom";
import FormButtonGroup from "../../components/buttons/formButtonGroup/FormButtonGroup";
import PropTypes from 'prop-types';
import { message } from "antd";

const AddTransactionPage=({type})=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const optionsType=[
        {
            label: t('add-transaction.form.income'),
            value: 'income'
        },
        {
            label: t('add-transaction.form.expense'),
            value: 'expense'
        }
    ]

    const getCategories=()=>{
        return categoryService.getAllCategories()
            .then(res=>{
                return res.map(category=>{
                    return {
                        label: category?.name,
                        value: category?.id
                    }
                })
            })
    }

    const {data:categories}=useQuery(
        ['categories'],
        ()=>getCategories(),
        {
            enabled:true,
            initialData:[]
        }
    )

    const addExpense=(data)=>{
        return expenseService.addExpense(data)
            .then(res=>{
                message.success(t('common.success'))
                navigate('/history')
            })
            .catch(err=>{
                message.error(t('common.error'))
            })
    }

    const getExpenseInfo=(id)=>{
        expenseService.getExpenseInfo(id)
            .then(res=>{
                reset({
                    id:res?.id,
                    type:res?.type,
                    date:dayjs(res?.date),
                    time:dayjs(res?.time,'HH:mm'),
                    amount:res?.amount,
                    description:res?.description,
                    note:res?.note,
                    category:res?.categoriesArray.map(category=>category?.id)
                })
                return res
            })
            .catch(err=>{
                message.error(t('common.error'))
            })
    }

    const editExpense=(data)=>{
        return expenseService.editExpense(data)
            .then(res=>{
                message.success(t('common.success'))
                navigate('/history')
            })
            .catch(err=>{
                message.error(t('common.error'))
            })
    }

    const shema=yup.object().shape({
        type: yup.string().trim().required(t('add-transaction.errors.required')),
        date: yup.date().required(t('add-transaction.errors.required')),
        time: yup.string().required(t('add-transaction.errors.required')),
        amount: yup.number().min(0,t('add-transaction.errors.negative'))
            .required(t('add-transaction.errors.required')),
        description: yup.string().trim().min(3,t('add-transaction.errors.min',{number:3}))
            .max(100,t('add-transaction.errors.max',{number:100})).required(t('add-transaction.errors.required')),
        note: yup.string().trim().min(3,t('add-transaction.errors.min',{number:3}))
            .max(400,t('add-transaction.errors.max',{number:400})).nullable(),
        category:yup.array().of(yup.number().integer()).required(t('add-transaction.errors.required'))
    })

    const {handleSubmit,control,reset,formState:{errors}}=useForm({
        resolver:yupResolver(shema),
        defaultValues: {
            "date": dayjs(new Date()),
            "time":dayjs(new Date())
        }
    });

    useQuery(
        ['expense',id],
        ()=>getExpenseInfo(id),
        {enabled: type==='edit' ? true : false}
    )

    const submitForm=(data)=>{
        if(type==='add'){
            addExpense(data)  
        }else if(type==='edit'){
            editExpense(data)
        }
    }

    return(
        <form onSubmit={handleSubmit(submitForm)}>
            <div className={classes['container']}>
                <div className={classes['content']}>
                    <div className={classes['title']}>
                        <h3>{t('add-transaction.title')}</h3>
                    </div>
                    <div className={classes['data']}>
                        <div className={classes['form-div']}>
                            <SelectField    
                                bordered={false}
                                placeholder={t('add-transaction.form.type')}
                                name="type"
                                control={control}
                                error={errors?.type?.message}
                                options={optionsType}
                            />
                            <div className={classes['date-time']}>
                                <DateField    
                                    bordered={false}
                                    placeholder={t('add-transaction.form.date')}
                                    name="date"
                                    control={control}
                                    error={errors?.date?.message}
                                />
                                <TimeField
                                    bordered={false}
                                    placeholder={t('add-transaction.form.time')}
                                    name="time"
                                    control={control}
                                    error={errors?.time?.message}
                                />
                            </div>
                            <NumberField
                                prefix={t('add-transaction.form.amount')}
                                name="amount"
                                step='0.01'
                                control={control}
                                error={errors?.amount?.message}
                            />
                            <TextField 
                                control={control}
                                name="description"
                                label={t('add-transaction.form.description')}
                                error={errors?.description?.message}
                                rows={3}
                            />
                            <TextField 
                                control={control}
                                name="note"
                                label={t('add-transaction.form.note')}
                                error={errors?.note?.message}
                                rows={5}
                            />
                        </div>
                        <div className={classes['category-div']}>
                            <h3>{t('add-transaction.form.category')}</h3>
                            <div className={classes['category-options']}>
                                <CheckboxField
                                    control={control}
                                    error={errors?.category?.message}
                                    name="category"
                                    options={categories}
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

AddTransactionPage.propTypes={
    type:PropTypes.oneOf(['add','edit']).isRequired
}

export default AddTransactionPage;