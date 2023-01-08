import React from "react";
import TransactionCard from "../../components/transactionCard/TransactionCard";

export default {
    title:"Cards/Transaction card",
    component:TransactionCard,
    argTypes:{
        amount:{
            control:{type:'number',min:'0',step:'0.01'}
        }
    }
}

const Template=(args)=><TransactionCard {...args}/>;

export const Default = Template.bind({});
Default.args={
    title:"Card title",
    amount:"0.00",
    type:"total"
}