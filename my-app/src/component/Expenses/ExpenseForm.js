import React,{useState} from "react";

const ExpenseForm = () => {
    const[enterTitle, setEnterTitle]=useState('');
    const[enterAmount, setEnterAmount]=useState('');
    const[enterDate, setEnterDate]=useState('');
    const handleChangeTitle = (event) => {
    setEnterTitle(event.target.value);
  };
const handleChangeAmount=(event)=>{
    setEnterAmount(event.target.value);
}
const handleChangeDate=(event)=>{
    setEnterDate(event.target.value);
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
