// 1 Написать функцию, которая принимает 2 числа и возвращает -1,
//  если первое меньше, чем второе; 1 – если первое больше,
// чем второе; и 0 – если числа равны.

function task_1() {
  let random_1 = Math.floor(Math.random() * 100);
  let random_2 = Math.floor(Math.random() * 100);
  let a = +prompt(`Введите первое число`, `${random_1}`);
  let b = +prompt(`Введите второе число`, `${random_2}`);
  let result;

  result = function compare(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  };
  let text =
    result(a, b) === 0 ? "равно" : result(a, b) === 1 ? "больше" : " меньше";

  let view = ` Число ${a} ${text} числа ${b} результат ${result(a, b)} `;
  document.getElementById("task1").innerHTML = view;
}

// 2 Написать функцию, которая вычисляет факториал переданного ей числа.

function task2() {
  let random_1 = Math.floor(Math.random() * 10);
  let x = +prompt("Ведите число", `${random_1}`);
  if (isNaN(x)) {
    return alert("!!!Error. Введите только число!!!");
  } else x;

  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }

  let view = `Для числа ${x} факториал равен ${factorial(x)}.`;
  document.getElementById("task2").innerHTML = view;
}

// 3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
//  Например: цифры 1, 4, 9 превратятся в число 149.

function task3() {
  let random_1 = Math.floor(Math.random() * 100);
  let numb;
  let arr = [];
  let numb_sub = +prompt(`Сколько Вы хотите ввести чисел`, `3`);
  if (isNaN(numb_sub)) {
    return alert("!!!Error. Введите только число!!!");
  } else numb_sub;

  for (let i = 1; i <= numb_sub; i++) {
    numb = prompt(`${i}. Введите число`, `${random_1 * i}`);
    if (isNaN(numb)) {
      return alert("!!!Error. Введите только число!!!");
    } else numb;

    arr.push(numb);
  }
  let view = `Вы ввели числа:
  <br>
  ${arr.join(" | ")}
  <br><br>
  результат получился такой:
  <br> ${arr.join("")}`;
  document.getElementById("task3").innerHTML = view;
}

// 4 Написать функцию, которая принимает длину и ширину прямоугольника
// и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function task4() {
  let random_1 = Math.floor(Math.random() * 100);
  let random_2 = Math.floor(Math.random() * 10);
  let a, b;
  a = prompt(`Введите длину или ширину прямоугольника`, `${random_1}`);
  if (isNaN(a)) {
    return alert("!!!Error. Введите только число!!!");
  } else a;
  b = prompt(`Введите длину или ширину прямоугольника`, `${random_2}`);
  if (isNaN(b)) {
    return alert("!!!Error. Введите только число!!!");
  } else b;

  function square(a, b) {
    if (a == 0) {
      return b ** 2;
    } else if (b == 0) {
      return a ** 2;
    } else {
      return a * b;
    }
  }

  let figure =
    a == 0 || b == 0 || a == b
      ? `квадрата с длиной стороны ${Math.sqrt(square(a, b))}`
      : `прямоугольника длиной ${a} и шириной ${b}`;

  let view = `Площадь ${figure} равна ${square(a, b)}.`;
  document.getElementById("task4").innerHTML = view;
}

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//  Совершенное число – это число, равное сумме всех своих собственных делителей.

function task5() {
  let random_1 = Math.floor(Math.random() * 100);
  let reducer = (accumulator, value) => accumulator + value;

  let numb;
  numb = prompt("Введите число:", `${random_1}`);
  if (isNaN(numb)) {
    return alert("!!!Error. Введите только число!!!");
  } else numb;

  let arr = [];

  for (let i = 0; i < numb; i++) {
    if (numb % i === 0) arr.push(i);
  }
  let perfect = arr.reduce(reducer);
  let perfect_sub = numb == perfect ? `` : `не `;

  let view = `Вы ввели число: ${numb} 
  <br> вот все его делители: <br>  ${arr.join("  |  ")}
  <br> сумма всех его делителей равна ${perfect}
  <br>число ${numb}  ${perfect_sub} совершенное. `;
  document.getElementById("task5").innerHTML = view;
}

