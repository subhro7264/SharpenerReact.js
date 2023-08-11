import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUserName, setEnterUserNmae] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please Enter a valid name and Age",
      });
      return;
    }

    if (+enterAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please Enter a valid Age(> 0)",
      });
      return;
    }
    props.onAddUser(enterUserName, enterAge);

    setEnterUserNmae("");
    setEnterAge(" ");
  };

  const usernameChangeHandler = (e) => {
    setEnterUserNmae(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnterAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enterUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enterAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
