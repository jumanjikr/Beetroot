// 1 Запросить у пользователя его возраст и определить, кем он является:
//  ребенком (0–12), подростком (12–18), взрослым (18_60)
//  или пенсионером (60– ...).
function getAge() {
  const YEAR = 2020;
  const USER_AGE = document.getElementById("user_age");

  let personAdge = +prompt("Введите год вашего рождения :", "1980");

  if (isNaN(personAdge)) {
    return alert("!!!Error. Введите только число!!!");
  }

  if (
    parseInt(personAdge) != personAdge ||
    personAdge <= 1900 ||
    personAdge > 2020
  ) {
    alert("Вы ввели не коректное число (меньше 1900 г или больше 2020 г)");
    return;
  }

  let year = YEAR - personAdge;

  let year_sub =
    year <= 20 && year >= 10
      ? "лет"
      : year % 10 <= 1 && year % 10 > 0
      ? "год"
      : year % 10 <= 4 && year % 10 >= 2
      ? "года"
      : "лет";

  let age =
    year <= 12
      ? "ребенок"
      : year <= 18
      ? "подросток"
      : year <= 59
      ? "взрослый"
      : "пенсионер";

  let age_sub = year <= 18 ? "еще" : "уже";

  let userAge = `Ваш возвраст:  ${year} ${year_sub}, и Вы ${age_sub} ${age} !`;

  if (USER_AGE) {
    USER_AGE.innerHTML = userAge;
  }
}
// 2 Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
//  который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

function getSymboll() {
  let symbol = prompt("Ведите число от 0 до 9:", "5");

  const SYMBOL = document.getElementById("symbol");

  if (isNaN(symbol)) {
    return alert("!!!Error. Введите только число!!!");
  }

  if (symbol.length !== 1) {
    return alert("!!!Error. Ведите число от 0 до 9!!!");
  }

  let i = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];

  let symbol_view = `Вы ввели число: ${symbol}, а оно соотвецтвует символу: " ${i[symbol]} " на клавиатуре.`;

  if (SYMBOL) {
    SYMBOL.innerHTML = symbol_view;
  }
}

// 3 Запросить у пользователя трехзначное число и проверить,
//  есть ли в нем одинаковые цифры.

function getNumbers() {
  const NUMBER = document.getElementById("numbers");
  1;
  let numbers = prompt("Введите трехзначное число:", "222");
  if (isNaN(numbers)) {
    return alert("!!!Error. Введите только число!!!");
  }

  if (numbers.length !== 3) {
    return alert("!!!Error. Введите 3х значное число!!!");
  }

  let numb =
    numbers[0] === numbers[1] ||
    numbers[1] === numbers[2] ||
    numbers[2] === numbers[0]
      ? "есть повторяющиеся числа"
      : "нет повторяющихся  чисел";

  let numbers_view = `Вы ввели число ${numbers} и в нем ${numb} . `;

  if (NUMBER) {
    NUMBER.innerHTML = numbers_view;
  }
}

// 4 Запросить у пользователя год и проверить, високосный он или нет.
//  Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

function getLeap_year() {
  const LEAP_YEAR = document.getElementById("leap_year");

  let year = parseInt(prompt("Введите год", "2020"));

  if (isNaN(year)) {
    return alert("!!!Error. Введите только число!!!");
  }

  if (year == 0) {
    return alert("!!!Error. Введите больше число!!!");
  }

  let year_match = year % 4 == 0 ? "" : "не";
  let year_view = `Вы ввели: ${year} год и он ${year_match} высокосный.`;

  if (LEAP_YEAR) {
    LEAP_YEAR.innerHTML = year_view;
  }
}

// 5 Запросить у пользователя  число и определить,
//  является ли оно палиндромом.

function getPalindrom() {
  const PALINDROM = document.getElementById("palindrom");

  let str = prompt("Введите любое натуральное число", "12344321");

  if (isNaN(str)) {
    alert("Вы ввели не число");
    return;
  }

  if (parseInt(str) != str || str <= 0) {
    alert("Вы ввели не натуральное число");
    return;
  }

  let j = 0,
    le = str.length - 1,
    pal = true;
  while (j <= le - j) {
    pal = pal && str.charAt(j) == str.charAt(le - j);
    j++;
  }

  let str_view = `Введённое число: ${str} ${
    pal ? " " : " не "
  } является палиндромом.`;

  if (PALINDROM) {
    PALINDROM.innerHTML = str_view;
  }
}

// 6 Написать конвертор валют. Пользователь вводит количество USD,
//  выбирает, в какую валюту хочет перевести EUR, UAN или AZN,
//   и получает в ответ соответствующую сумму.

function getExchange() {
  const DIFERENT_EUR = 0.93;
  const DIFERENT_UAN = 27.4;
  const DIFERENT_AZN = 0.59;

  const EXCHANGE = document.getElementById("exchange");

  let EUR = 1;
  let UAN = 2;
  let AZN = 3;

  let dollar = parseInt(prompt("Ведите сумму в долларах :", "1000"));
  if (isNaN(dollar) || dollar < 0) {
    return alert("!!!Error. Введите только число!!!");
  } else dollar;

  let exсhange = prompt(
    "Выберите валюту в которую перевести Ваши $ :",
    "Первести в EUR введите 1, UAN - 2 или AZN - 3 "
  );

  if (isNaN(exсhange)) {
    return alert("!!!Error. Введите только число!!!");
  }
  if (exсhange < 1 || exсhange > 3) {
    return alert("!!!Error. Введите только 1, 2 или 3 !!!");
  }

  let exсhange_match =
    exсhange == 1
      ? (DIFERENT_EUR * dollar).toFixed(2) + "EUR"
      : exсhange == 2
      ? (DIFERENT_UAN * dollar).toFixed(2) + "UAN"
      : (DIFERENT_AZN * dollar).toFixed(2) + "AZN";

  let euro_view = `На ваши ${dollar}$ Вы сможете купить ${exсhange_match}`;

  if (EXCHANGE) {
    EXCHANGE.innerHTML = euro_view;
  }
}

