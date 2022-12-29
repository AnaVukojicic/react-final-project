import { Table } from 'antd';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { expenseService } from '../../services/ExpenseService';
import './HistoryPage.scss';
import OptionButtons from '../../components/buttons/optionButtons/OptionButtons';
import OptionsForm from './optionsForm/OptionsForm';
import {t} from 'react-switch-lang';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../contexts/ModalContext';
import DeleteForm from '../../components/deleteForm/DeleteForm';

const HistoryPage=()=>{
    const navigate=useNavigate();
    const [type,setType]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState(null);
    const [date,setDate]=useState('');
    const {open,close}=useModal();

    const {data:expenses}=useQuery(
        ['expenses',type,description,category,date],
        ()=>expenseService.getAllTransactions(type,description,category,date),
        {
            enabled:true,
            initialData:[]
        }
    )

    const handleEdit=(id)=>{
        navigate(`/edit-transaction/${id}`);
    }

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
            title: t('history.table.type'),
            dataIndex: 'type',
            key: 'type',
            render: (text,record,index)=>{
                return record?.getTypeName()
            }
        },
        {
            title: t('history.table.description'),
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: t('history.table.date'),
            dataIndex: 'date',
            key: 'date',
            render: (text,record,index)=>{
                return record?.getDateAndTime();
            }
        },
        {
            title: t('history.table.amount'),
            dataIndex: 'amount',
            key: 'amount'
        },
        {
            title: t('history.table.category'),
            dataIndex: 'categoriesArray',
            key: 'categoriesArray',
            render: (text,record,index)=>{
                return record?.categoriesArray?.map(r=>{
                    return <div 
                                key={'category'+r.id} 
                                style={{backgroundColor:r.color}}
                                className='__category_div'
                            >
                                {r.name}
                            </div>
                })
            }
        },
        {
            title: t('history.table.note'),
            dataIndex: 'note',
            key: 'note',
            render:(text,record)=>{
                return <p className='__note'>
                            {record.getTrimmedNote()}
                            <span className='__popup'>{text}</span>
                        </p>

            }
        },
        {
            title: '',
            dataIndex: 'options',
            key: 'options',
            render: (text,record,index)=>{
                return <OptionButtons 
                            handleEdit={()=>handleEdit(record?.id)}
                            handleDelete={()=>handleDelete(record?.id,'transaction')}
                        />
            }
        }
      ];

    return(
        <div className='__history_container'>
            <div className='__options_container'>
                <OptionsForm 
                    typeChange={e=>setType(e.target.value)}
                    dateChange={value=>setDate(value)}
                    descriptionChange={e=>setDescription(e.target.value)}
                    categoryChange={value=>setCategory(value)}
                />
            </div>
            <div className='__history_table'>
                <div className='__table_title'>
                    <h3>{t('history.title')}</h3>
                </div>
                <Table 
                    columns={columns} 
                    dataSource={expenses} 
                    rowKey={record => record.id} 
                    pagination={true}
                />
            </div>
        </div>
    );
}

export default HistoryPage;