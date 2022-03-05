import React from "react";
import { useState } from "react";

const AddUser = ({ addUser }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName,
      email,
      password,
    };
    addUser(newUser);
    clearInputs();
  };

  const clearInputs = () => {
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="'col-lg-4'">
      <form className="form w-25">
        <div class="form-group">
          <input
            type="text"
            class="form-control m-3"
            id="username"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control m-3"
            id="e-mail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control m-3"
            id="inputPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control m-3"
            id="inputPassword4"
            placeholder="Password repeat"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="form-group m-4">
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
