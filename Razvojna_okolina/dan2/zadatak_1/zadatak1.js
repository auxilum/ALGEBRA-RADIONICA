let xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

function fillList() {
  const data = JSON.parse(xhr.response);
  //   console.log(data);
  const source = document.getElementById("pokemon-list").innerHTML;
  const template = Handlebars.compile(source);
  const context = { pokemon: data.pokemon_species.slice(0, 20) };
  const arr = context.pokemon;
  console.log(arr);
  const url = arr.forEach((element) => {
    console.log(element.url);
  });
  console.log(url);
  const html = template(context);

  document.getElementById("result").innerHTML = html;
}

xhr.onload = function () {
  fillList();
};

xhr.send();

// function fillList()fetch(`https://pokeapi.co/api/v2/pokemon-color/yellow`)
//       .then((response) => response.json())

//       .then((response) => { });
