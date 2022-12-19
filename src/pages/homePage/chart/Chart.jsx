import React from 'react';
import './Chart.scss';
import  {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Cell,ResponsiveContainer } from "recharts";

const Chart=({type,month,year})=>{
    const categoriesToShow=[
        // {
        //     name:"gcvjd",
        //     color: "blue",
        //     amount:450
        // },
        // {
        //     name:"gcvjvdkjvbsjd",
        //     color: "red",
        //     amount:1200
        // },
        // {
        //     name:"gcvjjbjd",
        //     color: "purple",
        //     amount:573
        // },
        // {
        //     name:"gcbfvjd",
        //     color: "#285627",
        //     amount:120
        // },
        // {
        //     name:"gcvjdbd",
        //     color: "grey",
        //     amount:50
        // },
        // {
        //     name:"gcvbdfjd",
        //     color: "pink",
        //     amount:863
        // },
        // {
        //     name:"bdfgcvjd",
        //     color: "black",
        //     amount:555
        // },
        // {
        //     name:"gcvjdrbd",
        //     color: "green",
        //     amount:357
        // },
        // {
        //     name:"gcvjddxbd",
        //     color: "yellow",
        //     amount:470
        // },
    ];

    return(
        <ResponsiveContainer>
            <BarChart
                data={categoriesToShow}
                className='__chart_container'
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" angle={-90} textAnchor="end"/>
                <YAxis/>   
                <Tooltip/>
                <Bar dataKey="amount" radius={[10, 10, 0, 0]} barSize={70}>
                    {categoriesToShow?.map((item,index)=>{
                        return <Cell key={index} fill={item.color} />
                    })}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Chart;