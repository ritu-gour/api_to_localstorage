import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import EmpInfo from "./Components/EmpInfo";
import ModalComponent from "./Components/ModalComponent";
import NavbarComponent from "./Components/NavbarComponent";

function Dashboard() {

  // get data from LocalStorage
  const getDataEmp = () => {
    const data = localStorage.getItem("records");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [records, setRecords] = useState(getDataEmp());
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (records.length === 0) {
      getUserName();
    }
  }, [records]);

  const getUserName = async () => {
    console.log("Api call");
    try {
      const response = await fetch("https://api.github.com/users");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      // Add to Local Storage
      localStorage.setItem(
        "records",
        JSON.stringify(
          data.map((obj) => ({ ...obj, firstName: "", lastName: "" }))
        )
      );

      // immediate get data from Local Storage
      const OfflineData = localStorage.getItem("records");
      if (OfflineData) {
        return setRecords(JSON.parse(OfflineData));
      } else {
        return setRecords([]);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  console.log("records", records);

  const handleDelete = (id) => {
    const deleteItem = records.filter((item) => {
      return id !== item.id;
    });
    setRecords(deleteItem);
    localStorage.setItem("records", JSON.stringify(deleteItem));
  };

  if (records.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <NavbarComponent />
      <Container>
        <div className="d-flex justify-content-center mb-5 mt-5">
          <div>
            <button
              className="btn btn-primary"
              onClick={() => setModalShow(true)}
            >
              Add Employee
            </button>
          </div>
        </div>
        {/*  Add data  */}
        <ModalComponent
          show={modalShow}
          onHide={() => setModalShow(false)}
          records={records}
        />
        {/* display data and delete Data */}
        <EmpInfo emp={records} handleDelete={handleDelete} />
      </Container>
    </>
  );
}

export default Dashboard;
