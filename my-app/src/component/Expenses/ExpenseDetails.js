import React from 'react';
import './ExpenseDetails.css';

const ExpenseDetails=(props)=>{
    return(
        <div className=" expense-item">
        <div className="expense-item__description"><h2>{props.title}</h2></div>
        <div className="expense-item__price ">${props.ammount}</div>
        </div>
    )
}
export default ExpenseDetails;