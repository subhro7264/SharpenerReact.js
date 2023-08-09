import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [amount, setAmmount] = useState(props.amount);
  // const deleteExpenseBtn = () => {
  //   setAmmount(100);
  // };
  

  return (
    <>
      <Card className="expense-item ">
        <ExpenseDate date={props.date} />

        <ExpenseDetails
          title={props.title}
          amount={props.amount}
        //  amount={amount}
        />
       
        {/* <button onClick={deleteExpenseBtn}>Change</button> */}
      </Card>
    </>
  );
};
export default ExpenseItem
