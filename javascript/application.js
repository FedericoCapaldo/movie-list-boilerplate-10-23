
fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {

    data.Search.forEach((result) => {
      const movieCard = `
        <div class="col-3">
          <div class="card" style="width: 18rem;">
          <img src="${result.Poster}" class="card-img-top" alt="${result.Title} poster">
          <div class="card-body">
            <h6 class="card-title">${result.Title}</h6>
            <p class="card-text">${result.Year}</p>
            <a href="https://www.imdb.com/title/${result.imdbID}"class="btn btn-primary" target="_blank" >Go to IMDB</a>
          </div>
          </div>
        </div>
      `
    })

  })
