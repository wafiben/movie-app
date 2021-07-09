import React from "react";
import "./MovieAdd.css";
import { useState } from "react";

function MovieAdd({ onAdd }) {
  const [Movie, setMovie] = useState({
    title: "",
    year: "",
    poster: "",
    director: "",
    rate: "",
  });
  const handleChange = (event) => {
    setMovie({ ...Movie, [event.target.id]: event.target.value });
  };
  function onSubmit(event) {
    event.preventDefault();
    handleChange(event);
    console.log(Movie);
    onAdd(Movie);
    setMovie({ title: "", year: "", poster: "", director: "", rate: "" });
  }

  return (
    <form className="movie-attribut" onSubmit={onSubmit}>
      <div className="form-group">
        <label for="Title">Title of Movie</label>
        <input
          type="text"
          value={Movie.title}
          className="form-control"
          onChange={handleChange}
          id="title"
          placeholder="Title"
        />
      </div>
      <div className="form-group">
        <label for="Year">Year</label>
        <input
          type="text"
          value={Movie.year}
          className="form-control"
          onChange={handleChange}
          id="year"
          placeholder="Year"
        />
      </div>
      <div className="form-group">
        <label for="Poster">Poster</label>
        <input
          type="text"
          value={Movie.poster}
          className="form-control"
          onChange={handleChange}
          id="poster"
          placeholder="Poster"
        />
      </div>
      <div className="form-group">
        <label for="Director">Director</label>
        <input
          type="text"
          value={Movie.director}
          className="form-control"
          onChange={handleChange}
          id="director"
          placeholder="Director"
        />
      </div>
      <div className="form-group">
        <label for="Rate">Rate</label>
        <input
          type="text"
          value={Movie.rate}
          className="form-control"
          onChange={handleChange}
          id="rate"
          placeholder="Rate"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Movie
      </button>
    </form>
  );
}

export default MovieAdd;
