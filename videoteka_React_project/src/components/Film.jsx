import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Film() {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [play, setPlay] = useState(false);
  const [visible, setVisible] = useState(false);

  console.log(trailer[0]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzMzNmQ5MGZhNzNjOWJhMDU2MTI1YmMzODg3NzliZCIsInN1YiI6IjY1MGQ1NTU2NGRhM2Q0MDEyY2MxM2YyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVMtlMMyaRmXD_tSpMSVYwmF_Fg6jWM71jDnq_dcQWM",
    },
  };

  const movieId = window.localStorage.getItem("movieId");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      )
      .then(function (response) {
        // console.log(response);
        setMovie(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      )
      .then(function (response) {
        // console.log(response.data.results);
        let videoArr = response.data.results;
        // console.log(videoArr);
        let trailerArr = [];
        videoArr.forEach((video) => {
          //   console.log(video);
          if (video?.type === "Trailer") {
            trailerArr.push(video.key);
          }
          setTrailer(trailerArr);
          console.log(trailerArr);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const removeElement = () => {
    setVisible(!visible);
    setPlay(!play);
  };

  return (
    <div className="backgroundMain">
      <div
        id="divContainer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        }}
      >
        <div className="background">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.original_title}`}
            />
          </div>
          <div className="movieInfo">
            <h1>{movie.original_title}</h1>
            <p>
              <strong>Overview</strong>
              <br />
              {movie.overview}
            </p>
            <button
              onClick={() => {
                setPlay(play === false ? true : false);
              }}
            >
              Play
            </button>
          </div>
        </div>
      </div>
      {play && (
        <div onClick={() => setPlay(false)} className="youtubeVid">
          <object
            data={`https://www.youtube.com/embed/${trailer[0]}?autoplay=1`}
          />
        </div>
      )}
    </div>
  );
}

export default Film;
