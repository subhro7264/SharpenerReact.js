import React from 'react';
import './ExpenseDetails.css';

const ExpenseDetails=(props)=>{
    return(
        <div className=" expense_details flex">
        <div className="expense_title">{props.title}</div>
        <div className="Location_Of_Expenditure">{props.location}</div>
        <div className="expense_ammount ">${props.ammount}</div>
        </div>
    )
}
export default ExpenseDetails;