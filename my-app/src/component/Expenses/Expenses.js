import React from 'react';
import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card";


const Expenses=(props) =>{

    return(
      <Card classNmae="expenses">
        <ExpenseItem
        title={props.items[0].title}
        location={props.items[0].location}
        ammount={props.items[0].ammount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        location={props.items[1].location}
        ammount={props.items[1].ammount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        location={props.items[2].location}
        ammount={props.items[2].ammount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        location={props.items[3].location}
        ammount={props.items[3].ammount}
        date={props.items[3].date}
      ></ExpenseItem>
      </Card>
    )
}
export default Expenses;