import React, { useState } from "react";
import classes from './UserButton.module.scss';
import { FiUser } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import UserIcon from '../../../images/UserIcon.svg';
import clsx from "clsx";

const UserButton=()=>{
    const [showOptions,setShowOptions]=useState(false);

    const onClick=()=>{
        setShowOptions(!showOptions);
    }

    return(
        <button className={classes['container']}>
            <div 
                className={clsx(classes['icon-container'],showOptions && classes['icon-open'])} 
                onClick={onClick}
            >
                <img src={UserIcon} alt=""/>
            </div>
            <div className={showOptions ? classes['options-container'] : classes['d-none']}>
                <a>Izmjena profila</a>
                <a>Logout</a>
                <div>
                    <a>MN</a>
                    <span>|</span>
                    <a>EN</a>
                </div>
            </div>
        </button>
    );
}

export default UserButton;