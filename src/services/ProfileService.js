import { requestInstance } from "../config/requestInstance"
import ProfileModel from "../models/ProfileModel"

class ProfileService{
    api={
        user: '/me',
        edit_user: '/v1/users'
    }

    getUserInfo(){
        return requestInstance.post(this.api.user)
            .then(res=>new ProfileModel(res?.data))
            .catch(err=>Promise.reject(err))
    }

    editUser(data){
        const formData={
            "name":data?.name,
            "password":data?.password
        }
        return requestInstance.put(`${this.api.edit_user}/${data?.id}`,formData)
            .then(res=>{console.log(res?.data);return new ProfileModel(res?.data)})
            .catch(err=>Promise.reject(err))
    }

}

export const profileService=new ProfileService()