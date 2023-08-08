import React,{useState} from "react";

const ExpenseForm = () => {
    const[enterTitle, setEnterTitle]=useState('');
    const[enterAmount, setEnterAmount]=useState('');
    const[enterDate, setEnterDate]=useState('');
//     const [userInput,setUserInput]=useState({
//  enterdTitle:'',
//  enterdAmount:'',
//    enterdDate:''
// })

    const handleChangeTitle = (event) => {
    setEnterTitle(event.target.value);
    
//    setUserInput({ ...userInput, enterdTitle: event.target.value});
// setUserInput((prevState)={
//     return{
// // ...prevState, enterdTitle: event.target.value
// // }
//     })


  };
const handleChangeAmount=(event)=>{
    setEnterAmount(event.target.value);


    // setUserInput({ ...userInput, enterdAmount: event.target.value});
}
const handleChangeDate=(event)=>{
    setEnterDate(event.target.value);

//  setUserDate({ ...userInput, enterdAmount: event.target.value});

}


const submithandler=(e)=>{
e.preventDefault();
const expenseData={
    title:enterTitle,
    amount:enterAmount,
    date: new Date(enterDate)
}
console.log(expenseData);
}
  return (
    <div className="ExpenseForm ">
      <form onSubmit={submithandler} >
        <label >Expense_title</label>
        <input
          type="text" onChange={handleChangeTitle} placeholder=" Expense title"/>
        <br />
        <label >Expense_Amount</label>
        <input type="number" onChange={handleChangeAmount} placeholder=" Expense Amount"/>
        <br />
        <label>Expense_Date</label>
        <input type="date" onChange={handleChangeDate} placeholder=" Expense Date"/>
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ExpenseForm;