// 6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
//  и выводит только те числа из диапазона, которые являются совершенными.
//   Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет

function task6() {
  let min = +prompt("Введите первое число диапазона", `0`);
  let max = +prompt("Введите второе число диапазона", `10000`);
  let temp = [];
  let min1, max1;

  temp[0] = min;
  temp[1] = max;
  if (isNaN(temp[0]) || isNaN(temp[1])) {
    return alert("!!!Error. Введите только число!!!");
  }

  if (temp[0] > temp[1]) {
    (min1 = temp[1]), (max1 = temp[0]);
  } else (min1 = temp[0]), (max1 = temp[1]);

  function task6_1(a, b) {
    let res = [];
    for (let i = a; i <= b; i++) {
      if (i == 1) {
        i = 2;
      }
      let buf = 1;
      for (let j = 2, N = parseInt(i / 2); j <= N; j++) {
        if (!(i % j)) buf += j;
      }
      if (i == buf) res.push(i);
    }
    return res.join(" | ");
  }

  let view = `Совершенные числа в диапазоне от ${min} до ${max} : 
  <br>${task6_1(min1, max1)} `;
  document.getElementById("task6").innerHTML = view;
}

// 7. Написать функцию, которая принимает время (часы, минуты, секунды)
//  и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты
//   и/или секунды не были переданы, то выводить их как 00

function task7() {
  let setTime = prompt(`Веедите время в формате 13/02/59`, `13/02/59`);

  setTime = setTime.split("/");
  setTime.length = 3;
  for (let i = 0; i <= 2; i++) {
    setTime[i] = isNaN(+setTime[i]) ? 0 : Math.abs(+setTime[i]);
    setTime[i] = setTime[i] < 10 ? "0" + Math.abs(setTime[i]) : setTime[i];
  }
  if (setTime[0] > 23) {
    return alert("Веедите время коректно (от 0 до 23ч)");
  } else setTime[0];

  if (setTime[1] > 59) {
    return alert("Веедите время коректно (от 0 до 59м)");
  } else setTime[1];

  if (setTime[2] > 59) {
    return alert("Веедите время коректно (от 0 до 59сек)");
  } else setTime[2];

  function time(hh, mm = "00", ss = "00") {
    return hh + ":" + mm + ":" + ss;
  }

  let view = `Вы ввели числа ${setTime.join(" | ")}
  <br> а получилось время : ${time(
    setTime[0],
    setTime[1],
    setTime[2]
  )} (ч:м:с)`;
  document.getElementById("task7").innerHTML = view;
}

// 8.Написать функцию, которая принимает часы,
// минуты и секунды и возвращает это время в секундах..

function task8() {
  let setTime = prompt(`Веедите время в формате 13/02/59`, `13/02/59`);

  setTime = setTime.split("/");
  setTime.length = 3;

  for (let i = 0; i <= 2; i++) {
    setTime[i] = isNaN(+setTime[i]) ? 0 : Math.abs(+setTime[i]);
    setTime[i] = setTime[i] < 10 ? "0" + Math.abs(setTime[i]) : setTime[i];
  }
  if (setTime[0] > 23) {
    return alert("Веедите время коректно (от 0 до 23ч)");
  } else setTime[0];

  if (setTime[1] > 59) {
    return alert("Веедите время коректно (от 0 до 59м)");
  } else setTime[1];

  if (setTime[2] > 59) {
    return alert("Веедите время коректно (от 0 до 59сек)");
  } else setTime[2];

  function time(hh, mm = "00", ss = "00") {
    return hh + ":" + mm + ":" + ss;
  }
  let timeView = time(setTime[0], setTime[1], setTime[2]);

  function secondTtime(hh, mm = "00", ss = "00") {
    return Number(hh * 60 * 60) + Number(mm * 60) + Number(ss * 1);
  }
  let secondView = secondTtime(setTime[0], setTime[1], setTime[2]);

  let view = `Вы ввели числа ${setTime.join(" | ")}
  <br> а получилось время : ${timeView} (ч:м:с)
  <br> что равно: ${secondView} сек`;
  document.getElementById("task8").innerHTML = view;
}

