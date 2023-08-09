import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterYear, SetFilterYear] = useState("2020");

  const filterYearHandler = (selectedYear) => {
    SetFilterYear(selectedYear);
  };


const filterExpense=props.items.filter((expense)=>{
  return expense.date.getFullYear().toString()===filterYear;


})


  return (
    <Card classNmae="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterYearHandler} />
      {filterExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
export default Expenses;
