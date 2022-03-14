const UserList = ({userList}) => {

    const usersList = userList.map((user, index) => (
      <tr key={index}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.about}</td>
      </tr>
    ));
  
    const table = (
      <table className='table table-bordered'>
        User Info
          <tr>
            <td>Firstname : </td>
            <td>Lastname : </td>
            <td>E-mail : </td>
            <td>Password : </td>
            <td>About </td>
          </tr>
        <tbody>{usersList}</tbody>
      </table>
    );
    return (
      <div className='col-lg-8'>
        {table}
      </div>
    );
  };
  
  export default UserList;