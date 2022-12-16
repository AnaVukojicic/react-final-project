import React from "react";
import classes from './NavButton.module.scss';
import { AiOutlinePlus } from "react-icons/ai";

const NavButton=({label,onClick})=>{
    return(
        <button className={classes['container']} onClick={onClick}>
            <span><AiOutlinePlus/></span>
            {label}
        </button>
    );
}

export default NavButton;