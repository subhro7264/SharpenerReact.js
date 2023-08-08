import React from 'react';
import './ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseDate=(props) =>{
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <Card className="expense_Date Card">
        <div className="expense-date__year ">{year}</div>
        <div className="expense-date__month "> {month}</div>
      <div className="expense-date__day ">{day}</div>
    
    
    </Card>
  );
}
export default ExpenseDate;

