import Mustache from "mustachejs";

const results = document.querySelector("#results");
const template = document.querySelector("#movieCardTemplate");

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {

    const movieData = { "movies": data.Search }
    const output = Mustache.render(template.innerHTML, movieData);
    results.innerHTML = output;

  })
