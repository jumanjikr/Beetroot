// 1 Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!»

function CurentName() {
  let userName;
  let person = prompt("Введите ваше имя:", "Иван");
  userName = `Привет ${person} !`;
  document.getElementById("user_name").innerHTML = userName;
}

// 2 Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
// Текущий год укажите в коде как константу.
function CurentAge() {
  const YEAR = 2020;
  let userAge;
  let year;
  let year_sub;
  let personAdge = +prompt("Введите год вашего рождения :", "1982");
  if (isNaN(personAdge)) {
    return alert("!!!Error. Введите только число!!!");
  } else personAdge;
  year = YEAR - personAdge;

  year_sub =
    year <= 20 && year >= 10
      ? "лет"
      : year % 10 <= 1 && year % 10 > 0
      ? "год"
      : year % 10 <= 4 && year % 10 >= 2
      ? "года"
      : "лет";

  userAge = `Ваш возвраст:  ${year} ${year_sub} !`;
  document.getElementById("user_age").innerHTML = userAge;
}
// 3 Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

function Square() {
  let square;
  let square_view;
  let square_match = parseInt(prompt("Введите длину стороны квадрата:", "44"));
  if (isNaN(square_match)) {
    return alert("!!!Error. Введите только число!!!");
  } else square_match;
  square = square_match * 4;
  square_view = `Периметр квадрата со строной ${square_match} равен ${square} .`;
  document.getElementById("square").innerHTML = square_view;
}

// 4 Запросите у пользователя радиус окружности и выведите площадь такой окружности.

function Square_curcl() {
  let square;
  let square_view;
  let square_match = parseInt(prompt("Введите длину стороны квадрата:", "12"));
  if (isNaN(square_match)) {
    return alert("!!!Error. Введите только число!!!");
  } else square_match;
  square = Math.PI * square_match * 2;
  square_view = `Площадь окружности с радиусом ${square_match} равена ${square.toFixed(
    2
  )}. `;
  document.getElementById("square_curcl").innerHTML = square_view;
}

// 5 Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
//  Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

function Speed() {
  let speed;
  let time;
  let speed_view;
  let speed_distance = parseInt(
    prompt("Введите растояние до следующего пункта прибытия: (км)", "50")
  );
  if (isNaN(speed_distance)) {
    return alert("!!!Error. Введите только число!!!");
  } else speed_distance;
  let speed_time = parseInt(
    prompt("Введите время за которое хотите добратся (час):", "2")
  );
  if (isNaN(speed_time)) {
    return alert("!!!Error. Введите только число!!!");
  } else speed_time;

  time = speed_time <= 1 ? "час" : speed_time <= 4 ? "часа" : "часов";

  speed = speed_distance / speed_time;
  speed_view = `Чтобы преодолеть ${speed_distance}км за ${speed_time} ${time} вы должны двигатся со скоростью ${speed.toFixed(
    2
  )}км/ч.`;
  document.getElementById("speed").innerHTML = speed_view;
}

// 6 Реализуйте конвертор валют.
//  Пользователь вводит доллары, программа переводит в евро.
//   Курс валюты храните в константе.

function Exchange() {
  const DIFERENT = 1.12;
  let dollar;
  let euro;
  dollar = parseInt(prompt("Ведите сумму в долларах :", "1000"));
  if (isNaN(dollar)) {
    return alert("!!!Error. Введите только число!!!");
  } else dollar;
  euro = dollar / DIFERENT;
  euro_view = `${dollar}${String.fromCharCode(36)} равно ${euro.toFixed(
    1
  )}${String.fromCharCode(8364)}, по курсу ${DIFERENT}.`;
  document.getElementById("exchange").innerHTML = euro_view;
}

// 7 Пользователь указывает объем флешки в Гб.
//  Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

function Flash() {
  const FILE = 0.82;
  let flash;
  flash = parseInt(prompt("Ведите объем Вашей флешки (Gb) :", "32"));
  if (isNaN(flash)) {
    return alert("!!!Error. Введите только число!!!");
  } else flash;
  flash_match = flash / FILE;
  flash_view = ` На Вашу флешку объемом ${flash}Gb  поместится ${Math.floor(
    flash_match
  )} файлов размером ${FILE * 1000}mb.`;
  document.getElementById("flash").innerHTML = flash_view;
}

// 8 Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
//  Программа выводит, сколько шоколадок может купить пользователь,
//   и сколько сдачи у него останется.

function Shop() {
  let money;
  let chocolade;
  money = parseInt(prompt("Ведите сколько у вас в кошельке (грн) :", "500"));
  if (isNaN(money)) {
    return alert("!!!Error. Введите только число!!!");
  } else money;
  chocolade = parseInt(prompt("Ведите цену шоколадки (грн) :", "21"));
  if (isNaN(chocolade)) {
    return alert("!!!Error. Введите только число!!!");
  } else chocolade;

  number_chocolade = Math.floor(money / chocolade);
  number_money = Math.floor(money % chocolade);

  choc =
    number_chocolade <= 1
      ? "шоколадку"
      : number_chocolade <= 4
      ? "шоколадки"
      : "шоколадок";

  chocolade_view = `На ваши ${money}грн, Вы сможете приобрести ${number_chocolade} ${choc}.`;
  money_view = `И у вас остенется сдача ${number_money}грн.`;

  document.getElementById("shop__chocolade").innerHTML = chocolade_view;
  document.getElementById("shop__balance").innerHTML = money_view;
}

// 9 Запросите у пользователя трехзначное число и выведите его задом наперед.
//  Для решения задачи вам понадобится оператор % (остаток от деления).

function Number_revers() {
  let number;

  number = parseInt(prompt("Введите любое число:", "123456789"));
  if (isNaN(number)) {
    return alert("!!!Error. Введите только число!!!");
  } else number;

  function revert() {
    let x = 0;
    while (number > 0) {
      x = x * 10 + (number % 10);
      number = ~~(number / 10);
    }
    return x;
  }

  number_view = `Вы ввели число  ${number}, мы его перевернули и получили ${revert()} .`;
  document.getElementById("number").innerHTML = number_view;
}

// 10 Пользователь вводит сумму вклада в банк на 2 месяца,
//  с процентной ставкой депозита 5% годовых.
//   Вывести сумму начисленных процентов.

function Deposit() {
  let sum;
  let percent;
  let month;
  sum = parseInt(prompt("Ведите сумму вклада в банк (грн) :", "5000"));
  if (isNaN(sum)) {
    return alert("!!!Error. Введите только число!!!");
  } else sum;
  month = parseInt(prompt("Ведите колличество месяцев :", "12"));
  if (isNaN(month)) {
    return alert("!!!Error. Введите только число!!!");
  } else month;
  percent = (5 / 12) * month;

  percent_view = `Если положите ${sum}грн на ${month} мес., сумма процентов от депозита составит ${(
    (sum * percent) /
    100
  ).toFixed(2)}грн.`;
  document.getElementById("deposit").innerHTML = percent_view;
}
