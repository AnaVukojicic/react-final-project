import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../navigation/Navigation';

const DefaultLayout=()=>{
    return(
        <>
            <div>
                <Navigation/>
            </div> 
            <div>
                <Outlet/>
            </div>
        </>
    );
}

export default DefaultLayout;