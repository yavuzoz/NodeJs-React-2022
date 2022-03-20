const UserList = ({
  id,
  name,
  lastname,
  email,
  password,
  about,
  deleteData,
}) => {
  const handleDelete=()=>{
    deleteData(id)
  }
  return (
    
    <table className="table table-bordered">
      User Info
      <tr>
        <td>Firstname : </td>
        <td>Lastname : </td>
        <td>E-mail : </td>
        <td>Password : </td>
        <td>About </td>
      </tr>
      <tbody>{UserList}</tbody>
      <tr key={id}>
        <td>{name} </td>
        <td>{lastname} </td>
        <td>{email} </td>
        <td>{password} </td>
        <td>{about} </td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    </table>
  );
  return <div className="col-lg-8">{table}</div>;
};

export default UserList;
