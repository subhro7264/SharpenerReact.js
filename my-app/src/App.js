import logo from "./logo.svg";
import "./App.css";
// import ExpenseItem from "./component/ExpenseItem";
import React from 'react';
import Expenses from './component/Expenses/Expenses';


const App=()=> {
  const expenses = [
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
      location: "near home tv house",
      ammount: 1200,
      date: new Date(2021, 8, 11),
    },
    {
      id: "e3",
      title: "Car Insurance",
      location: "New town car center",
      ammount: 294.67,
      date: new Date(2019, 5, 27),
    },
    {
      id: "e4",
      title: "Eductaion",
      location: "Oxford University",
      ammount: 200,
      date: new Date(2018, 7, 2),
    },
  ];
  return (
    <div className="App">
    <div className="app-body">
    <h1>Expense Item!</h1>
    <Expenses items={expenses} />
    </div>
    </div>
  );
}

export default App;
