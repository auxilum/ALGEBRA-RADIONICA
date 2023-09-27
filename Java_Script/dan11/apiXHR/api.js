var request = new XMLHttpRequest();
request.open("GET", "https://api.punkapi.com/v2/beers", true);

request.onload = function () {
  if (request.status === 200) {
    var responseData = JSON.parse(request.responseText);
    var tableBody = document
      .getElementById("responseTable")
      .getElementsByTagName("tbody")[0];

    for (var i = 0; i < responseData.length; i++) {
      var row = tableBody.insertRow(i);

      var idCell = row.insertCell(0);
      var titleCell = row.insertCell(1);
      var completedCell = row.insertCell(2);

      idCell.innerHTML = responseData[i].id;
      titleCell.innerHTML = responseData[i].name;
      completedCell.innerHTML = `<img src="${responseData[i].image_url}">`;
    }
  } else {
    console.error("Greška " + request.status);
  }
};

request.send();
