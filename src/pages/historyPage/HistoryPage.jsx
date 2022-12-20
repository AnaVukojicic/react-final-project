import { Table } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { expenseService } from '../../services/ExpenseService';
import './HistoryPage.scss';
import OptionButtons from './optionButtons/OptionButtons';
import OptionsForm from './optionsForm/OptionsForm';

const HistoryPage=()=>{
    const [type,setType]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState(null);
    const [date,setDate]=useState('');

    const {data:expenses}=useQuery(
        ['expenses',type,description,category,date],
        ()=>expenseService.getAllTransactions(type,description,category,date),
        {
            enabled:true,
            initialData:[]
        }
    )

    const columns = [
        {
            title: 'Tip',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Kratak opis',
            dataIndex: 'note',
            key: 'note',
        },
        {
            title: 'Datum i vrijeme',
            dataIndex: 'date',
            key: 'date',
            render: (text,record,index)=>{
                return dayjs(text).format('DD/MM/YYYY');
            }
        },
        {
            title: 'Iznos',
            dataIndex: 'amount',
            key: 'amount'
        },
        {
            title: 'Kategorija',
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
            title: 'Opis',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '',
            dataIndex: 'options',
            key: 'options',
            render: ()=>{
                return <OptionButtons/>
            }
        }
      ];

    return(
        <div className='__history_container'>
            <div className='__options_container'>
                <OptionsForm 
                    typeChange={e=>setType(e.target.value)}
                    dateChange={(e)=>setDate(e)}
                    descriptionChange={e=>setDescription(e.target.value)}
                    categoryChange={value=>setCategory(value)}
                />
            </div>
            <div className='__history_table'>
                <div className='__table_title'>
                    <h3>Istorija transakcija</h3>
                </div>
                <Table 
                    columns={columns} 
                    dataSource={expenses} 
                    rowKey={record => record.id} 
                    pagination={false} 
                />
            </div>
        </div>
    );
}

export default HistoryPage;