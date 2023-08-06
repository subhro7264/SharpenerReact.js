import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./component/ExpenseItem";

function App() {
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
      <h1 className="app-header"> Expense Item!</h1>

      <ExpenseItem
        title={expenses[0].title}
        location={expenses[0].location}
        ammount={expenses[0].ammount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        location={expenses[1].location}
        ammount={expenses[1].ammount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        location={expenses[2].location}
        ammount={expenses[2].ammount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        location={expenses[3].location}
        ammount={expenses[3].ammount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
