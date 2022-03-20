import React, { useState, useEffect } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const App = () => {
  const [person, setPerson] = useState([]);

  const APP_URL = `http://localhost:3000/employee`;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch(APP_URL)
      .then((res) => res.json())
      .then((data) => setPerson(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteData = async (id) => {
    const resp = await fetch(`http://localhost:3000/employee/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPerson(
            person.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(person);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5">
          <AddUser />

          {person.map((user) => (
            <UserList
              id={user.id}
              key={user.id}
              name={user.firstName}
              lastname={user.lastName}
              email={user.email}
              password={user.password}
              about={user.about}
              deleteData={deleteData}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
