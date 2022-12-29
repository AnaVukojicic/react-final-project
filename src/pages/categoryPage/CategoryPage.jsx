import { Table } from "antd";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { t } from "react-switch-lang";
import NavButton from "../../components/buttons/navButton/NavButton";
import OptionButtons from "../../components/buttons/optionButtons/OptionButtons";
import { categoryService } from "../../services/CategoryService";
import './CategoryPage.scss';
import { AiOutlineClose } from "react-icons/ai";
import InputField from "../../components/formFields/inputField/InputField";
import { useForm } from "react-hook-form";
import FormButton from "../../components/buttons/formButton/FormButton";
import RadioField from "../../components/formFields/radioField/RadioField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import DeleteForm from "../../components/deleteForm/DeleteForm";
import { useModal } from "../../contexts/ModalContext";

const CategoryPage=()=>{
    const queryClient=useQueryClient();
    const [showAddCategory,setShowAddCategory]=useState(false)
    const [type,setType]=useState('add')
    const [id,setId]=useState(null)
    const {open,close}=useModal();

    const handleDelete=(id,type)=>{
        open({
            title:t('common.modal-title',{type:t(`common.delete-type.${type}`)}),
            content: <DeleteForm 
                            id={id}
                            label={t('common.modal-content',{type:t(`common.delete-type.${type}`)})}
                            cancel={close}
                            type={type}
                        />

        })
    }

    const columns = [
        {
            title: t('categories.name'),
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: t('categories.color'),
            dataIndex: 'color',
            key: 'color',
            render:(text,record,index)=>{
                return <div style={{backgroundColor:record?.color}} className='__color_circle'></div>
            }
        },{
            title: '',
            dataIndex: 'options',
            key: 'options',
            render:(text,record,index)=>{
                return <OptionButtons 
                            handleEdit={()=>{
                                setId(record?.id);
                                setType('edit');
                                setShowAddCategory(true)
                            }}
                            handleDelete={()=>handleDelete(record?.id,'category')}
                        />
            }
        }
    ];

    const colors=[
        {value:'#258FDC',label:'#258FDC'},
        {value:'#84C57A',label:'#84C57A'},
        {value:'#FFA800',label:'#FFA800'},
        {value:'#C2F1FB',label:'#C2F1FB'},
        {value:'#DC6788',label:'#DC6788'},
        {value:'#5E72EB',label:'#5E72EB'},
        {value:'#F52929',label:'#F52929'},
        {value:'#D946EF',label:'#D946EF'},
        {value:'#10B981',label:'#10B981'},
        {value:'#84CC16',label:'#84CC16'},
        {value:'#EC4899',label:'#EC4899'},
        {value:'#7628DA',label:'#7628DA'}
    ]

    const {data:categories}=useQuery(
        ['all-categories'],
        ()=>categoryService.getAllCategories(),
        {
            enabled:true,
            initialData:[]
        }
    )

    useQuery(
        ['category',id],
        ()=>categoryService.getSingleCategory(id)
            .then(res=>{
                reset(res);
                return res;
            }),
        {
            enabled: type==='edit' ? true : false
        }
    )

    const addCategory=useMutation(data=>categoryService.addCategory(data)
        .then(res=>{
            queryClient.invalidateQueries('all-categories')
            resetonClose()
        })
        .catch(err=>console.log(err))
    )

    const editCategory=useMutation(data=>categoryService.editCategory(data)
        .then(res=>{
            queryClient.invalidateQueries("all-categories")
            resetonClose()
        })
        .catch(err=>console.log(err))
    )

    const shema=yup.object().shape({
        name: yup.string().min(3,t('categories.errors.min',{number:3}))
            .max(100,t('categories.errors.max',{number:100})).required(t('categories.errors.required')),
        color: yup.string().required(t('categories.errors.required'))
    })

    const {handleSubmit,control,reset,formState:{errors}}=useForm({resolver:yupResolver(shema)})

    const resetonClose=()=>{
        reset({
            name:'',
            color:''
        })
        setShowAddCategory(false)
        setId(null)
        setType('add')
    }

    const submitForm=(data)=>{
        if(type==='add'){
            addCategory.mutate(data)
        }else if(type==='edit'){
            editCategory.mutate({...data,id:id})
        }
    }

    return(
        <div className='__category_container'>
            <div className={showAddCategory ? '__category_table': '__large_category_table'}>
                <div className='title'>
                    <h3>{t('categories.title')}</h3>
                    <NavButton 
                        label=''
                        onClick={()=>{
                            resetonClose();
                            setShowAddCategory(true)
                        }}
                        backgroundColor='#140C6F'
                    />
                </div>
                <Table 
                    columns={columns}
                    dataSource={categories}
                    rowKey={record => record.id} 
                    pagination={true}
                />
            </div>
            {showAddCategory &&
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="__add_category">
                        <div className="__title">
                            <h3>{type==='edit' ? t('categories.edit-category') : t('categories.new-category')}</h3>
                            <AiOutlineClose 
                                className="__close" 
                                onClick={()=>resetonClose()}
                                    
                            />
                        </div>
                        <div className="__input_container">
                            <InputField 
                                placeholder={t('categories.name')}
                                bordered={false}    
                                control={control}
                                name="name"
                                error={errors?.name?.message}
                            />
                        </div>
                        <div className="__color">
                            <h3>{t('categories.color')}</h3>
                            <div>
                                <RadioField
                                    name="color"
                                    control={control}
                                    error={errors?.color?.message}
                                    options={colors}
                                />
                            </div>
                            <div className="__button">
                                <FormButton
                                    label={type==='edit' ? t('categories.edit') : t('categories.add')}
                                    backgroundColor="#FFFFFF"
                                    color="#140C6F"
                                    type="submit"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            }
        </div>
    )
}

export default CategoryPage;