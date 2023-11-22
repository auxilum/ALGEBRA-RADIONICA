import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import Film from "./Film";

function Popis_filmova() {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzMzNmQ5MGZhNzNjOWJhMDU2MTI1YmMzODg3NzliZCIsInN1YiI6IjY1MGQ1NTU2NGRhM2Q0MDEyY2MxM2YyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVMtlMMyaRmXD_tSpMSVYwmF_Fg6jWM71jDnq_dcQWM",
    },
  };

  const NextPage = () => {
    return setPage(page + 1);
  };

  const PrevPage = () => {
    if (page === 1) {
      return null;
    }
    return setPage(page - 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        options
      )
      .then(function (response) {
        // console.log(response.data);
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page]);

  let ArrMovies = data.map((film) => {
    const movieId = () => {
      return window.localStorage.setItem("movieId", `${film.id}`);
    };

    return (
      <div className="movieContainer">
        <Link to="/popis_filmova/film" onClick={movieId}>
          <div className="moviePicture">
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
            />
          </div>
          <figcaption>
            {film.title} <br />
            {film.release_date.split("-")[0]} <br />
            {film.vote_average.toFixed(1)}
          </figcaption>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="backgroundMain">
        <button
          className={"button " + (page === 1 ? "hidden" : "")}
          onClick={PrevPage}
        >
          Previous
        </button>
        <button className="button" onClick={NextPage}>
          Next
        </button>
        <div className="gridLayout">{ArrMovies}</div>
      </div>
    </>
  );
}

export default Popis_filmova;
