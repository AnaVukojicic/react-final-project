import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/formFields/inputField/InputField";

export default {
    title:"Form/Input field",
    component:InputField
}

const Template=(args)=>{
    const {control}=useForm();
    return <InputField {...args} control={control}/>;
}

export const Default = Template.bind({});
Default.args={
    placeholder:"Default input",
    error:"",
    name:"",
    label:"",
    bordered:true,
}