import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem=(props) =>{
  const deleteExpenseBtn=()=>{
    console.log('Clicked!!!!!....................................................')
  }
  
  return (
    <>
    <Card className="expense-item flex delete">
      <ExpenseDate date={props.date} />

      <ExpenseDetails className="delete"
        title={props.title}
        location={props.location}
        ammount={props.ammount}
      />
      <button onClick={deleteExpenseBtn}>Delete</button>
    </Card>
    
    </>
  );
}
export default ExpenseItem;
