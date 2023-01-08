import React from "react";
import FormButton from "../../components/buttons/formButton/FormButton";

export default {
    title:"Buttons/Form button",
    component:FormButton,
    argTypes:{
        backgroundColor:{control:'color'},
        color:{control:'color'}
    }
}

const Template=(args)=><FormButton {...args}/>;

export const Default = Template.bind({});
Default.args={
    label:"Log in",
    backgroundColor:"#84C57A",
    color:"#FFFFFF",
    type:"submit"
}