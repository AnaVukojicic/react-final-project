import { Dropdown } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import UserIcon from '../../../images/UserIcon.svg';
import './DropdownItem.scss';
import { t } from 'react-switch-lang';
import { authService } from "../../../services/AuthService";
import { storageService } from "../../../services/StorageService";
import PropTypes from 'prop-types';

const DropdownItem=({closeNav})=>{
    const navigate=useNavigate();
    const {setLanguage}=useUser();
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
        authService.logout()
            .then(res=>{
                storageService.clear()
                navigate('/login');
            })
            .catch(err=>Promise.reject(err))
    }

    const items=[
        {
            label: <div className="_subitems">
                        <Link to='/edit-profile' onClick={setOpenedToFalse}>{t('navigation.edit-profile')}</Link>
                    </div>,
            key: 'updateProfile'
        },
        {
            label: <div onClick={()=>{setOpenedToFalse();logout()}} className="_subitems">{t('navigation.logout')}</div>,
            key: 'logout'
        },
        {
            label: <div>
                        <span onClick={()=>{setOpenedToFalse();setLanguage('me')}} className="_subitems">MN</span>       
                        <span>|</span> 
                        <span onClick={()=>{setOpenedToFalse();setLanguage('en')}} className="_subitems">EN</span>
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

DropdownItem.propTypes={
    closeNav:PropTypes.func
}

export default DropdownItem;