import React from 'react';
import classes from './AuthLayout.module.scss';
import Logo from '../../../images/Logo.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthLayout=({page,children})=>{
    return(
        <div className={classes['container']}>
            <div className={classes['blue-background']}>
                <div className={classes['logo-container']}>
                    <div>
                        <img src={Logo} alt="logo"/>
                    </div>
                </div>
                {children}
            </div>
            <div className={classes['sign-up']}>
                {page==='register' &&
                    <p>
                        Već imate profil ? <span><Link to='/login'>Sign in</Link></span>
                    </p>
                }
                {page==='login' &&
                    <p>
                        Nemate profil ? <span><Link to='/register'>Sign up</Link></span>
                    </p>
                }
            </div>
        </div>
    );
}

AuthLayout.propTypes={
    page:PropTypes.oneOf(['register','login']).isRequired,
    children:PropTypes.any
}

export default AuthLayout;