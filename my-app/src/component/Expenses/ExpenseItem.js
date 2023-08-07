import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem=(props) =>{
  return (
    <Card className="expense-item flex">
      <ExpenseDate date={props.date} />

      <ExpenseDetails
        title={props.title}
        location={props.location}
        ammount={props.ammount}
      />
    </Card>
  );
}
export default ExpenseItem;
