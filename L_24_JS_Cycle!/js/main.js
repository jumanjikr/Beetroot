// 1 Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function getSum() {
  let random_1 = Math.floor(Math.random() * 10);
  let random_2 = Math.floor(Math.random() * 1000);
  let start_number = +prompt("Ведите начало диапазона", `${random_1}`);
  if (isNaN(start_number)) {
    return alert("!!!Error. Введите только число!!!");
  } else start_number;

  let finish_number = +prompt("Введите конец диапазона", `${random_2}`);
  if (isNaN(finish_number)) {
    return alert("!!!Error. Введите только число!!!");
  } else finish_number;

  let sum = 0;

  for (let i = start_number; i <= finish_number; i++) {
    sum += i;
  }

  view = `Сумма всех чисел в диапазоне от ${start_number} до ${finish_number} равна ${sum}  `;
  document.getElementById("task1").innerHTML = view;
}

// 2 Запросить 2 числа и найти только наибольший общий делитель.

function getDivider() {
  let random_1 = Math.floor(Math.random() * 100);
  let random_2 = Math.floor(Math.random() * 1000);
  let x = +prompt("Ведите число", `${random_1}`);
  if (isNaN(x)) {
    return alert("!!!Error. Введите только число!!!");
  } else x;

  let y = +prompt("Введите число", `${random_2}`);
  if (isNaN(y)) {
    return alert("!!!Error. Введите только число!!!");
  } else y;
  console.time();
  function NOD(x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
  }
  console.timeEnd();

  view = `Наибольший общий делитель для чисел ${x} и  ${y} будет число ${NOD(
    x,
    y
  )}.`;
  document.getElementById("task2").innerHTML = view;
}

// 3 Запросить у пользователя число и вывести все делители этого числа

function getNumbers() {
  let random_1 = Math.floor(Math.random() * 1000);
  let numb;

  numb = prompt("Введите число:", `${random_1}`);
  if (isNaN(numb)) {
    return alert("!!!Error. Введите только число!!!");
  } else numb;

  let arr = [];

  for (let i = 0; i < numb; i++) {
    if (numb % i === 0) arr.push(i);
  }

  view = `Вы ввели число: ${numb} <br> вот все его делители: <br>  ${arr.join(
    "  |  "
  )}.`;
  document.getElementById("task3").innerHTML = view;
}

// 4 Определить количество цифр в введенном числе.

function calcNumbers() {
  let random_1 = Math.floor(Math.random() * 1000000);
  let numb;
  numb = +prompt("Введите число ", `${random_1}`);
  if (isNaN(numb)) {
    return alert("!!!Error. Введите только число!!!");
  } else numb;

  let i = 1;
  let quantity = 0;
  while (Math.abs(numb / i) >= 1) {
    quantity++;
    i *= 10;
  }
  let quantity_sub =
    quantity <= 20 && quantity >= 10
      ? "цифер"
      : quantity % 10 <= 1 && quantity % 10 > 0
      ? "цифра"
      : quantity % 10 <= 4 && quantity % 10 >= 2
      ? "цифры"
      : "цифер";

  view = `Вы ввели число ${numb},  в нем  ${quantity} ${quantity_sub}.`;
  document.getElementById("task4").innerHTML = view;
}

// 5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,
//  отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
//  Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

function getTenNmbers() {
  let random_1 = Math.floor(Math.random() * 100);
  const question = 10;
  let numb;
  let numb_positive = 0;
  let numb_negative = 0;
  let numb_zero = 0;
  let numb_even = 0;
  let numb_odd = 0;
  let arr = [];
  let zero_view;

  for (let i = 1; i <= question; i++) {
    numb = prompt(`${i}. Введите число`, `${random_1 * i - 123}`);
    if (isNaN(numb)) {
      return alert("!!!Error. Введите только число!!!");
    } else numb;
    numb > 0 ? numb_positive++ : numb < 0 ? numb_negative++ : numb_zero++;
    numb % 2 === 0 ? numb_even++ : numb_odd++;
    zero_view = numb_zero >= 1 ? "да! ноль это четное число." : "";
    arr.push(numb);
  }

  let view = `Из введеных Вами чисел: 
  <br>
  <br> ${arr.join("  |  ")}
  <br>
  
  <br> ${numb_positive} - положительные, 
                                      <br> ${numb_negative} - отрицательные,  
                                      <br>${numb_zero} - нулей, 
                                      <br>${numb_even} - четные,
                                      <br>${numb_odd} - не четные,
                                      <br>${zero_view}`;
  document.getElementById("task5").innerHTML = view;
}

// 6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак,
//  решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
//   И так до тех пор, пока пользователь не откажется.

