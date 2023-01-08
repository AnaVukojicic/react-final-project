import React from "react";
import { useForm } from "react-hook-form";
import TimeField from "../../components/formFields/timeField/TimeField";

export default {
    title:"Form/Time field",
    component:TimeField,
}

const Template=(args)=>{
    const {control}=useForm();
    return <TimeField {...args} control={control}/>;
}

export const Default = Template.bind({});
Default.args={
    placeholder:"Time field",
    error:"",
    name:"",
    label:"",
    bordered:false
}