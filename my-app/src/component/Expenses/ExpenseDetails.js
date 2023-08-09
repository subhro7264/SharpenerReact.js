import React from 'react';
import './ExpenseDetails.css';
// import ExpenseDate from './ExpenseDate';

const ExpenseDetails=(props)=>{
    return(
        <>
        <div className=" expense-item">
             
        <div className="expense-item__description"><h2>{props.title}</h2></div>
        <div className="expense-item__price "> <h2>${props.amount}</h2></div>
        </div>
        </>
    )
}
export default ExpenseDetails