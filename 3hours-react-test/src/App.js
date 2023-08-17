import React, { useState } from "react";
import OrderForm from "./components/OrderForm/OrderForm";
import OrderList from "./components/OrderList/OrderList";
import "./App.css";

function App() {
  const [orderTable, setOrderTable] = useState([]);
  const orderHandler = (order) => {
    setOrderTable((perOrder) => {
      return [order, ...perOrder];
    });
  };

  return (
    <div >
      <div className="App" >
        {" "}
        <div className="App-header">
          <OrderForm onAddOrder={orderHandler} />
          <OrderList setOrders={setOrderTable} orders={orderTable} />
        </div>
      </div>
    </div>
  );
}

export default App;
