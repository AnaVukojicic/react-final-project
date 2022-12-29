import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import  {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Cell,ResponsiveContainer } from "recharts";
import { dashboardService } from '../../../services/DashboardService';
import classes from './Chart.module.scss';
import {t} from 'react-switch-lang';
import PropTypes from 'prop-types';

const Chart=({type,month})=>{
    const [height,setHeight]=useState(100)
    const {data:chartData}=useQuery(
        ['chart-report',type,month],
        ()=>dashboardService.getChartData(type,month),
        {
            enabled:true,
            initialData:[]
        }
    )

    useEffect(()=>{
        setHeight(Math.max.apply(Math,chartData.map(item=>parseInt(item.total))))
    },[chartData])

    return(
        <>
            {chartData.length!==0 ? 
                <ResponsiveContainer>
                    <BarChart
                        data={chartData}
                        className='__chart_container'
                        margin={{bottom: 50 }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name" angle={-90} textAnchor="end"/>
                        <YAxis domain={[0,height]}/>   
                        <Tooltip/>
                        <Bar dataKey={"total"} radius={[10, 10, 0, 0]} barSize={70}>
                            {chartData?.map((item,index)=>{
                                return <Cell 
                                            key={index} 
                                            fill={`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`}
                                        />
                            })}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
                :
                <div className={classes['no-chart']}>{t('home.chart-data')}</div>
            }
        </>
    );
}

Chart.propTypes={
    type:PropTypes.string.isRequired,
    month:PropTypes.number.isRequired
}

export default Chart;