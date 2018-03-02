
let display = document.querySelector("table");
var td = document.createElement("td");

var fetcher = () => {
  fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(response => response.json())
    .then((json) => printer(json));
}

var printer = (object) => {
  console.log(object);
  for (i in object) {
    if (i === "address" || i === "company") {
      for (j in object[i]) {
        if (j == "geo") {
          for (k in object[i][j]) {
            textMaker(k, object[i][j][k]);
          }
        }
        else {
          textMaker(j, object[i][j]);
        }
      }
    }
    else {
      textMaker(i, object[i]);
    }
  }
}

textMaker = (property, object) => {
  td.append(property);
  document.body.appendChild(td);
  text = document.createTextNode(" : ");
  td.appendChild(text);
  td.append(object);
  document.body.appendChild(td);
  document.createElement("br");
  var br = document.createElement("br");
  td.appendChild(br);
}