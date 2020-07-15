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
document
  .querySelector(".main__form-btn")
  .addEventListener("click", () => makeWeather());

document.querySelector(".main__form-input").addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    makeWeather();
  }
});

async function makeWeather() {
  const APIKEY = `0152ed14047e1a4429b92307cfe7e291`;

  const CITY = document.querySelector(".main__form-input").value;

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&APPID=${APIKEY}`,
    {
      method: "GET",
      headers: {},
    }
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);

      const ICON_WEATHER = data.weather[0].icon;

      document
        .querySelector(".main__wrapper")
        .setAttribute("style", "display : block;");

      document.querySelector(".main__city").innerHTML = `City : ${data.name}`;

      document.querySelector(
        ".main__temp-feels_like"
      ).innerHTML = `feels like : ${
        Math.round(data.main.feels_like - 273) + `&deg`
      }`;

      document.querySelector(".main__temp").innerHTML = `${
        Math.round(data.main.temp - 273) + `&deg`
      }`;

      document.querySelector(".main__cloud").innerHTML =
        data.weather[0].description;

      document.querySelector(
        ".main__pic"
      ).innerHTML = ` <img src="https://openweathermap.org/img/wn/${ICON_WEATHER}@2x.png">`;

      document.querySelector(
        ".main__wind"
      ).innerHTML = `Wind : ${data.wind.speed} m/s`;
    })

    .catch((err) => {
      console.log(err);

      document
        .querySelector(".main__wrapper")
        .setAttribute("style", "display : block; height: 60px; color: red;");

      document.querySelector(".main__city").innerHTML = "City not found";

      document.querySelector(".main__temp-feels_like").innerHTML = ``;

      document.querySelector(".main__temp").innerHTML = ``;

      document.querySelector(".main__cloud").innerHTML = ``;

      document.querySelector(".main__pic").innerHTML = ``;

      document.querySelector(".main__wind").innerHTML = ``;
    });
}
;
