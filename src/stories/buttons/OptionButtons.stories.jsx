import React from "react";
import OptionButtons from "../../components/buttons/optionButtons/OptionButtons";

export default {
    title:"Buttons/Option buttons",
    component:OptionButtons
}

const Template=(args)=><OptionButtons {...args}/>;

export const Default = Template.bind({});
Default.args={
    handleEdit:()=>{},
    handleDelete:()=>{}
}