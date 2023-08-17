import './OrderForm.css'


import React, { useRef } from "react";


const OrderForm = (props) => {
  const idHandler = useRef();
  const priceHandler = useRef();
  const dishHandler = useRef();
  const tableHandler = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const id = idHandler.current.value;
    const price = priceHandler.current.value;
    const dish = dishHandler.current.value;
    const table = tableHandler.current.value;
    const myOrder = {
      id: id,
      price: price,
      dishName: dish,
      table: table,
    };

    const myOrderString = JSON.stringify(myOrder);
    localStorage.setItem(myOrder.id, myOrderString);
    props.onAddOrder(JSON.parse(myOrderString));
    idHandler.current.value = "";
    priceHandler.current.value = "";
    dishHandler.current.value = "";
    tableHandler.current.value = "";
  };

  return (
    <React.Fragment>
      <div className="form">
      <form onSubmit={formSubmitHandler}>
        <div className="orderId">
          <label htmlFor="id">  Order Id   </label>
          <input type="number" id="id" ref={idHandler} />
        </div>

        <div className="orderPrice">
          <label htmlFor="price">Order Price </label>
          <input type="number" id="price" ref={priceHandler} />
        </div>

        <div className="chooseDish">
          <label htmlFor="dish">Choose Dish  </label>
          <input type="text" id="Dish" ref={dishHandler} />
        </div>

        <div className="table">
          <label htmlFor="table0">Choose a Table</label>
          <select id="table0" ref={tableHandler}>
            <option value="table1">table1</option>
            <option value="table2">table2</option>
            <option value="table3">table3</option>
          </select>
        </div>

        <button className='button' type="submit">Add Bill</button>
      </form>
      </div>
    </React.Fragment>
  );
};
export default OrderForm;
