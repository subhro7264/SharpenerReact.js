import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterYear, SetFilterYear] = useState("2023");

  const filterYearHandler = (selectedYear) => {
    SetFilterYear(selectedYear);
  };
  return (
    <Card classNmae="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterYearHandler} />
      {props.items.map((expense) => (
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
