import React from 'react';
import classes from './OptionButtons.module.scss';
import DeleteIcon from '../../../images/DeleteIcon.svg';
import EditIcon from '../../../images/Editicon.svg';
import PropTypes from 'prop-types';

const OptionButtons=({handleEdit,handleDelete})=>{
    return(
        <div className={classes['container']}>
            <button type='button' onClick={handleEdit}><img src={EditIcon} alt=''/></button>
            <button type='button' onClick={handleDelete}><img src={DeleteIcon} alt=''/></button>
        </div>
    )
}

OptionButtons.propTypes={
    handleEdit:PropTypes.func.isRequired,
    handleDelete:PropTypes.func.isRequired
}

export default OptionButtons;