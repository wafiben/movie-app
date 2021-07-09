import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import MovieAdd from "./Components/MovieAdd";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [movies, setMovies] = useState([]);
  const Api = "https://apimovies.fr/api/movies";
  useEffect(() => {
    
    axios
      .get(Api)
      .then((response) => {
        console.log(response.data.data);
        setMovies(
          response.data.data.map((movie) => {
            return { ...movie, rate: Math.floor(Math.random() * 10) };
          })
        );
        console.log(movies);
      })
      .catch((err) => console.error(err));
  }, []);

  function filterByCaracter(caracter) {//the caracter can be number or string so we should filter the movie in rate(number) or title(string))
    if (isNaN(caracter) === true) {
      setMovies(
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(caracter.toLowerCase())
        )
      );
    } else {
      setMovies(movies.filter((movie) => movie.rate == caracter));
    }
  }
  const onAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <Filter onSearch={filterByCaracter} />
      <div className="main">
        <MovieAdd onAdd={onAdd} />
        <hr></hr>
        <h3>List of Movies</h3>
        <hr></hr>
        {movies.length > 0 ? (
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieList
                key={movie.id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                rate={movie.rate}
                director={movie.director}
              />
            ))}
          </div>
        ) : (
          "no movie with this information exist"
        )}
      </div>
    </div>
  );
}
export default App;
