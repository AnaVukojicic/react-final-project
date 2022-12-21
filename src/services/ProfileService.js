import { requestInstance } from "../config/requestInstance"
import ProfileModel from "../models/ProfileModel"

class ProfileService{
    api={
        user: '/me'
    }

    getUserInfo(){
        return requestInstance.post(this.api.user)
            .then(res=>new ProfileModel(res?.data))
            .catch(err=>Promise.reject(err))
    }

}

export const profileService=new ProfileService()