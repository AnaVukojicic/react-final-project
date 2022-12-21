import { Dropdown } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import UserIcon from '../../../images/UserIcon.svg';
import './DropdownItem.scss';

const DropdownItem=({closeNav})=>{
    const {userData}=useUser();
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
        <div className= {!opened ?"__container" : "__container_open"}>
            <Dropdown 
                menu={{items}} 
                trigger='click' 
                className={!opened ? "__img" : "__open_img"}
                onOpenChange={changeOpened}
            >
                <img src={userData ? userData.getProfilePhoto() : UserIcon}  alt=""/>
            </Dropdown>
        </div>
    );
}

export default DropdownItem;