// 7 Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
//  от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

function getDiscount() {
  const DISCOUNT_3 = 0.03;
  const DISCOUNT_5 = 0.05;
  const DISCOUNT_7 = 0.07;

  const DISCOUNT = document.getElementById("discount");

  let price = parseInt(prompt("Ведите сумму вашей покупки (грн):", "2000"));

  if (isNaN(price)) {
    return alert("!!!Error. Введите только число!!!");
  }

  let price_match =
    price >= 200 && price <= 300
      ? price - price * DISCOUNT_3
      : price >= 301 && price <= 500
      ? price - price * DISCOUNT_5
      : price > 501
      ? price - price * DISCOUNT_7
      : price;

  let price_discount =
    price >= 200 && price <= 300
      ? "3%"
      : price >= 301 && price <= 500
      ? "5%"
      : price > 501
      ? "7%"
      : "";

  let discount_view = `Сумма Вашей покупки составляет : ${price} грн, с учетом вашей ${price_discount} скидки к оплате : ${price_match.toFixed(
    0
  )} грн `;

  if (DISCOUNT) {
    DISCOUNT.innerHTML = discount_view;
  }
}

// 8 Запросить у пользователя длину окружности и периметр квадрата.
// Определить, может ли такая окружность поместиться в указанный квадрат.

function getSquare() {
  const SQUARE = document.getElementById("square");

  let circle = parseInt(prompt("Введите длину окружности:", "44"));

  if (isNaN(circle)) {
    return alert("!!!Error. Введите только число!!!");
  }

  let perimetr = parseInt(prompt("Введите периметр квадрата:", "120"));
  if (isNaN(perimetr)) {
    return alert("!!!Error. Введите только число!!!");
  }

  let circle_radius = circle / (2 * Math.PI);
  let perimetr_match = perimetr / 8;

  let square = circle_radius >= perimetr_match ? "не поместится" : "поместится";
  let square_view = `В квадрат со стороной ${(perimetr_match * 2).toFixed(
    2
  )}  ${square} окружность  диаметром ${(circle_radius * 2).toFixed(2)}.`;

  if (SQUARE) {
    SQUARE.innerHTML = square_view;
  }
}

// 9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
//  За каждый правильный ответ начисляется 2 балла.
//   После вопросов выведите пользователю количество набранных баллов.

function getQuiz() {
  const QUIZ = document.getElementById("quiz");

  let a = +prompt(
    "Какая maх скорость автомобиля Tesla X: 1 - 280км/ч;  2 - 250км/ч;  3 - 300км/ч.",
    "1-2-3"
  );

  let b = +prompt(
    "Какая планета Солнечной системы не имеет спутников: 1 - Земля;  2 - Марс;  3 - Меркурий.",
    "1-2-3"
  );

  let c = +prompt(
    "Когда занончится карантин: 1 - Завтра;  2 - Через месяц;  3 - Никто не знает.",
    "1-2-3"
  );

  let d = [2, 3, 3]; //Ответы на вопросы

  let a_1 = d[0] === a ? 2 : null;
  let b_1 = d[1] === b ? 2 : null;
  let c_1 = d[2] === c ? 2 : null;
  let answer = a_1 + b_1 + c_1;

  let points = answer == 0 || answer == 6 ? "баллов" : "балла";

  let points_calc =
    answer == 0
      ? "не на один вопрос"
      : answer == 2
      ? "на один вопрос"
      : answer == 4
      ? "на два вопроса"
      : "на три вопроса";
  let quize_view = `Из 3х вопросов Вы правильно ответили ${points_calc} и набрали ${answer} ${points} .`;

  if (QUIZ) {
    QUIZ.innerHTML = quize_view;
  }
}

// 10 Запросить дату (день, месяц, год) и вывести следующую за ней дату.
//  Учтите возможность перехода на следующий месяц, год, а также високосный год.

function getDays() {
  const DAYS = document.getElementById("days");

  function get(data, day) {
    data = data.split("/");
    data = new Date(data[2], +data[1] - 1, +data[0] + day, 0, 0, 0, 0);
    data = [data.getDate(), data.getMonth() + 1, data.getFullYear()];
    data = data.join("/").replace(/(^|\/)(\d)(?=\/)/g, "$10$2");
    return data;
  }
  let data = prompt("Ведите дату в указаном формате", "29/02/2020");

  let day = +prompt(
    "Введите количество дней, которое нужно добавить к этой дате",
    "1"
  );

  let day_sub =
    day <= 20 && day >= 10
      ? "дней"
      : day % 10 <= 1 && day % 10 > 0
      ? "день"
      : day % 10 <= 4 && day % 10 >= 2
      ? "дня"
      : "дней";

  let days_view = `Вы ввели дату: ${data}, <br> если к ней прибавить ${day} ${day_sub} , <br> то мы получим такую дату: ${get(
    data,
    day
  )}.`;
  if (DAYS) {
    DAYS.innerHTML = days_view;
  }
}
