// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
//  и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//  Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let newCar = function buildAuto(
  manufacturer,
  model,
  year_issue,
  average_speed
) {
  this.manufacturer;
  this.model;
  this.year_issue;
  this.average_speed;

  this.getInfo = () =>
    `<br>
    Информация об автомобиле:
    <br>
    <br> Производитель: ${manufacturer};
    <br>Модель: ${model};
    <br>Год выпуска: ${year_issue};
    <br>Средняя скорость: ${average_speed} км\\ч;
    `;

  this.calcDistance = (n) => {
    let h = (n / average_speed) | 0;
    let m = Math.round(60 * ((n % average_speed) / average_speed));
    h = m === 0 && h % 4 === 0 ? h + (h / 4 - 1) : h + ((h / 4) | 0);

    return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
  };

  this.calcStops = (n) => {
    let stops;
    let h = (n / average_speed) | 0;
    let m = Math.round(60 * ((n % average_speed) / average_speed));
    stops = m === 0 && h % 4 === 0 ? (h / 4 - 1) | 0 : (h / 4) | 0;
    return stops;
  };
};

function task_1_1() {
  let random_1 = Math.floor(Math.random() * 100);
  let random_2 = Math.floor(Math.random() * 1000);
  let manufacturerPR = prompt(`Введите производителя авто:`, `BMW`);
  let modelPR = prompt(`Введите модель авто:`, `X6`);
  let year_issuePR = prompt(`Введите год выпуска авто: `, `2019`);
  let average_speedPR = prompt(
    `Введите среднюю скорость авто: `,
    `${random_1}`
  );
  let distance = prompt(`Введите растояние: `, `${random_2}`);

  let anyCars = new newCar(
    manufacturerPR,
    modelPR,
    year_issuePR,
    average_speedPR
  );

  let view = `${anyCars.getInfo()} 
  <br><br>Чтобы преодолеть ${distance} км со средней скоростью ${average_speedPR}  км\\ч понадобится 
  ${anyCars.calcDistance(distance)} (чч:мм), с учетом ${anyCars.calcStops(
    distance
  )} остановок`;
  document.getElementById("task_1_1").innerHTML = view;
}
;
// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

function task_2() {
  let v_display;
  let firstNumber;
  let secondNumber;
  let M, N;
  let resultUpNumber;
  let resultDownNumber;
  let random_1 = Math.floor(Math.random() * 10);
  let random_2 = Math.floor(Math.random() * 10);
  let random_3 = Math.floor(Math.random() * 10);
  let random_4 = Math.floor(Math.random() * 10);

  let a1 = +prompt("Введите числитель", `${random_1}`);
  let b1 = +prompt("Введите знаменатель", `${random_2}`);
  let a2 = +prompt("Введите числитель", `${random_3}`);
  let b2 = +prompt("Введите знаменатель", `${random_4}`);

  if (b1 == 0 || b2 == 0) {
    return alert("Error. Denominator = 0");
  }

  firstNumber = Fraction(a1, b1);
  secondNumber = Fraction(a2, b2);

  function Fraction(upNumber, downNumber) {
    return { upNumber: upNumber, downNumber: downNumber };
  }

  /**
   * Function to reduce fractions
   * @param {numerator} m
   * @param {denominator} n
   */
  let reduction = function getReduction(m, n) {
    (M = m), (N = n);

    if (M == 0) {
      return (v_display = `0`);
    } else if (M < 0) {
      for (let i = 2; i >= m; i--) {
        if (m % i === 0 && n % i === 0) (M = m / i), (N = -n / i);
      }
      return (v_display = `-${M}/${N}`);
    } else {
      for (let i = 2; i <= m; i++) {
        if (m % i === 0 && n % i === 0) (M = m / i), (N = n / i);
      }
      return (v_display = `${M}/${N}`);
    }
  };

  /**
   * Function of adding 2 fractions
   * @param {numerator} obj1
   * @param {denominator} obj2
   */
  function addFraction(obj1, obj2) {
    if (obj1.downNumber == obj2.downNumber) {
      resultDownNumber = obj1.downNumber;
      resultUpNumber = obj1.upNumber + obj2.upNumber;
    } else {
      resultUpNumber =
        obj1.upNumber * obj2.downNumber + obj2.upNumber * obj1.downNumber;
      resultDownNumber = obj1.downNumber * obj2.downNumber;
    }

    reduction(resultUpNumber, resultDownNumber);
  }

  /**
   * Subtraction function of 2 fractions
   * @param {numerator} obj1
   * @param {denominator} obj2
   */
  function delFraction(obj1, obj2) {
    if (obj1.downNumber == obj2.downNumber) {
      resultDownNumber = obj1.downNumber;
      resultUpNumber = obj1.upNumber - obj2.upNumber;
    } else {
      resultUpNumber =
        obj1.upNumber * obj2.downNumber - obj2.upNumber * obj1.downNumber;
      resultDownNumber = obj1.downNumber * obj2.downNumber;
    }

    reduction(resultUpNumber, resultDownNumber);
  }

  /**
   * Multiplication function of 2 fraction objects
   * @param {numerator} obj1
   * @param {denominator} obj2
   */
  function multiFraction(obj1, obj2) {
    resultUpNumber = obj1.upNumber * obj2.upNumber;
    resultDownNumber = obj1.downNumber * obj2.downNumber;
    reduction(resultUpNumber, resultDownNumber);
  }

  /**
   * Function of dividing 2 fractions
   * @param {numerator} obj1
   * @param {denominator} obj2
   */
  function divFraction(obj1, obj2) {
    resultUpNumber = obj1.upNumber * obj2.downNumber;
    resultDownNumber = obj1.downNumber * obj2.upNumber;
    reduction(resultUpNumber, resultDownNumber);
  }

  addFraction(firstNumber, secondNumber);
  let view1 = `Сложение:   ${a1}/${b1} + ${a2}/${b2}  = ${v_display}`;
  document.getElementById("task_21").innerHTML = view1;

  delFraction(firstNumber, secondNumber);
  let view2 = `Вычитанние: ${a1}/${b1} - ${a2}/${b2}  =  ${v_display}`;
  document.getElementById("task_22").innerHTML = view2;

  multiFraction(firstNumber, secondNumber);
  let view3 = `Умножение:  ${a1}/${b1} * ${a2}/${b2}  =  ${v_display}`;
  document.getElementById("task_23").innerHTML = view3;

  divFraction(firstNumber, secondNumber);
  let view4 = `Деление:    ${a1}/${b1} &#247; ${a2}/${b2}  =  ${v_display}`;
  document.getElementById("task_24").innerHTML = view4;
}
;
// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов.

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
//  Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

