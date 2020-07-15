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

const BTNS = document.querySelectorAll("button");
const INPUT = document.querySelectorAll("input");
const TEXTAREA = document.querySelectorAll("textarea");
const H1 = document.querySelectorAll("h1");
const H2 = document.querySelectorAll("h2");
const H4 = document.querySelectorAll("h4");
const P = document.querySelectorAll("p");
const SERVICES__IMG = document.querySelectorAll(".services__img");
const LOGO = document.querySelectorAll(".logo");
const CLOSE_BTN = document.querySelectorAll(".close-btn");
const MENU_ITEM = document.querySelectorAll(".menu-item");

const CARDS__IMG = document.querySelectorAll(".cards__img");

window.addEventListener("scroll", throttle, false);
window.addEventListener("DOMContentLoaded", animate, false);

let isScrolling = false;

function throttle() {
  if (!isScrolling) {
    window.requestAnimationFrame(function () {
      animate();
      isScrolling = false;
    });
  }
  isScrolling = true;
}

function animate() {
  for (let item of BTNS) {
    isVisible(item)
      ? item.classList.add("animated--btn")
      : item.classList.remove("animated--btn");
  }
  for (let item of INPUT) {
    isVisible(item)
      ? item.classList.add("animated--input")
      : item.classList.remove("animated--input");
  }
  for (let item of TEXTAREA) {
    isVisible(item)
      ? item.classList.add("animated--textarea")
      : item.classList.remove("animated--textarea");
  }
  for (let item of H1) {
    isVisible(item)
      ? item.classList.add("animated--h1")
      : item.classList.remove("animated--h1");
  }
  for (let item of H2) {
    isVisible(item)
      ? item.classList.add("animated--h2")
      : item.classList.remove("animated--h2");
  }
  for (let item of H4) {
    isVisible(item)
      ? item.classList.add("animated--h4")
      : item.classList.remove("animated--h4");
  }
  for (let item of P) {
    isVisible(item)
      ? item.classList.add("animated--p")
      : item.classList.remove("animated--p");
  }
  for (let item of SERVICES__IMG) {
    isVisible(item)
      ? item.classList.add("animated--services__img")
      : item.classList.remove("animated--services__img");
  }
  for (let item of LOGO) {
    isVisible(item)
      ? item.classList.add("animated--logo")
      : item.classList.remove("animated--logo");
  }
  for (let item of CLOSE_BTN) {
    isVisible(item)
      ? item.classList.add("animated--close")
      : item.classList.remove("animated--close");
  }
  for (let item of MENU_ITEM) {
    isVisible(item)
      ? item.classList.add("animated--menu-item")
      : item.classList.remove("animated--menu-item");
  }
  for (let item of CARDS__IMG) {
    isVisible(item)
      ? item.classList.add("animated--cards__img")
      : item.classList.remove("animated--cards__img");
  }
}

function isVisible(item) {
  let elemRect = item.getBoundingClientRect();
  let top = elemRect.top;
  let bottom = elemRect.bottom;
  let height = elemRect.height;
  return top + height >= 0 && bottom <= height + window.innerHeight;
}
