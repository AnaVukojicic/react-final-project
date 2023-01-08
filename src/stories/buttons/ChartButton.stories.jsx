import React from "react";
import { useForm } from "react-hook-form";
import ChartButton from "../../components/buttons/chartButton/ChartButton";
import CheckboxField from "../../components/formFields/checkboxField/CheckboxField";

export default {
    title:"Buttons/Chart button",
    component:ChartButton,
    argTypes:{
        data:{control:'array'}
    }
}

const Template=(args)=>{
    const {control}=useForm();
    return <ChartButton {...args} control={control}/>;
}

export const Default = Template.bind({});
Default.args={
    data:[
        {label:"Example 1",value:"exampe1",onClick:()=>{}}
    ],
    label:"Choose"
}