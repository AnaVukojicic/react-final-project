import { Modal } from "antd";
import React, { createContext, useContext, useState } from "react";

const ModalContext=createContext();

const ModalProvider=({children})=>{
    const initialData={title:'',content:''}
    const [isVisible,setIsVisible]=useState(false);
    const [modalData,setModalData]=useState(initialData);

    const open = (data) => {
        setModalData({
            title: data?.title, 
            content: data?.content
        })
        setIsVisible(true)
    }

    const close=()=>{
        setModalData(initialData);
        setIsVisible(false);
    }

    const data={
        open:(data)=>open(data),
        close:()=>close()
    }

    return( 
        <ModalContext.Provider value={data}>
            {isVisible && 
                <Modal
                    title={modalData?.title}
                    open={isVisible}
                    onCancel={() => close()}
                    maskClosable={false}
                    footer={[]}
                    centered={true}
                >
                    {modalData?.content}
                </Modal>
            }
            {children}
        </ModalContext.Provider>
    )
}

export const useModal=()=>useContext(ModalContext)

export default ModalProvider;