// 9. Написать функцию, которая принимает количество секунд,
//  переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function task9() {
  let random_1 = Math.floor(Math.random() * 100000);
  let seconds = +prompt("Введите время в секундах", `${random_1}`);
  if (isNaN(seconds)) {
    return alert("Введите число");
  } else seconds;

  function getSeconds(sec) {
    let arr = [];
    let h = Math.floor(sec / 3600);
    let m = Math.floor((sec - h * 3600) / 60);
    let s = sec - h * 3600 - m * 60;

    arr[0] = h;
    arr[1] = m;
    arr[2] = s;

    for (let i = 0; i <= arr.length - 1; i++) {
      arr[i] = arr[i] < 10 ? "0" + Math.abs(arr[i]) : arr[i];
    }
    return arr.join(" : ");
  }

  let view = `Вы ввели : ${seconds} сек,
  <br> в формате  «чч:мм:сс» это равно :
  <br> ${getSeconds(seconds)}`;
  document.getElementById("task9").innerHTML = view;
}
// 10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты,
//  и возвращает результат в виде строки «чч:мм:сс».
//   При выполнении задания используйте функции из предыдущих 2-х заданий:
//    сначала обе даты переведите в секунды, узнайте разницу в секундах,
//    а потом разницу переведите обратно в «чч:мм:сс»

function task10() {
  let Time1 = prompt(`Веедите время в формате 13/02/59`, `13/02/59`);
  let Time2 = prompt(`Веедите время в формате 13/02/59`, `23/15/01`);
  let diferent_sec = Math.abs(getDiferentTime(Time1) - getDiferentTime(Time2));

  function getDiferentTime(setTime) {
    setTime = setTime.split("/");
    setTime.length = 3;

    for (let i = 0; i <= 2; i++) {
      setTime[i] = isNaN(+setTime[i]) ? 0 : Math.abs(+setTime[i]);
      setTime[i] = setTime[i] < 10 ? "0" + Math.abs(setTime[i]) : setTime[i];
    }

    if (setTime[0] > 23) {
      return alert("Веедите время коректно (от 0 до 23ч)");
    } else setTime[0];

    if (setTime[1] > 59) {
      return alert("Веедите время коректно (от 0 до 59м)");
    } else setTime[1];

    if (setTime[2] > 59) {
      return alert("Веедите время коректно (от 0 до 59сек)");
    } else setTime[2];

    function secondTtime(hh, mm = "00", ss = "00") {
      return Number(hh * 60 * 60) + Number(mm * 60) + Number(ss * 1);
    }

    return secondTtime(setTime[0], setTime[1], setTime[2]);
  }

  function getSeconds(sec) {
    let arr = [];
    let h = Math.floor(sec / 3600);
    let m = Math.floor((sec - h * 3600) / 60);
    let s = sec - h * 3600 - m * 60;

    arr[0] = h;
    arr[1] = m;
    arr[2] = s;

    for (let i = 0; i <= arr.length - 1; i++) {
      arr[i] = arr[i] < 10 ? "0" + Math.abs(arr[i]) : arr[i];
    }
    return arr.join(":");
  }

  function getNormalTime(t) {
    t = t.split("/");
    for (let i = 0; i <= 2; i++) {
      t[i] = isNaN(+t[i]) ? 0 : Math.abs(+t[i]);
      t[i] = t[i] < 10 ? "0" + Math.abs(t[i]) : t[i];
    }
    function time(hh, mm = "00", ss = "00") {
      return hh + ":" + mm + ":" + ss;
    }
    return time(t[0], t[1], t[2]);
  }

  view = `Разница между временем:
  <br> ${getNormalTime(Time1)}  и  ${getNormalTime(Time2)}
  <br> ${diferent_sec} сек
  <br>что эквивалентно  ${getSeconds(diferent_sec)} («чч:мм:сс»)`;
  document.getElementById("task10").innerHTML = view;
}
