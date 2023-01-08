import React from "react";
import { useForm } from "react-hook-form";
import SelectField from "../../components/formFields/selectField/SelectField";

export default {
    title:"Form/Select field",
    component:SelectField,
    argTypes:{
        options:{control:'array'}
    }
}

const Template=(args)=>{
    const {control}=useForm();
    return <SelectField {...args} control={control}/>;
}

export const DefaultColored = Template.bind({});
DefaultColored.args={
    placeholder:"Select field",
    options:[
        {value:'#Example 1',label:'example1'},
    ],
    error:"",
    name:"",
    label:"",
    multiple:false,
    bordered:false
}