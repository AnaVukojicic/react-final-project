import { requestInstance } from "../config/requestInstance"
import ProfileModel from "../models/ProfileModel"

class ProfileService{
    api={
        user: '/me',
        edit_user: '/v1/users',
        edit_image: '/v1/change-profile-photo'
    }

    getUserInfo(){
        return requestInstance.post(this.api.user)
            .then(res=>new ProfileModel(res?.data))
            .catch(err=>Promise.reject(err))
    }

    editUser(data){
        const formData={
            "name":data?.name,
            "email":data?.email,
            "password":data?.password
        }
        return requestInstance.put(`${this.api.edit_user}/${data?.id}`,formData)
            .then(res=>{console.log(res?.data);return new ProfileModel(res?.data)})
            .catch(err=>Promise.reject(err))
    }

    editImage(image){
        const formData={
            "photo":image
        }
        return requestInstance.post(this.api.edit_image,formData,{
            headers: {
                "content-type": "multipart/form-data",
            }
        })
            .then(res=>new ProfileModel(res?.data?.data))
            .catch(err=>Promise.reject(err))
    }

}

export const profileService=new ProfileService()