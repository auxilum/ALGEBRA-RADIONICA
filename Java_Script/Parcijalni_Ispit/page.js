let h2 = document.createElement("h2");
h2.innerText = "Potrazi seriju iz nase kolekcije";
document.body.appendChild(h2);

let inputContainer = document.createElement("id");
inputContainer.setAttribute("id", "inputContainer");
document.body.appendChild(inputContainer);

let input = document.createElement("input");
input.setAttribute("id", "searchBar");
inputContainer.appendChild(input);
let inputText = document.querySelector("#searchBar");

input.addEventListener("click", () => {
  if (inputText.value != "") {
    window.location.reload();
  }
});

let button = document.createElement("button");
button.setAttribute("id", "subButton");
button.innerText = "Search";
inputContainer.appendChild(button);

let divLoader = document.createElement("div");
divLoader.setAttribute("id", "loading");
document.body.appendChild(divLoader);

function displayLoading() {
  divLoader.classList.add("display");
}

function hideLoading() {
  divLoader.classList.remove("display");
}

let divContainer = document.createElement("div");
divContainer.setAttribute("id", "container1");
document.body.appendChild(divContainer);

button.addEventListener("click", () => {
  let text = inputText.value;

  let newText = text.replace(/[ ,]+/g, "+");

  displayLoading();

  setTimeout(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${newText}`)
      .then((response) => response.json())

      .then((response) => {
        hideLoading();
        let series = response;
        console.log(series);
        if (series.length === 0) {
          hideLoading();
          alert("Birali ste seriju koja nije u nasoj bazi!");
        }

        series.forEach((serie) => {
          let divSerieContainer = document.createElement("div");
          divSerieContainer.setAttribute("class", "serieContainer");
          divSerieContainer.style.backgroundImage = `url(${serie.show.image.original})`;
          divContainer.appendChild(divSerieContainer);

          let divBackground = document.createElement("div");
          divBackground.setAttribute("class", "backgroundGrey");
          divSerieContainer.appendChild(divBackground);

          let divRating = document.createElement("div");

          if (serie.show.rating.average != null) {
            divRating.setAttribute("id", "rating");
            divRating.innerText = `Rating: ${serie.show.rating.average}`;
          }

          divBackground.appendChild(divRating);

          let divSerieTitle = document.createElement("div");
          divSerieTitle.setAttribute("id", "serieTitle");
          divSerieTitle.innerText = `${serie.show.name}`;
          divBackground.appendChild(divSerieTitle);

          let divShowOf = document.createElement("div");
          divShowOf.setAttribute("id", "showOf");
          divSerieContainer.appendChild(divShowOf);

          let h4 = document.createElement("h4");
          h4.innerHTML = `"<a class="link" href=${serie.show.url}>More info on the internet...<a/>"`;
          divShowOf.appendChild(h4);

          let serieParagraph = document.createElement("p");
          serieParagraph.setAttribute("id", "serieParagraph");
          if (serie.show.summary === null) {
            serieParagraph.innerHTML = "There is no info";
          } else if (serie.show.summary !== null) {
            serieParagraph.innerHTML = `${serie.show.summary}`;
          }

          divShowOf.appendChild(serieParagraph);
        });
      })

      .catch((err) => console.error(err));
  }, 1500);
});
