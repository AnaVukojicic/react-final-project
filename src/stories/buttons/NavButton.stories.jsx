import React from "react";
import NavButton from "../../components/buttons/navButton/NavButton";

export default {
    title:"Buttons/Nav button",
    component:NavButton,
    argTypes:{
        backgroundColor:{control:'color'}
    }
}

const Template=(args)=><NavButton {...args}/>;

export const Default = Template.bind({});
Default.args={
    label:"Add transaction",
    backgroundColor:"#140C6F",
}

export const WithoutText = Template.bind({});
WithoutText.args={
    label:"",
    backgroundColor:"#140C6F"
}