import React from 'react';
import classes from './ChartButton.module.scss';
import { AiFillCaretDown } from "react-icons/ai";

const ChartButton=({label,onClick})=>{
    return(
        <button className={classes['container']} onClick={onClick}>
            <span>{label}</span>
            <AiFillCaretDown/>
        </button>
    );
}

export default ChartButton;