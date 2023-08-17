
import './OrderList.css';



const TableList = (props) => {
  const orderDeleteHandler = (orderId) => {
    localStorage.removeItem(orderId);
    props.setOrders((prevOrder) => prevOrder.filter((order) => order.id !== orderId));
};


  const table1 = props.orders.filter((order) => {
    return order.table === "table1";
  });
  const table2 = props.orders.filter((order) => {
    return order.table === "table2";
  });
  const table3 = props.orders.filter((order) => {
    return order.table === "table3";
  });

  return (
    <div>
       <h1>Orders</h1>
      <ul className='List'>
        <h2>Table 1</h2>
        {table1.map((order) => (
          <li key={order.id}>
            {`${order.price} - ${order.table} - ${order.dishName}`}
            <button onClick={() => orderDeleteHandler(order.id)}>Delete Order</button>
          </li>
        ))}
      </ul>
      <ul className='List'>
        <h2>Table 2</h2>
        {table2.map((order) => (
          <li key={order.id}>
            {`${order.price} - ${order.table} - ${order.dishName}`}
            <button onClick={() => orderDeleteHandler(order.id)}>Delete Order</button>
          </li>
        ))}
      </ul>
      <ul className='List'>
        <h2>Table 3</h2>
        {table3.map((order) => (
          <li key={order.id}>
            {`${order.price} - ${order.table} - ${order.dishName}`}
            <button onClick={() => orderDeleteHandler(order.id)}>Delete Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;
