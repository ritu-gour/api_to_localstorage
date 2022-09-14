import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function EmpInfo({ emp, handleDelete }) {
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Login</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Profile Img</th>
          <th>Update/Info</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {emp.map((value, index) => {
          const { firstName, lastName } = value;
          return (
            <tr key={index}>
              <td>{value.login}</td>
              <td>{firstName === "" ? "Update First Name" : firstName}</td>
              <td>{lastName === "" ? "Update last Name" : lastName}</td>
              <td>
                <img
                  src={value.avatar_url}
                  height="50px"
                  width="50px"
                  alt="Img Loading"
                />
              </td>
              <td>
                {" "}
                <Link
                  to={`/dashboard/${value.login}`}
                  className="btn btn-warning"
                  style={{ textDecoration: "none" }}
                >
                  Update
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(value.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default EmpInfo;
