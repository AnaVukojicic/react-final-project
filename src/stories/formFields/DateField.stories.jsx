import React from "react";
import { useForm } from "react-hook-form";
import DateField from "../../components/formFields/dateField/DateField";

export default {
    title:"Form/Date field",
    component:DateField,
}

const Template=(args)=>{
    const {control}=useForm();
    return <DateField {...args} control={control}/>;
}

export const Default = Template.bind({});
Default.args={
    placeholder:"Date field",
    error:"",
    name:"",
    label:"",
    bordered:false
}