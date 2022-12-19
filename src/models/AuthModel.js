class AuthModel{
    constructor(data){
        this.id=data?.id;
        this.name=data?.name;
        this.email=data?.email;
        this.password=data?.password;
        this.accessToken=data?.access_token;
    }

    getAccessToken(){
        return this.accessToken;
    }
}

export default AuthModel;