function getCalc() {
  let random_1 = Math.floor(Math.random() * 100);
  let random_2 = Math.floor(Math.random() * 100);
  let calculate;
  do {
    let numb_1 = +prompt("Введите первое число:", `${random_1}`);
    let operation = prompt("Введите знак (+ - * /):", "+");
    let numb_2 = +prompt("Введите второе число:", `${random_2}`);
    let result =
      operation === "+"
        ? numb_1 + numb_2
        : operation === "-"
        ? numb_1 - numb_2
        : operation === "*"
        ? numb_1 * numb_2
        : operation === "/"
        ? numb_1 / numb_2
        : "Error";
    calculate = confirm("Порешаем еще примеры?");
    view = `Последний пример: ${numb_1} ${operation} ${numb_2} = ${result} `;
    document.getElementById("task6").innerHTML = view;
  } while (calculate === true);
}

// 7 Запросить у пользователя число и на сколько цифр его сдвинуть.
//  Сдвинуть цифры числа и вывести результат
//  (если число 123456 сдвинуть на 2 цифры, то получится 345612).

function moveNumber() {
  let random_1 = Math.floor(Math.random() * 1000000000);
  let random_2 = Math.floor(Math.random() * 10);
  let numb = prompt("Ведите число:", `${random_1}`);

  if (isNaN(numb)) {
    return alert("!!!Error. Введите только число!!!");
  } else numb;

  let numb_move = +prompt("Ведите на сколько цифр сдвинуть:", `${random_2}`);

  if (isNaN(numb_move) || numb_move > numb.length) {
    return alert("!!!Error. Введите только число!!!");
  } else numb_move;

  let arr = numb.split(``);
  for (let i = 0; i < +numb_move; i++) arr.push(arr.shift());

  let numb_sub =
    numb_move <= 20 && numb_move >= 10
      ? "цифер"
      : numb_move % 10 <= 1 && numb_move % 10 > 0
      ? "цифру"
      : numb_move % 10 <= 4 && numb_move % 10 >= 2
      ? "цифры"
      : "цифер";

  let view = `Вы ввели число: ${numb} и хотите сдвинуть его на ${numb_move} ${numb_sub}   
. <br> Вот такой вот результат: ${arr.join(``)}`;
  document.getElementById("task7").innerHTML = view;
}

// 8. Зациклить вывод дней недели таким образом:
//  «День недели. Хотите увидеть следующий день?»
//  и так до тех пор, пока пользователь нажимает OK.

function getDay() {
  let days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресение",
  ];
  let nextDay = -1;
  let nextDay_nx = 0;

  do {
    nextDay = nextDay >= days.length - 1 ? 0 : nextDay + 1;
    nextDay_nx = nextDay_nx >= days.length - 1 ? 0 : nextDay_nx + 1;
  } while (
    confirm(`Сейчас ${days[nextDay]}, а завтра ${days[nextDay_nx]}. Дальше?`)
  );
  view = `Сейчас ${days[nextDay]}, а завтра ${days[nextDay_nx]}.`;
  document.getElementById("task8").innerHTML = view;
}

// 9 Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.

function multiplication() {
  let random_1 = Math.floor(Math.random() * 10);
  let start = +prompt(
    "Ведите число на которое хотите вывести таблицу умножения",
    `${random_1}`
  );
  if (isNaN(start) || start < 2 || start > 9) {
    return alert("!!!Error. Введите только число (от 2 до 9)!!!");
  } else start;

  function multiplication(min) {
    let result = [];
    let i = min;
    {
      for (let j = 1; j <= 10; j++) {
        result.push(`${i} x ${j} = ${i * j};<br>`);
      }
    }
    return result.join("");
  }
  view = `${multiplication(start)}`;
  document.getElementById("task9").innerHTML = view;
}

// 10 Игра «Угадай число». Предложить пользователю загадать число от 0 до 100
//  и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам,
//   записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?».
//    В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100,
//     поделили пополам и получили 50. Если пользователь указал, что его число > 50,
//      то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

let dg = document.getElementById.bind(document),
  left = 1,
  right = 100,
  mid = 0,
  counter = 0,
  el_try = dg("try"),
  s_try = el_try.querySelector("span"),
  el_guess = dg("guess"),
  btn_game = dg("btn-game"),
  btn_ok = dg("btn-ok"),
  btn_left = dg("btn-left"),
  btn_right = dg("btn-right"),
  is_game = false;
btn_game.addEventListener("click", function () {
  left = 1;
  right = 100;
  counter = 0;
  guess();
});

function guess() {
  counter++;
  mid = Math.floor(left + (right - left) / 2);
  if (mid === left || mid === right) {
    hoorray();
  } else {
    el_try.style.display = "block";
    s_try.innerText = "" + mid + "?";
    el_guess.style.display = "block";
  }
}

function hoorray() {
  s_try.innerHTML = `${mid}!<br>Отгадал за ${counter} попыток.`;
  el_guess.style.display = "none";
  mid = -1;
}

btn_ok.addEventListener("click", hoorray);
btn_left.addEventListener("click", function () {
  guess((right = mid));
});
btn_right.addEventListener("click", function () {
  guess((left = mid));
});
