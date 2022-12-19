import React, { useState } from 'react';
import classes from './HomePage.module.scss';
import TransactionCard from '../../components/transactionCard/TransactionCard';
import { expenseService } from '../../services/ExpenseService';
import { useQuery } from 'react-query';
import ChartButton from '../../components/buttons/chartButton/ChartButton';
import Chart from './chart/Chart';
import dayjs from 'dayjs';
import { months, types } from '../../constants/constants';

const HomePage=()=>{
    const [buttonType,setButtonType]=useState(types[0])
    const [month,setMonth]=useState(`${months[dayjs().month()]} ${dayjs().year()}`)
    const [monthParam,setMonthParam]=useState(dayjs().month());
    const [yearParam,setYearParam]=useState(dayjs().year());

    const {data:profits}=useQuery(
        ['profits'],
        ()=>expenseService.getProfitOrExpenseSum("income"),
        {
            enabled:true,
            initialData:[]
        }
    )

    const {data:expenses}=useQuery(
        ['expenses'],
        ()=>expenseService.getProfitOrExpenseSum("expense"),
        {
            enabled:true,
            initialData:[]
        }
    )

    const cards=[
        {
            title: "Trenutno stanje na računu",
            amount: profits-expenses,
            type: "total"
        },
        {
            title: "Prihodi",
            amount: profits,
            type: "profit"
        },
        {
            title: "Troškovi",
            amount: expenses,
            type: "expense"
        }
    ]

    const handleTypeClick=(index)=>{
        setButtonType(types[index])
    }

    const handleMonthClick=(index)=>{
        setMonth(dayjs().month()>=index ?
                    `${months[dayjs().month()-index]} ${dayjs().year()}`
                :
                    `${months[12-index+dayjs().month()]} ${dayjs().subtract(1,'year').year()}`
        )
        setMonthParam(dayjs().month()>=index ? dayjs().month()-index+1 : 12-index+dayjs().month()+1)
        setYearParam(dayjs().month()>=index ? dayjs().year() : dayjs().year()-1)
    }

    const data1=types.map((type,index)=>{
        return {
            label: type,
            key: index,
            onClick: ()=>{handleTypeClick(index)}
        }
    });

    const data2=months.map((month,index,arr)=>{
        return {
            label: dayjs().month()>=index ?
                        `${arr[dayjs().month()-index]} ${dayjs().year()}`
                    :
                    `${arr[12-index+dayjs().month()]} ${dayjs().subtract(1,'year').year()}`,
            key: index,
            onClick: ()=>{
                handleMonthClick(index)
            }
        }
    })

    return(
        <div className={classes['container']}>
            <div className={classes['cards']}>
                {cards.map((card,index)=>{
                    return <TransactionCard
                                key={index}
                                title={card.title}
                                amount={card.amount}
                                type={card.type}
                            />
                })}
            </div>
            <div className={classes['chart-container']}>
                <div className={classes['title']}>
                    <h3>Trenutno stanje</h3>
                    <div className={classes['buttons']}>
                        <ChartButton label={buttonType} data={data1}/>
                        <ChartButton label={month} data={data2}/>
                    </div>
                </div>
                <div className={classes['chart']}>
                    <Chart type="" month={monthParam} year={yearParam}/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;