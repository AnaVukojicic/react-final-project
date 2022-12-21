import { baseURL } from "../config/config";

class ProfileModel{
    constructor(data){
        this.id=data?.id;
        this.name=data?.name;
        this.email=data.email;
        this.profilePhoto=data?.profile_photo;
        this.profilePhotoPath=data?.profile_photo_path;
    }

    getProfilePhoto(){
        return `${baseURL}/storage/${this.profilePhoto}`;
    }
}

export default ProfileModel;