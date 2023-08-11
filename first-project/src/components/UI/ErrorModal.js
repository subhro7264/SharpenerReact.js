import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes  from'./ErrorModal.module.css'


const ErrorModal = (props) => {
  return (
    <div>
        <div className={classes.backdrop} onClick={props.onConfirm} />
       <Card classNmae={classes.modal}>
       <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div classNmae={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button nClick={props.onConfirm}>Okey</Button>
      </footer>
    </Card>
    </div>
  );
};
export default ErrorModal;
