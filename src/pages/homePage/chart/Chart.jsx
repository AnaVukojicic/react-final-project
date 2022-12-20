import React from 'react';
import { useQuery } from 'react-query';
import  {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Cell,ResponsiveContainer } from "recharts";
import { dashboardService } from '../../../services/DashboardService';
import classes from './Chart.module.scss';

const Chart=({type,month})=>{
    const {data:chartData}=useQuery(
        ['chart-report',type,month],
        ()=>dashboardService.getChartData(type,month),
        {
            enabled:true,
            initialData:[]
        }
    )

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
                        <YAxis/>   
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
                <div className={classes['no-chart']}>There haven't been any transactions for choosen options!</div>
            }
        </>
    );
}

export default Chart;