import React from "react";
import { useForm } from "react-hook-form";
import PasswordField from "../../components/formFields/passwordField/PasswordField";

export default {
    title:"Form/Password field",
    component:PasswordField,
}

const Template=(args)=>{
    const {control}=useForm();
    return <PasswordField {...args} control={control}/>;
}

export const Default = Template.bind({});
Default.args={
    placeholder:"Password field",
    error:"",
    name:"",
    label:""
}