import './ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseDate=(props) =>{
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <Card className="expense_Date Card">
      <div className="expense_date ">{day}</div>
      <div className="expense_month "> {month}</div>
      <div className="expense_year ">{year}</div>
    </Card>
  );
}
export default ExpenseDate;

