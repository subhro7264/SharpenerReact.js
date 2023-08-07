import './ExpenseDate.css';

const ExpenseDate=(props) =>{
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense_Date ">
      <div className="expense_date">{day}</div>
      <div className="expense_month"> {month}</div>
      <div className="expense_year">{year}</div>
    </div>
  );
}
export default ExpenseDate;
