import { Menu } from 'antd';
import React, { useState } from 'react';
import './Navigation.scss';
import Logo from '../../images/Logo.svg'
import NavButton from '../buttons/navButton/NavButton';
import { Link } from 'react-router-dom';
import DropdownItem from './dropdownItem/DropdownItem';
import clsx from 'clsx';

const Navigation=()=>{
    const [showNav,setShowNav]=useState(false)

    const openMenu=()=>{
        setShowNav(!showNav)
    }

    const items=[
        {
            label: <Link to='/home'>
                        <div className='__logo_container'>
                            <img src={Logo} alt='logo'/>
                        </div>
                    </Link>,
            key: 'home'
        },
        {
            label: <Link to='/history'>Istorija transakcija</Link>,
            key: 'history'
        },
        {
            label: <Link to='/categories'>Kategorije</Link>,
            key: 'categories'
        },
        {
            label: <Link to='/add-transaction'>
                        <NavButton label='Dodaj transakciju'/>
                    </Link>,
            key: 'add'
        },
        {
            label: <DropdownItem/>,
            key: 'user'
        }
    ]

    return(
        <div>
            <div 
                className={clsx('__hamburger_container', showNav && '__close_hamburger')}
                onClick={openMenu}
            >
                <div></div>
            </div>
            <Menu
                mode='horizontal'
                className={clsx('__nav_container', !showNav && '__remove_nav')} 
                items={items}
            />
        </div>
    );
}

export default Navigation;