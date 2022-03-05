const UserList = ({userList}) => {

    const usersList = userList.map((user, index) => (
      <tr key={index}>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
      </tr>
    ));
  
    const table = (
      <table className='table table-bordered'>
        User Info
          <tr>
            <td>Username : </td>
            <td>E-mail : </td>
            <td>Password : </td>
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