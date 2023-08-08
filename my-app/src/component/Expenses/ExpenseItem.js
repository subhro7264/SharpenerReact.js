import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [ammount, setAmmount] = useState(props.ammount);
  const deleteExpenseBtn = () => {
    setAmmount(100);
  };

  return (
    <>
      <Card className="expense-item ">
        <ExpenseDate date={props.date} />

        <ExpenseDetails
          title={props.title}
          ammount={ammount}
        />
       
        <button onClick={deleteExpenseBtn}>Change</button>
      </Card>
    </>
  );
};
export default ExpenseItem
