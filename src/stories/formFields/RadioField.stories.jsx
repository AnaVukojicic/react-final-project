import React from "react";
import { useForm } from "react-hook-form";
import RadioField from "../../components/formFields/radioField/RadioField";

export default {
    title:"Form/Radio field",
    component:RadioField,
    argTypes:{
        options:{control:'array'}
    }
}

const Template=(args)=>{
    const {control}=useForm();
    return <RadioField {...args} control={control}/>;
}

export const DefaultColored = Template.bind({});
DefaultColored.args={
    options:[
        {value:'#258FDC',label:'#258FDC'},
    ],
    error:"",
    name:"",
    label:""
}