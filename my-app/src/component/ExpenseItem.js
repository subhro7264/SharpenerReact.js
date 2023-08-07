import "./ExpenseItem.css";

function ExpenseItem(props) {
 
  return (
    <div className="header ">
  
      <div className=" expense_details flex">
       <div className="expense_Date">{props.date.toISOString()}</div>
       <div className="expense_title">{props.title}</div>
       <div className="Location_Of_Expenditure">{props.location}</div>
        <div className="expense_ammount flex">${props.ammount}</div> 
      </div>
    </div>
  );
}
export default ExpenseItem;
