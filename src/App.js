import React, { useState } from "react";
import "./App.css";
import data from "./data.json";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function App() {
  const [results, setResults] = useState(data.results.slice(0, 49));
  const [searchValue, setSearchValue] = useState("");
  const [drop, setDrop] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startPoint = (currentPage - 1) * itemsPerPage;
  const endPoint = startPoint + itemsPerPage;
  const [filteredData, setFilteredData] = useState(results);

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const searchByName = () => {
    if (searchValue) {
      setDrop(false);
      console.log(searchValue);
      const search = searchValue.toLowerCase();
      const fd = results.filter((item) => {
        return item.name.first.toLowerCase().includes(search);
      });
      setFilteredData(fd);
    }
  };

  const searchByEmail = () => {
    if (searchValue) {
      setDrop(false);
      console.log(searchValue);
      const search = searchValue.toLowerCase();
      const fd = results.filter((item) => {
        return item.email.toLowerCase().includes(search);
      });
      setFilteredData(fd);
    }
  };

  const searchByLogin = () => {
    if (searchValue) {
      setDrop(false);
      console.log(searchValue);
      const search = searchValue.toLowerCase();
      const fd = results.filter((item) => {
        return item.login.username.toLowerCase().includes(search);
      });
      setFilteredData(fd);
    }
  };

  const searchByGender = () => {
    if (searchValue) {
      setDrop(false);
      console.log(searchValue);
      const search = searchValue.toLowerCase();
      const fd = results.filter((item) => {
        return item.gender.toLowerCase().includes(search);
      });
      setFilteredData(fd);
    }
  };

  const searchByLocation = () => {
    if (searchValue) {
      setDrop(false);
      console.log(searchValue);
      const search = searchValue.toLowerCase();
      const fd = results.filter((item) => {
        return item.location.country.toLowerCase().includes(search);
      });
      setFilteredData(fd);
    }
  };

  const currentData = filteredData.slice(startPoint, endPoint);
  // const totalPages = filteredData.length / itemsPerPage;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const pageChange = (i) => {
    console.log(totalPages);
    if (i >= 1 && i <= totalPages) {
      setCurrentPage(i);
    }
  };

  return (
    <div className="w3-container">
      <div className="searchButtons">
        <input
          type="text"
          placeholder="Search by Name, Email, or Location"
          value={searchValue}
          onChange={onSearch}
        />{" "}
        <DropdownButton id="dropdown-basic-button" title="Search by">
          <Dropdown.Item onClick={searchByName}>
            {drop ? "Name" : ""}
          </Dropdown.Item>
          <br />
          <Dropdown.Item onClick={searchByEmail}>
            {drop ? "Email" : ""}
          </Dropdown.Item>
          <br />
          <Dropdown.Item onClick={searchByLogin}>
            {drop ? "Login" : ""}
          </Dropdown.Item>
          <br />
          <Dropdown.Item onClick={searchByGender}>
            {drop ? "Gender" : ""}
          </Dropdown.Item>
          <br />
          <Dropdown.Item onClick={searchByLocation}>
            {drop ? "Location" : ""}
          </Dropdown.Item>
          <br />
        </DropdownButton>
      </div>
      &nbsp;
      <table className="w3-table w3-striped">
        <thead>
          <tr>
            <th>Gender</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Login</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.gender}</td>
              <td>{item.name.first}</td>
              <td>{item.location.country}</td>
              <td>{item.email}</td>
              <td>{item.login.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => pageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => pageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
