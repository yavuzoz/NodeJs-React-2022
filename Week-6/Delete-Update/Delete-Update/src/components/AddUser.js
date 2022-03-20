import React from "react";
import { useState } from "react";

const AddUser = () => {
  const [newPerson, setNewPerson] = useState([])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/employee', {
      method: 'POST',
      body: JSON.stringify( newPerson ),
      headers: { 'Content-Type': 'application/json' },
    })
    
  };
  
  return (
    <div className="'col-lg-4'">
      <form className="form w-25" onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            aria-label="Name"
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Enter Firstname"
            onChange={e => setNewPerson({...newPerson, firstName: e.target.value })}
            aria-required="true"
          />
        </div>
        <div class="form-group">
          <input
            aria-label="Last-Name"
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter Lastname"
            onChange={e => setNewPerson({ ...newPerson, lastName: e.target.value })}
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
            onChange={e => setNewPerson({ ...newPerson, email: e.target.value })}
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
            onChange={e => setNewPerson({ ...newPerson, password: e.target.value })}
            aria-required="true"
          />
        </div>
        <div class="form-group">
          <input
            aria-label="About"
            type="text"
            className="form-control"
            rows={3}
            id="about"
            placeholder="About"
            onChange={e => setNewPerson({ ...newPerson, about: e.target.value })}
            aria-required="true"
          />
        </div>
        <div class="form-group m-4">
          <button type="submit" class="btn btn-primary" >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;