import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storageKeys } from "../config/config";
import { profileService } from "../services/ProfileService";
import { storageService } from "../services/StorageService";
import { setTranslations,setDefaultLanguage, setLanguage } from "react-switch-lang";
import en from '../languages/en.json';
import me from '../languages/me.json';

setTranslations({en,me})
setDefaultLanguage(storageService.exists(storageKeys.LANG) ? storageService.get(storageKeys.LANG) : 'me');

const UserContext=createContext();

const UserProvider=({children})=>{
    const navigate=useNavigate();
    const [userData,setUserData]=useState(null);
    const [refreshLanguage, setRefreshLanguage] = useState(0);

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
        if(!storageService.exists(storageKeys.LANG)){
            storageService.set(storageKeys.LANG,'me')
        }
    },[])

    const data={
        userData: userData,
        setUserData: (data)=>setUserData(data),
        setLanguage: (data)=>{
            setLanguage(data);
            setRefreshLanguage(prevState=>prevState+1)
            storageService.set(storageKeys.LANG,data)
        }
    }

    return(
        <UserContext.Provider key={refreshLanguage} value={data}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser=()=>useContext(UserContext);

export default UserProvider;