import React from "react";
import { useState, useEffect } from "react";

const AddUser = ({ addUser }) => {
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [passMatch, setPassMatch] = useState(true);

  useEffect(() => {
    validatePassword();
  }, [state]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validatePassword = () => {
    state.password === state.cPassword
      ? setPassMatch(true)
      : setPassMatch(false);
  };

 
  const createAccount = (e) => {
    e.preventDefault();
    validatePassword();
    addUser(state)
    
  };

  return (
    <div className="'col-lg-4'">
      <form className="form w-25">
        <div class="form-group">
          <input
            aria-label="Name"
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter Username"
            value={state.userName}
            onChange={handleChange}
            aria-required="true"
          />
        </div>
        <div class="form-group">
          <input
            aria-label="Email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
            aria-required="true"
          />
        </div>
        <div class="form-group">
          <input
            aria-label="Password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            aria-required="true"
          />
        </div>
        <div class="form-group">
          <input
            aria-label="Confirm Password"
            type="password"
            className={`form-control ${passMatch ? "" : "input-error-border"}`}
            id="cPassword"
            placeholder="Confirm Password"
            value={state.cPassword}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={passMatch ? true : false}
          />
        </div>
        <div class="form-group m-4">
          <button type="submit" class="btn btn-primary" onClick={createAccount}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
