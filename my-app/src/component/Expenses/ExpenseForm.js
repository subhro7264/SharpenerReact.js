import React from "react";

const ExpenseForm = () => {
  const handleChangeTitle = (event) => {
    console.log(event.target.value);
  };
const handleChangeAmount=(event)=>{
    console.log(event.target.value);
}
const handleChangeDate=(event)=>{
    console.log(event.target.value);
}
  return (
    <div className="ExpenseForm ">
      <form action="#">
        <label >Expense_title</label>
        <input
          type="text" onChange={handleChangeTitle} placeholder=" Expense title"/>
        <br />
        <label >Expense_Amount</label>
        <input type="number" onChange={handleChangeAmount} placeholder=" Expense Amount"/>
        <br />
        <label>Expense_Date</label>
        <input type="date" onChange={handleChangeDate} placeholder=" Expense Date"/>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ExpenseForm;
