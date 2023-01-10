import { baseURL } from "../config/config";

class ProfileModel{
    constructor(data){
        this.id=data?.id;
        this.name=data?.name;
        this.email=data?.email;
        this.profilePhoto=data?.profile_photo;
        this.profilePhotoPath=data?.profile_photo_path;
        this.password=data?.password
    }

    getProfilePhoto(){
        if(this?.profilePhoto.includes('img')){
            return this.profilePhotoPath
        }
        else{
            return `${baseURL}/storage/${this.profilePhoto}`;
        }
    }
}

export default ProfileModel;