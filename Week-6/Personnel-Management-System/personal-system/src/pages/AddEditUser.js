import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createUsersStart, updateUsersStart } from "../redux/actions";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  about: "",
};

const AddEditUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector(state => state.data);
  const { name, lastName, email, password, about } = formValue;
  const history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("id=>", typeof (id))

  useEffect(() => {
    if (id) {
      setEditMode(true)
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && lastName && email && password && about) {
      if (!editMode) {

        dispatch(createUsersStart(formValue));
        toast.success("user added ...")
        setTimeout(() => history.push("/"), 500);
      } else {
        dispatch(updateUsersStart({ id, formValue }));
        setEditMode(false);
      }
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">{!editMode ? " Add User Detail " : "Update User Detail"}</p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={name || ""}
          name="name"
          type="text"
          onChange={onInputChange}
          required
          label="Name"
          validation="please provide a name"
          onInvalid
        />
        <MDBInput
          value={lastName || ""}
          name="lastName"
          type="text"
          onChange={onInputChange}
          required
          label="LastName"
          validation="please provide a last name"
          onInvalid
        />
        <MDBInput
          value={email || ""}
          name="email"
          type="email"
          onChange={onInputChange}
          required
          label="Email"
          validation="please provide a email"
          onInvalid
        />
        <MDBInput
          value={password || ""}
          name="password"
          type="password"
          onChange={onInputChange}
          required
          label="Password"
          validation="please provide a password"
          onInvalid
        />
        <MDBInput
          value={about || ""}
          name="about"
          type="text"
          onChange={onInputChange}
          required
          label="About"
          validation="please provide about"
          onInvalid
        />
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {!editMode ? "Add" : "Update"}
          </MDBBtn>
          <MDBBtn onClick={() => history.push("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEditUser;
