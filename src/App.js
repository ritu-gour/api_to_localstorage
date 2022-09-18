import { Routes, Route } from "react-router-dom";
import UpdateInformationEmp from "./Components/UpdateInformationEmp";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<UpdateInformationEmp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
