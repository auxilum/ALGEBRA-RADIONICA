let h2 = document.createElement("h2");
h2.innerText = "Potrazi film iz nase kolekcije55555";
document.body.appendChild(h2);

// let form = document.createElement("form");
// document.body.appendChild(form);

let input = document.createElement("input");
input.setAttribute("id", "searchBar");
document.body.appendChild(input);
let inputText = document.querySelector("#searchBar");

let button = document.createElement("button");
button.setAttribute("id", "subButton");
button.innerText = "Search";
document.body.appendChild(button);

let divContainer = document.createElement("div");
divContainer.setAttribute("id", "container1");
document.body.appendChild(divContainer);

button.addEventListener("click", () => {
  let text = inputText.value;

  let newText = text.replace(/[ ,]+/g, "%20");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzMzNmQ5MGZhNzNjOWJhMDU2MTI1YmMzODg3NzliZCIsInN1YiI6IjY1MGQ1NTU2NGRhM2Q0MDEyY2MxM2YyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVMtlMMyaRmXD_tSpMSVYwmF_Fg6jWM71jDnq_dcQWM",
    },
  };

  //   let fetchResponse = () => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${newText}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())

    .then((response) => {
      //   console.log(response);
      let movies = response.results;
      console.log(movies);
      if (movies.length === 0) {
        alert("Birali ste film koji nije u nasoj bazi!");
      }

      movies.forEach((movie) => {
        let divMovieContainer = document.createElement("div");
        divMovieContainer.setAttribute("class", "movieConteiner1");
        divMovieContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;
        divContainer.appendChild(divMovieContainer);

        let divBackground = document.createElement("div");
        divBackground.setAttribute("class", "backgroundGrey");
        divMovieContainer.appendChild(divBackground);

        let divRating = document.createElement("div");
        divRating.setAttribute("id", "rating");
        divRating.innerText = `${movie.vote_average.toFixed(1)}`;
        divBackground.appendChild(divRating);

        let divMovieTitle = document.createElement("div");
        divMovieTitle.setAttribute("id", "movieTitle");
        divMovieTitle.innerText = `${movie.title}`;
        divBackground.appendChild(divMovieTitle);

        let divShowOf = document.createElement("div");
        divShowOf.setAttribute("id", "showOf");
        divMovieContainer.appendChild(divShowOf);

        let h4 = document.createElement("h4");
        h4.innerText = "Overview";
        divShowOf.appendChild(h4);

        let moviePara = document.createElement("p");
        moviePara.setAttribute("id", "moviePara");
        moviePara.innerText = `${movie.overview}`;
        divShowOf.appendChild(moviePara);
      });
    })

    .catch((err) => console.error(err));

  // setTimeout(fetchResponse(), 2000);
  inputText.value = " ";
  //   };
});
