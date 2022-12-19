import AuthModel from "../models/AuthModel"
import {requestInstance} from '../config/requestInstance';

class AuthService{
    api={
        login: '/login',
        register: '/v1/users',
        logout: '/logout'
    }

    login(email,password){
        const formData={
            "email":email,
            "password":password
        }
        return requestInstance.post(this.api.login,formData)
            .then(res=>new AuthModel(res.data))
            .catch(err=>Promise.reject(err))
    }

    logout(){
        return requestInstance.post(this.api.logout)
            .then(res=>new AuthModel(res.data))
            .catch(err=>Promise.reject(err))
    }

    register(data){
        const formData={
            "email":data.email,
            "password":data.password,
            "name":data.name
        }
        return requestInstance.post(this.api.register,formData)
            .then(res=>console.log(res))
            .catch(err=>Promise.reject(err))
    }
}

export const authService=new AuthService();