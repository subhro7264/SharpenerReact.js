import React, { useState } from "react";

const Input = (props) => {
  const [productID, setProductID] = useState("");
  const [sellingProduct, setSellingProduct] = useState("");
  const [productName, setProductName] = useState("");
  const [filterProduct, setFilterProduct] = useState("");

  const productIDHandler = (e) => {
    setProductID(e.target.value);
  };
  const sellingProductHandler = (e) => {
    setSellingProduct(e.target.value);
  };

  const productNameHandler = (e) => {
    setProductName(e.target.value);
  };
  const dropDownHandler = (e) => {
    setFilterProduct(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const productDetails = {
      id: productID,
      dishPrice: sellingProduct,
      dishName: productName,
      table: filterProduct
    };
    props.onAddProduct(productDetails);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <label htmlFor="ID">Order ID: </label>
        <input type="number" id="ID" onChange={productIDHandler} />

        <label htmlFor="sellingPrice">Dish Price: </label>
        <input
          type="number"
          id="sellingPrice"
          onChange={sellingProductHandler}
        />

        <label htmlFor="productName">Dish Name: </label>
        <input type="text" id="productName" onChange={productNameHandler} />

        <select onChange={dropDownHandler}>
          <option value="Table1">Table1</option>
          <option value="Table2">Table2</option>
          <option value="Table3">Table3</option>
        </select>

        <button type="submit"> Add Bill</button>
      </form>
    </React.Fragment>
  );
};
export default Input;