function task_3() {
  let random_1 = Math.floor(Math.random() * 10);
  let random_2 = Math.floor(Math.random() * 100);
  let random_3 = Math.floor(Math.random() * 10);

  let Time1 = prompt(
    `Введите время в формате 13:02:59 («чч:мм:сс»)`,
    `00:00:00`
  );

  let Time2 = prompt(
    `Введите  \n  часы : минуты : секунды`,
    `${random_1}:${random_2}:${random_3}`
  );
  let diferent_sec = Math.abs(getDiferentTime(Time1) + getDiferentTime(Time2));

  /**
   * Function counts time differences in seconds
   * @param {setTime}
   */
  function getDiferentTime(setTime) {
    setTime = setTime.split(":");
    setTime.length = 3;

    for (let i = 0; i <= 2; i++) {
      setTime[i] = isNaN(+setTime[i]) ? 0 : Math.abs(+setTime[i]);
      setTime[i] = setTime[i] < 10 ? "0" + Math.abs(setTime[i]) : setTime[i];
    }

    function secondTtime(hh, mm = "00", ss = "00") {
      return Number(hh * 60 * 60) + Number(mm * 60) + Number(ss * 1);
    }

    return secondTtime(setTime[0], setTime[1], setTime[2]);
  }

  /**
   * Function converts seconds to hours minutes and seconds
   * @param {sec}
   */
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

  /**
   * Function formats time to the correct format
   * @param {Time}
   */
  function getNormalTime(t) {
    t = t.split(":");
    for (let i = 0; i <= 2; i++) {
      t[i] = isNaN(+t[i]) ? 0 : Math.abs(+t[i]);
      t[i] = t[i] < 10 ? "0" + Math.abs(t[i]) : t[i];
    }
    function time(hh, mm = "00", ss = "00") {
      return hh + ":" + mm + ":" + ss;
    }
    return time(t[0], t[1], t[2]);
  }

  view = `Вы ввели время: ${getNormalTime(Time1)} («чч:мм:сс») 
  <br>к нему добавили: ${getNormalTime(Time2)} («чч:мм:сс»)
  <br>получилось: ${getSeconds(diferent_sec)} («чч:мм:сс»)`;
  document.getElementById("task_3").innerHTML = view;
}
;
