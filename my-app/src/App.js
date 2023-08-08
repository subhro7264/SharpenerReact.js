import logo from "./logo.svg";
import "./App.css";
// import ExpenseItem from "./component/ExpenseItem";
import React,{useState} from 'react';
import NewExpense from "./component/NewExpense/NewExpense";
import Expenses from './component/Expenses/Expenses';
// import ExpenseForm from "./component/Expenses/ExpenseForm";



const App=()=> {
  const Dummy_Expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      location: "mall",
      ammount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New Tv",
      ammount: 1200,
      date: new Date(2021, 8, 11),
    },
    {
      id: "e3",
      title: "Car Insurance",
      ammount: 294.67,
      date: new Date(2019, 5, 27),
    },
    {
      id: "e4",
      title: "Eductaion",
      ammount: 200,
      date: new Date(2018, 7, 15),
    },
  ];
  const [expenses,setExpense]=useState(Dummy_Expenses)
  const addExpenseHandler=(expense)=>{
    setExpense(prevExpense => {
      return [expense,...prevExpense]
    })
  }
  return (
    <div className="App">
    <div className="app-body">
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
   
    
    </div>
    </div>
  );
}

export default App;
