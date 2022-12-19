import React from 'react';
import classes from './AuthLayout.module.scss';
import Logo from '../../../images/Logo.svg';
import { Link } from 'react-router-dom';

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
                        Already have an account ? <span><Link to='/login'>Sign in</Link></span>
                    </p>
                }
                {page==='login' &&
                    <p>
                        Don't have an account ? <span><Link to='/register'>Sign up</Link></span>
                    </p>
                }
            </div>
        </div>
    );
}

export default AuthLayout;