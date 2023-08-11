import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  
  const [adduser, setAddUser] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setAddUser((prevUser) => {
      return [
        ...prevUser,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  };

  return (
    <div className="App">
        <AddUser onAddUser={addUserHandler} />
        <UserList users={adduser} />
      </div>
   
  );
}

export default App;
