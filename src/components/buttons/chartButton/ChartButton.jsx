import React, { useState } from 'react';
import classes from './ChartButton.module.scss';
import { AiFillCaretDown } from "react-icons/ai";
import clsx from 'clsx';

const ChartButton=({label,data})=>{
    const [opened,setOpened]=useState(false);

    return(
        <div>
            <button className={classes['container']} onClick={()=>setOpened(!opened)}>
                <span>{label}</span>
                <AiFillCaretDown/>
            </button>
            <div className={clsx(classes['dropdown'],!opened && classes['close-dropdown'])}>
                 {data.map((item,index)=>{
                     return <p 
                                onClick={()=>{
                                    item.onClick();
                                    setOpened(false);
                                }}
                                key={index}
                            >
                                {item.label}
                            </p>
                 })}
            </div>
        </div>
    );
}

export default ChartButton;