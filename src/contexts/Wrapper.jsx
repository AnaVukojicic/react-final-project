import React from 'react';
import UserProvider from './UserContext';
import ModalProvider from './ModalContext';

const ContextWrapper=({children})=>{
    return(
        <UserProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </UserProvider>
    )
}

export default ContextWrapper;