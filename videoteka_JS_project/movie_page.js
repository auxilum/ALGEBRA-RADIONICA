import { newDivElement } from "./elements.js";

let divMain = newDivElement("class", "backgroundMain proba");
document.body.appendChild(divMain);

let divContainer = newDivElement("id", "divContainer");

divMain.appendChild(divContainer);

let movieId = window.localStorage.getItem("movieId");

console.log(movieId);

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzMzNmQ5MGZhNzNjOWJhMDU2MTI1YmMzODg3NzliZCIsInN1YiI6IjY1MGQ1NTU2NGRhM2Q0MDEyY2MxM2YyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVMtlMMyaRmXD_tSpMSVYwmF_Fg6jWM71jDnq_dcQWM",
  },
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
  .then((response) => response.json())
  .then((response) => {
    let movie = response;
    console.log(movie);
    let divBackground = newDivElement("class", "background");
    // let imgBack = document.createElement("img");
    // imgBack.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    // divBackground.appendChild(imgBack);
    divContainer.appendChild(divBackground);
    divBackground.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`;

    let divPoster = newDivElement("class", "poster");
    let img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    img.alt = `${movie.original_title}`;
    divPoster.appendChild(img);
    divContainer.appendChild(divPoster);
    let divTitle = newDivElement("class", "title");
    let h1 = document.createElement("h1");
    h1.innerHTML = `${movie.original_title}`;
    divTitle.appendChild(h1);
    divContainer.appendChild(divTitle);
    let paragraph = document.createElement("p");

    paragraph.innerHTML = `<strong>Overview</strong> <br/>
    ${movie.overview}`;
    divContainer.appendChild(paragraph);

    let playButton = newDivElement("class", "playButton");
    playButton.innerHTML = `<span class="material-symbols-outlined play">
    play_arrow
    </span> Watch trailer`;
    divContainer.appendChild(playButton);

    playButton.addEventListener("click", () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          let videoArr = response.results;
          console.log(videoArr);
          let trailerArr = [];
          videoArr.forEach((video) => {
            console.log(video);
            if (video?.type === "Trailer") {
              trailerArr.push(video.key);
            }
            console.log(trailerArr);
          });
          let movieDiv = newDivElement("id", "youtubeVid");
          movieDiv.innerHTML = `<object data='https://www.youtube.com/embed/${trailerArr[0]}?autoplay=1' width='560px' height='315px'>`;
          divMain.appendChild(movieDiv);
        })

        .catch((err) => console.error(err));
    });
    window.addEventListener("click", () => {
      let removeDiv = document.getElementById("youtubeVid");
      removeDiv.remove();
    });
  })

  .catch((err) => console.error(err));

//
