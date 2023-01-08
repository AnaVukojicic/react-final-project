import React from "react";
import { useForm } from "react-hook-form";
import FileField from "../../components/formFields/fileField/FileField";

export default {
    title:"Form/File field",
    component:FileField,
}

const Template=(args)=>{
    const {control}=useForm();
    return <FileField {...args} control={control}/>;
}

export const Default = Template.bind({});
Default.args={
    error:"",
    name:"",
    label:""
}