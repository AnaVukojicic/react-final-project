import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../components/formFields/textField/TextField";

export default {
    title:"Form/Text field",
    component:TextField,
}

const Template=(args)=>{
    const {control}=useForm();
    return <TextField {...args} control={control}/>;
}

export const Default = Template.bind({});
Default.args={
    placeholder:"",
    error:"",
    name:"",
    label:"Text field",
    rows:3
}