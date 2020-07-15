function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
let elemForm = document.getElementById("elemForm");
let page_link = document.getElementsByClassName("page-link");
let current = document.getElementsByClassName("current");
let listFilmPlaceholder = document.getElementById("listFilmPlaceholder");
let pagination_placeholder = document.getElementById("pagination_placeholder");
let btnAddToFav;
let btnRemFromFav;
let page = 1;

const MAIN_DIV = document.querySelector(".main");

document.body.addEventListener("click", setNumPage);
function setNumPage(e) {
  if (e.target.tagName != "A") return;
  page = current[0].innerText;
  console.log(page);
  sendRequest();
}
/**
 * sending request and getting list films
 */
elemForm.onsubmit = (e) => {
  e.preventDefault();
  sendRequest();
};
function sendRequest() {
  listFilmPlaceholder.innerHTML = "";
  let titleFilm = document.getElementById("titleFilm").value;
  let typeFilm = document.getElementById("typeFilm").value;
  let apiUrl = `http://www.omdbapi.com/?s=${titleFilm}&type=${typeFilm}&page=${page}&apikey=4ccb7b7e`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.Response == "False") {
        let p = document.createElement("p");
        p.innerText = "Movie not found!";
        listFilmPlaceholder.appendChild(p);
        return;
      } else {
        let ol = document.createElement("ol");
        ol.classList.add("listFilmPlaceholder__list");
        console.log(data.Search);

        listFilm = data.Search;
        for (let el in listFilm) {
          let image = document.createElement("img");
          let p = document.createElement("p");
          let li = document.createElement("li");
          let liNum = (page - 1) * 10 + parseInt(el) + 1;
          li.setAttribute("value", `${liNum}`);
          li.setAttribute("class", `${liNum} listFilmPlaceholder__list_li`);

          let imageParent = document.getElementById(`${liNum}`);
          image.className = "listFilmPlaceholder__img";
          image.src = data.Search[el].Poster;

          let Title = data.Search[el].Title;
          let Type = data.Search[el].Type;
          let Year = data.Search[el].Year;

          for (let value in listFilm[el]) {
            li.appendChild(p);
            p.innerText = `${liNum}. Title : ${Title}; 
            Type: ${Type}; 
            Year: ${Year};`;

            li.appendChild(image);
          }
          ol.appendChild(li);
          /**
           * creation button "add to favourites"/add to local storage
           */
          li.onmouseenter = addToFavourites;

          function addToFavourites() {
            if (id.includes(listFilm[el].imdbID) === true) {
              RemFromFav();
              return;
            }
            btnAddToFav = document.createElement("button");
            btnAddToFav.style.display = "block";

            btnAddToFav.classList.add("button", "button_act");
            btnAddToFav.innerText = "add to favorite";
            li.appendChild(btnAddToFav);
            li.onmouseleave = () => {
              btnAddToFav.remove();
            };

            btnAddToFav.onclick = () => {
              listFavFilmPlaceholder.innerHTML = "";
              id.push(`${listFilm[el].imdbID}`);
              console.log(id);
              favFilmsList.setId(id);
              btnAddToFav.style.display = "none";
              li.onmouseleave = () => {
                btnRemFromFav.remove();
              };
              RemFromFav();
            };
          }
          /**
           * creation button "remove from favorite"/delete from local storage
           */
          function RemFromFav() {
            btnRemFromFav = document.createElement("button");
            btnRemFromFav.style.display = "block";
            btnRemFromFav.classList.add("button", "button_act", "invert");

            btnRemFromFav.innerText = "remove from favorite";
            li.appendChild(btnRemFromFav);
            li.onmouseleave = () => {
              btnRemFromFav.remove();
            };

            btnRemFromFav.onclick = () => {
              let index = id.indexOf(`${listFilm[el].imdbID}`);
              id.splice(index, 1);
              console.log(id);
              favFilmsList.setId(id);
              btnRemFromFav.style.display = "none";
              addToFavourites();
              li.onmouseleave = () => {
                btnAddToFav.remove();
              };
            };
          }
        }
        listFilmPlaceholder.appendChild(ol);
        /**
         * pagination creation
         */
        if (page !== 1) return;
        $(function () {
          $(pagination_placeholder).pagination({
            items: data.totalResults,
            itemsOnPage: listFilm.length,
            cssStyle: "light-theme",
          });
        });
      }
    });
}

/**
 * localStorage (favorite films)
 */
let id = [];
let favFilmsList = {
  storage: null,
  setId(id) {
    this.storage.setItem("id", JSON.stringify(id));
  },
  getId() {
    return JSON.parse(this.storage.getItem("id"));
  },
};
favFilmsList.storage = window.localStorage;
/**
 * show selected films
 */
let listFavFilmPlaceholder = document.getElementById("listFavFilmPlaceholder");
let btnShowFav = document.createElement("button");
btnShowFav.innerText = "show selected films";
MAIN_DIV.appendChild(btnShowFav);
btnShowFav.classList.add("button");

btnShowFav.onclick = () => {
  listFavFilmPlaceholder.innerHTML = "";
  if (id.length < 1) {
    let p = document.createElement("p");
    p.innerText = "You have not favorite movies!";
    listFavFilmPlaceholder.appendChild(p);
  } else {
    let ol = document.createElement("ol");
    ol.classList.add("listFilmPlaceholder__show");
    for (let el of id) {
      let i = el;
      let apiUrl = `http://www.omdbapi.com/?i=${i}&apikey=4ccb7b7e`;
      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          listFavFilm = data;
          let li = document.createElement("li");
          li.innerText = `${listFavFilm.Title} ,  ${listFavFilm.Year};`;
          ol.appendChild(li);
          listFavFilmPlaceholder.appendChild(ol);
        });
    }
  }
};
;
