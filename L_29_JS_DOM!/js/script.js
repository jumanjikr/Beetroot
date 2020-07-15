// TASK1

var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

function task1() {
  const OL = document.createElement("ol");
  const MAINDIV = document.getElementById("task1");

  MAINDIV.append(OL);

  playList.forEach((i) => {
    const LI = document.createElement("li");
    const SPAN = document.createElement("span");

    SPAN.append(i.author);
    SPAN.append(" : ");
    SPAN.append(i.song);
    LI.append(SPAN);
    OL.append(LI);
    SPAN.style.fontSize = `14px`;
    SPAN.style.color = `#03a9f4`;
    OL.style.fontSize = `14px`;
    OL.style.color = `#f44336`;
  });
}
;
// TASK2

const BTN = document.createElement("button");
BTN.setAttribute("id", "op_button");
const SPAN = document.createElement("span");
const MAINDIV2 = document.getElementById("task2");

SPAN.textContent = "ОТКРЫТЬ";
BTN.append(SPAN);
MAINDIV2.append(BTN);

BTN.addEventListener("click", () => {
  const DIV = document.createElement("div");
  DIV.setAttribute("id", "modal__div");
  const SPAN = document.createElement("span");
  SPAN.textContent = `При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.`;
  DIV.append(SPAN);

  const INNERBTN = document.createElement("button");
  const INNERBTNS = document.createElement("span");

  INNERBTNS.textContent = "ЗАКРЫТЬ";
  INNERBTN.append(INNERBTNS);
  DIV.append(INNERBTN);
  MAINDIV2.append(DIV);
  BTN.disabled = true;

  INNERBTN.addEventListener("click", () => {
    DIV.remove();
    BTN.disabled = false;
  });
});
;
// TASK3

const TRAFFICLIGHTS = document.querySelector(".traffic__light");
const REDLIGHT = document.getElementById("red");
const YELLOWLIGHT = document.getElementById("yellow");
const GREENLIGHT = document.getElementById("green");
const BUTN = document.getElementById("task3");
const BORDER = document.querySelector(".container");

BUTN.addEventListener("click", () => {
  if (REDLIGHT.classList.contains("traffic__red")) {
    REDLIGHT.classList.remove("traffic__red");
    YELLOWLIGHT.classList.add("traffic__yellow");
    BORDER.style.border = "4px solid yellow ";
  } 

   if (YELLOWLIGHT.classList.contains("traffic__yellow")) {
    YELLOWLIGHT.classList.remove("traffic__yellow");
    GREENLIGHT.classList.add("traffic__green");
    BORDER.style.border = "4px solid green ";
  } 

  if (GREENLIGHT.classList.contains("traffic__green")) {
    GREENLIGHT.classList.remove("traffic__green");
    REDLIGHT.classList.add("traffic__red");
    BORDER.style.border = "4px solid red ";
  }
});
;
