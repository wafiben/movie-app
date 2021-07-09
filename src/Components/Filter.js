import React from "react";
import { useState } from "react";
import "./Filter.css";
import "bootstrap/dist/css/bootstrap.css";
const Filter = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(title);
    setTitle("");
  };
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand">Home</a>
      <form className="form-inline" onSubmit={onSubmit}>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Filter;
