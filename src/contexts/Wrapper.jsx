import React from 'react';
import UserProvider from './UserContext';

const ContextWrapper=({children})=>{
    return(
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export default ContextWrapper;