import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storageKeys } from "../config/config";
import { profileService } from "../services/ProfileService";
import { storageService } from "../services/StorageService";

const UserContext=createContext();

const UserProvider=({children})=>{
    const navigate=useNavigate();
    const [userData,setUserData]=useState(null);
    
    useEffect(()=>{
        if(storageService.exists(storageKeys.TOKEN)){
            profileService.getUserInfo()
                .then(res=>setUserData(res))
                .catch(err=>{
                    navigate('/login')
                })
        }else{
            navigate('/login')
        }
    },[navigate])

    const data={
        userData: userData,
        setUserData: (data)=>setUserData(data)
    }

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser=()=>useContext(UserContext);

export default UserProvider;