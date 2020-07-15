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

let cookiesBtn = document.querySelector(".cookies-btn");
let cookiesWindow = document.querySelector(".cookies-window");

cookiesBtn.addEventListener("click", (event) => {
  cookiesWindow.style.top = -100 + "px";
});

let btNav = document.querySelector(".nav");
let popUpHM = document.querySelector(".pop-up_hm");
let popUpBG = document.querySelector(".pop-up_mbg");

document.body.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    popUpHM.classList.add("hiden");
    popUpBG.classList.add("hiden");
    btNav.style.display = "block";
  }
});

btNav.addEventListener("click", (event) => {
  popUpBG.classList.remove("hiden");
  btNav.style.display = "none";
});

document.body.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("header-content__btn") ||
    event.target.classList.contains("hire-btn")
  ) {
    popUpHM.classList.remove("hiden");
    btNav.style.display = "none";
  } else if (
    event.target.classList.contains("pop-up_hire-me_bg") ||
    event.target.classList.contains("pop-up_menu_bg") ||
    event.target.classList.contains("close-btn")
  ) {
    popUpHM.classList.add("hiden");
    popUpBG.classList.add("hiden");
    btNav.style.display = "block";
  }
});
