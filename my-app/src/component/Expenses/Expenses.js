import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterYear, SetFilterYear] = useState("2020");

  const filterYearHandler = (selectedYear) => {
    SetFilterYear(selectedYear);
  };


const filterExpense=props.items.filter((expense)=>{
  return expense.date.getFullYear().toString()===filterYear;


})

// let expoenseContent=<p>No Expense Found</p>;
// if(filterExpense.length>0){
//   expoenseContent=filterExpense.map((expense) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))

// };
// if(filterExpense.length>=1){
//   expoenseContent=filterExpense.map((expense) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//     + <p>"Only single Expense here. Please add more..."</p>
//   ))
  
// }

  return (
    <Card classNmae="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterYearHandler} />

       <ExpenseChart expenses={filterExpense}/>
 
       {/* {filterExpense.length===0 && <p>No Expense Found</p> }
     
      {filterExpense.length >0  && filterExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} 
       {filterExpense.length===1 && <p>"Only single Expense here. Please add more..."</p> }
      {expoenseContent} \ */}
     <ExpenseList items={filterExpense} />
    </Card>
  );
};
export default Expenses;
