import { DatePicker, Input, Select } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import NavButton from '../../../components/buttons/navButton/NavButton';
import FieldWrapper from '../../../components/formFields/fieldWrapper/FieldWrapper';
import { categoryService } from '../../../services/CategoryService';
import './OptionsForm.scss';
import {t} from 'react-switch-lang';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

const OptionsForm=({descriptionChange,dateChange,categoryChange,typeChange})=>{
    const navigate=useNavigate();

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

    return(
        <div className='__container_options'>
            <div className='__radio_buttons'>
                <div>
                    <label htmlFor='expense'>{t('history.options.expense')}</label>
                    <input type='radio' name='type' id='expense' onClick={e=>typeChange(e)} value='expense'/>
                </div>
                <div>
                    <label htmlFor='income'>{t('history.options.income')}</label>
                    <input type='radio' name='type' id='income' onClick={e=>typeChange(e)} value='income'/>
                </div>
            </div>
            <div className='__other_inputs'>
                <FieldWrapper className='__wrapper'>
                    <Input 
                        placeholder={t('history.options.description')} 
                        onChange={e=>descriptionChange(e)}
                        style={{width:'100%'}}
                    />
                </FieldWrapper>
                <FieldWrapper className='__wrapper'>
                    <DatePicker 
                        placeholder='_ _ / _ _ / _ _ _ _' 
                        format='DD/MM/YYYY'
                        style={{width:'100%'}}
                        picker='date'
                        onChange={(d,ds)=>dateChange(ds ? dayjs(d).format('YYYY-MM-DD') : '')}
                    />
                </FieldWrapper>
                <FieldWrapper className='__wrapper'>
                    <Select 
                        placeholder={t('history.options.category')} 
                        mode='multiple'
                        onChange={value=>categoryChange(value)}
                        style={{width:'100%'}}
                        options={categories}
                    />
                </FieldWrapper>
            </div>
            <div className='__button_container'>
                <NavButton label="" onClick={()=>{navigate('/add-transaction')}} backgroundColor='#140C6F'/>
            </div>
        </div>
    )
}

OptionsForm.propTypes={
    descriptionChange:PropTypes.func,
    dateChange:PropTypes.func,
    categoryChange:PropTypes.func,
    typeChange:PropTypes.func
}

export default OptionsForm;