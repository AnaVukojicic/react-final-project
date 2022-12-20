import { Dropdown } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserIcon from '../../../images/UserIcon.svg';
import './DropdownItem.scss';

const DropdownItem=({closeNav})=>{
    const [opened,setOpened]=useState(false);

    const changeOpened=()=>{
        setOpened(!opened);
    }

    const setOpenedToFalse=()=>{
        setOpened(false)
        closeNav();
    }

    const logout=()=>{

    }

    const items=[
        {
            label: <div className="_subitems">
                        <Link to='/change-profile' onClick={setOpenedToFalse}>Izmjena profila</Link>
                    </div>,
            key: 'updateProfile'
        },
        {
            label: <div onClick={()=>{setOpenedToFalse();logout()}} className="_subitems">Logout</div>,
            key: 'logout'
        },
        {
            label: <div>
                        <span onClick={()=>{setOpenedToFalse()}} className="_subitems">MN</span>       
                        <span>|</span> 
                        <span onClick={()=>{setOpenedToFalse()}} className="_subitems">EN</span>
                    </div>,
            key: 'language'
        }
    ];

    return(
        <Dropdown 
            menu={{items}} 
            trigger='click' 
            className={!opened ? "__container" : "__open_container"}
            onOpenChange={changeOpened}
        >
            <img className="__img" src={UserIcon}  alt=""/>
        </Dropdown>
    );
}

export default DropdownItem;