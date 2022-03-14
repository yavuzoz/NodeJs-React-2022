import React, { useState, useEffect } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const App = () => {
  const [person, setPerson] = useState([]);

  const APP_URL = `http://localhost:8000/employee`;

  useEffect(() => {
    loadData();
  },[]);

  const loadData = async () => {
    const response = await fetch(APP_URL);
    const data = await response.json();
    setPerson(data);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5">
          <AddUser />
          <UserList userList={person} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
