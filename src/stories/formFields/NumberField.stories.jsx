import React from "react";
import { useForm } from "react-hook-form";
import NumberField from "../../components/formFields/numberField/NumberField";

export default {
    title:"Form/Number field",
    component:NumberField,
    argTypes:{
        step:{control:{
            type:'number',step:0.01
        }}
    }
}

const Template=(args)=>{
    const {control}=useForm();
    return <NumberField {...args} control={control}/>;
}

export const Default = Template.bind({});
Default.args={
    placeholder:"Number field",
    error:"",
    name:"",
    label:"",
    step:0.01
}