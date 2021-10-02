const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const GEN_API = "";
  const dropdown = document.getElementById("cars");
  const main = document.getElementById("main");
  const form = document.getElementById("form");
  const search = document.getElementById("search");

  getMovies(APIURL);
  
  async function getMovies(url) {
    const resp = await fetch(url);
    
  const respData = await resp.json();
  
  addMovies(respData.results);
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6 && vote < 8) {
    return "orange";
  } else if (vote >= 0 && vote < 6) {
    return "red";
  }
}

function addMovies(movies) {
  main.innerText = "";

  if (movies.length == 0) {
    const notFound = document.createElement("div");
    
    notFound.innerHTML = `
    <div class="container">
    <div class="row">
        <div class="col-md-12">
        <div class="error-template">
        <h1>
        Oops!</h1>
                <h2>
                404 Not Found</h2>
                <div class="error-details">
                    No movie exist with this name, Requested page not found!
                    </div>
                <br>
                <a href="./index.html" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                Take Me Home </a>
                </div>
                </div>
    </div>
    </div>
    `;
    
    main.appendChild(notFound);
  }
  
  movies.forEach((movie) => {
    const { poster_path, overview, title, vote_average } = movie;
    
    if (poster_path == null) {
      // to remove those movies from the list in which poster is not available
    } else {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = ` 
      <img src="${IMGPATH + poster_path}" alt="${title}"/>
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview"> 
        <h3>Storyline</h3>
        ${overview}
         </div>
        `;
        
        main.appendChild(movieEl);
      }
    });
  }
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const searchTerm = search.value;

    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);
      search.value = "";
    }
  });
  
  const dropdownChangeHandler = (e) => {
    const genre = e.target.value;
    console.log(genre);
    let genrecode = `with_genres=`;
    if (genre === "Action") {
      genrecode += 28+'&';
    }
    else if (genre === "Adventure") {
      genrecode += 12 + "&";
    }
    else if (genre === "Animation") {
      genrecode += 16 + "&";
    } 
    else if (genre === "Comedy") {
      genrecode += 35 + "&";
    } else {
      genrecode = "";
    }
  const newAPIURL =
      `https://api.themoviedb.org/3/discover/movie?${genrecode}sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
     getMovies(newAPIURL);
}
dropdown.addEventListener("change", dropdownChangeHandler);