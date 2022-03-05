import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUser = (pUser) => {
    setUserList([...userList, pUser]);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5">
          <AddUser addUser={addUser} />
          <UserList userList={userList} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
