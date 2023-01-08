import React from "react";
import { useForm } from "react-hook-form";
import CheckboxField from "../../components/formFields/checkboxField/CheckboxField";

export default {
    title:"Form/Checkbox field",
    component:CheckboxField,
    argTypes:{
        options:{control:'array'}
    }
}

const Template=(args)=>{
    const {control}=useForm();
    return <CheckboxField {...args} control={control}/>;
}

export const Default = Template.bind({});
Default.args={
    options:[{
        label:"Example option",value:"exampe1"
    }],
    error:"",
    name:"",
    label:""
}