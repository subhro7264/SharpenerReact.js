import React from "react";

const productDetails = (props) => {
  // const [filterTable, setFilterTable]=useState("Table1");
  // const filterTableHandler=(selectedTable)=>{
  //     setFilterTable(selectedTable)
  // }
  const deleteDish = (props) => {
    localStorage.removeItem(props.items.id);
  };

  return (
    <React.Fragment>
      {/* {props.items.map((bill) => (
        <div>
          dishName={bill.dishName}
          disPrice={bill.dishPrice}
          table={bill.table}
         
        </div>
       
      ))} */}
      <div>
        <h1>Bill</h1>
        <h3>Table1</h3>
        {props.items.map((bill) => {
          if (bill === "table1") {
            <div>
              {bill.dishName}
              {bill.dishPrice}
              <button onClick={deleteDish}>Delete</button>
            </div>;
          }
        })}
      </div>
      <div>
        <h3>Table2</h3>
        {props.items.map((bill) => {
          if (bill === "table2") {
            <div>
              {bill.dishName}
              {bill.dishPrice}
              <button onClick={deleteDish}>Delete</button>
            </div>;
          }
        })}
      </div>
      <div>
        <h3>Table3</h3>
        {props.items.map((bill) => {
          if (bill === "table3") {
            <div>
              {bill.dishName}
              {bill.dishPrice}
              <button onClick={deleteDish}>Delete</button>
            </div>;
          }
        })}
      </div>
    </React.Fragment>
  );
};
export default productDetails;
