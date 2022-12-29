import clsx from "clsx";
import React from "react";
import classes from './TransactionCard.module.scss';
import PropTypes from 'prop-types';

const TransactionCard=({title,amount,type='total'})=>{
    return(
        <div className={classes['container']}>
            <h6 className={classes['title']}>{title}</h6>
            <h3 className={clsx(classes['amount'],classes[`color-${type}`])}>
                {type==='expense' ? `-${amount}`
                    : (type==='profit' ? `+${amount}`
                        : amount    
                    )
                }
            </h3>
        </div>
    );
}

TransactionCard.propTypes={
    title:PropTypes.string,
    amount:PropTypes.string,
    type:PropTypes.oneOf(['expense','profit','total']).isRequired
}

export default TransactionCard;