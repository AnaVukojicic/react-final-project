import React from "react";
import classes from './NavButton.module.scss';
import { AiOutlinePlus } from "react-icons/ai";
import PropTypes from 'prop-types';

const NavButton=({label,onClick,backgroundColor=''})=>{
    return(
        <button 
            className={classes['container']} 
            onClick={onClick}
            style={{backgroundColor:backgroundColor}}
        >
            <span><AiOutlinePlus/></span>
            {label}
        </button>
    );
}

NavButton.propTypes={
    label:PropTypes.string,
    onClick:PropTypes.func,
    backgroundColor:PropTypes.string
}

export default NavButton;