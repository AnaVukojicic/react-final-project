import axios from "axios";
import {storageService} from '../services/StorageService';
import { storageKeys } from "./config";

export const requestInstance=axios.create();

requestInstance.defaults.baseURL='https://expense-tracker.amplitudo.me/api';
requestInstance.defaults.headers['Accept'] ='application/json';
requestInstance.interceptors.request.use(
    async (config)=>{
        config.headers.Authorization=storageService.exists(storageKeys.TOKEN) ?
            `Bearer ${storageService.get(storageKeys.TOKEN)}` 
            : 'undefined';
        return config;
    },
    (error)=>{
        Promise.reject(error)
    }
)