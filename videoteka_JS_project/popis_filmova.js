import { newDivElement } from "./elements.js";

let divMain = newDivElement("class", "backgroundMain ");
document.body.appendChild(divMain);

let buttonNext = newDivElement("class", "buttonN");
buttonNext.innerHTML = `<span class="material-symbols-outlined buttonNext">
expand_more
</span>`;

let divGrid = newDivElement("class", "gridLayout");
divMain.appendChild(divGrid);

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzMzNmQ5MGZhNzNjOWJhMDU2MTI1YmMzODg3NzliZCIsInN1YiI6IjY1MGQ1NTU2NGRhM2Q0MDEyY2MxM2YyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVMtlMMyaRmXD_tSpMSVYwmF_Fg6jWM71jDnq_dcQWM",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    const movieList = response.results;
    movieList.forEach((movie) => {
      let divMovieContainer = newDivElement("class", "movieContainer");
      let divMoviePicture = newDivElement("class", "moviePicture");
      let img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = `${movie.title}`;
      divMoviePicture.appendChild(img);
      let figcaption = document.createElement("figcaption");
      figcaption.innerHTML = `${movie.title} <br />
         ${movie.release_date.split("-")[0]} <br />
         <span class="material-symbols-outlined">
         star
         </span> ${movie.vote_average.toFixed(1)} `;
      divMovieContainer.appendChild(divMoviePicture);
      divMovieContainer.appendChild(figcaption);
      divMovieContainer.addEventListener("click", () => {
        window.localStorage.setItem("movieId", `${movie.id}`);
        window.open("movie.html", "_self");
      });

      divGrid.appendChild(divMovieContainer);

      console.log(movie);
    });
    // console.log(response.results);
  })

  .catch((err) => console.error(err));

let counter = 1;
buttonNext.addEventListener("click", () => {
  counter++;
  console.log(counter);
  fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${counter}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const movieList = response.results;
      movieList.forEach((movie) => {
        let divMovieContainer = newDivElement("class", "movieContainer");
        let divMoviePicture = newDivElement("class", "moviePicture");
        let img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = "${movie.title}";
        divMoviePicture.appendChild(img);
        let figcaption = document.createElement("figcaption");
        figcaption.innerHTML = `${movie.title} <br />
             ${movie.release_date.split("-")[0]} <br />
             <span class="material-symbols-outlined">
             star
             </span> ${movie.vote_average.toFixed(1)}`;
        divMovieContainer.appendChild(divMoviePicture);
        divMovieContainer.appendChild(figcaption);
        divMovieContainer.addEventListener("click", () => {
          window.localStorage.setItem("movieId", `${movie.id}`);
          window.open("movie.html", "_self");
        });

        divGrid.appendChild(divMovieContainer);

        console.log(movie);
      });
      // console.log(response.results);
    })

    .catch((err) => console.error(err));
  window.reload();
});

divMain.appendChild(buttonNext);

let buttonToTop = newDivElement("class", "buttonToTop ");
buttonToTop.innerHTML = `<span class="material-symbols-outlined buttonTop">
arrow_upward
</span>`;

divMain.appendChild(buttonToTop);

buttonToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
