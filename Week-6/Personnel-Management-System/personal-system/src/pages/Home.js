import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersStart, deleteUsersStart } from "../redux/actions";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);
  
  if(loading){
    return (
      <MDBSpinner style={{marginTop:"150px"}} role="status">
         <span className="="visually-hidden>Loading...</span>
      </MDBSpinner>
    )
  }
  const handleDelete = (id) => {
    if(window.confirm("are you sure...?")) {
      dispatch(deleteUsersStart(id));
      toast.success("user deleted..");
    }
  };
  return (
    <div className=" container" style={{ marginTop: "150px" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">No </th>
            <th scope="col">Name </th>
            <th scope="col">Last Name </th>
            <th scope="col">Email </th>
            <th scope="col">Password </th>
            <th scope="col"> About</th>
            <th scope="col"> Actions</th>
          </tr>
        </MDBTableHead>
        {users.map((item, index) => (
          <MDBTableBody key={index}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.about}</td>
              <td>
                <MDBBtn
                  className="m-1"
                  tag="a"
                  color="none"
                  onClick={() => handleDelete(item.id)}
                >
                  <MDBTooltip title="Delete" tag="a">
                    <MDBIcon
                      fas
                      icon="trash"
                      stayle={{ color: "#dd4b39" }}
                      size="lg"
                    />
                  </MDBTooltip>
                </MDBBtn>{" "}
                <Link to={`/editUser/${item.id}`}>
                  <MDBTooltip title="Edit" tag="a">
                    <MDBIcon
                      fas
                      icon="pen"
                      stayle={{ color: "#55acee", marginBottom: "10px" }}
                      size="lg"
                    />
                  </MDBTooltip>
                </Link>{" "}
                <Link to={`/userInfo/${item.id}`}>
                  <MDBTooltip title="View" tag="a">
                    <MDBIcon
                      fas
                      icon="eye"
                      stayle={{ color: "#3b5998", marginBottom: "10px" }}
                      size="lg"
                    />
                  </MDBTooltip>
                </Link>
              </td>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
    </div>
  );
};

export default Home;
