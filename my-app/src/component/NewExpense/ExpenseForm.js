import React, { useState } from "react";
import './ExpenseForm.css';



const ExpenseForm = (props) => {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");
  //   const [userInput,setUserInput]=useState({
  //  enterdTitle:'',
  //  enterdAmount:'',
  //    enterdDate:''
  // })

  const TitleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    //    setUserInput({ ...userInput, enterdTitle: event.target.value});
    // setUserInput((prevState)={
    //     return{
    // // ...prevState, enterdTitle: event.target.value
    // // }
    //     })
  };


  const AmountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput({ ...userInput, enterdAmount: event.target.value});
  };


  const DateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    //  setUserDate({ ...userInput, enterdAmount: event.target.value});
  };



  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.saveExpenseData(expenseData);
   console.log(expenseData);

    setEnterTitle(" ");
    setEnterAmount(" ");
    setEnterDate(" ");
  };


  return (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={TitleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value ={enteredAmount} onChange={AmountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date"   value={enteredDate} onChange={DateChangeHandler} />
        </div>
    </div>
    <div className="new-expense__actions">
    <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
    </div>
    </form>
  )
};
export default ExpenseForm;
