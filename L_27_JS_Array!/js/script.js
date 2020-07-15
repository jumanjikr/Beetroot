// 1. Создать массив «Список покупок». Каждый элемент массива является объектом,
//  который содержит название продукта, необходимое количество и куплен или нет.
//   Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
//  необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

function task1() {
  let arr = [
    { name: "Apple", count: 3, bought: true },
    { name: "Orange", count: 5, bought: false },
    { name: "Strawberry", count: 7, bought: true },
    { name: "Potato", count: 9, bought: false },
    { name: "Blackberry", count: 5, bought: true },
    { name: "Coconut", count: 3, bought: false },
    { name: "Muesli", count: 5, bought: true },
    { name: "Milk", count: 2, bought: false },
  ];

  let res = [...arr];

  let print = () => {
    for (let i in res) {
      let p = document.createElement("p");
      p.innerHTML = `<br>Номер позиции #${+i + 1}:
      <br>Название продукта: ${res[i].name} 
      <br>Количество: ${res[i].count}
      <br>Статус (куплен / не куплен): ${res[i].bought};`;
      document.getElementById("task1").append(p);
    }
  };

  let compare = (a, b) => {
    if (a.bought === false && b.bought === true) return -1;
    if (a.bought === true && b.bought === false) return 1;
    return 0;
  };

  let addPurchase = (name, count) => {
    let b = {};
    b.name = name;
    b.count = count;
    b.bought = false;
    for (let i in res) {
      let nname = res[i].name;
      if (nname.toLowerCase() == name.toLowerCase()) {
        res[i].count += count;
        res[i].bought = false;
        break;
      } else if (nname.toLowerCase() != name.toLowerCase()) {
        res.unshift(b);
        break;
      }
    }
    return res;
  };

  function buyIt(name, count) {
    res.forEach((i) => {
      if (i.name.toLowerCase() === name.toLowerCase()) {
        i.bought = true;
        i.count += count;
      }
    });
  }
  res.sort(compare);
  print(buyIt("milk", 6));
  addPurchase("Meat", 6);
}
;
/*
Создать массив, описывающий чек в магазине. 
Каждый элемент массива состоит из названия 
товара, количества и цены за единицу товара. 
Написать следующие функции:

    Распечатка чека на экран;
    Подсчет общей суммы покупки;
    Получение самой дорогой покупки в чеке;
    Подсчет средней стоимости одного товара в чеке.
*/
function task2() {
  let list = [
    { name: "Apple", count: 10, price: 9.99 },
    { name: "Orange", count: 6, price: 5.99 },
    { name: "Coconut", count: 4, price: 15.99 },
    { name: "Meat", count: 6, price: 6.99 },
  ];

  let res = [...list];

  let print = () => {
    for (let i in res) {
      let p = document.createElement("p");
      p.innerHTML = `<br>Позиция #${+i + 1}:
      <br>Название продукта: ${res[i].name} 
      <br>Количество: ${res[i].count}
      <br>Цена: ${res[i].price}$`;
      document.getElementById("task2").append(p);
    }
  };

  let calc = () => {
    let s = 0;
    res.forEach((i) => {
      s += i.price * i.count;
    });
    let p = document.createElement("p");
    p.innerHTML = `Общая сумма покупки: ${s}$`;
    document.getElementById("task2").append(p);
  };

  let maxPrice = () => {
    let max = 0;

    res.forEach((i) => {
      if (max < i.price) {
        max = i.price;
      }
    });
    res.forEach((i) => {
      if (max == i.price) {
        let p = document.createElement("p");
        p.innerHTML = `Самая дорогая покупка в чеке: 
        <br>Название продукта: ${i.name} 
        <br>Количество: ${i.count} 
        <br>Цена: ${i.price}$`;
        document.getElementById("task2").append(p);
      }
    });
  };

  let avaragePrice = () => {
    let s = 0;
    let av = 1;
    res.forEach((i) => {
      s += i.price;
    });
    av = s / res.length;
    p = document.createElement("p");
    p.innerHTML = `Cредняя стоимость одного товара в чеке: ${av.toFixed(2)}$`;
    document.getElementById("task2").append(p);
  };

  print();
  calc();
  maxPrice();
  avaragePrice();
}
;
//3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и
// значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит
// этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег
// атрибут style со всеми стилями, перечисленными в массиве.

function task3() {
  const arr = [
    { name: "text-align", value: "center" },
    { name: "text-transform", value: "capitalize" },
    { name: "text-overflow", value: "ellipsis" },
    { name: "font-size", value: "36px" },
    { name: "color", value: "#555" },
    { name: "letter-spacing", value: "1.25" },
    { name: "font-weight", value: "300" },
    { name: "line-height", value: "1" },
    { name: "font-style", value: "oblique" },
    { name: "font-stretch", value: "extra-expanded" },
    { name: "margin-top", value: "200px" },
  ];

  const text = `Lorem ipsum dolor sit amet, 
  consectetur adipisicing elit. 
  Reprehenderit, rem sit eaque 
  temporibus sint explicabo. 
  Quod placeat quos inventore 
  quas magni architecto, 
  cupiditate assumenda enim, 
  eum exercitationem ex sunt iste?`;

  let styleText = (arr, text) => {
    document.write('<p style = "');

    arr.forEach((i) => {
      document.write(i.name + ":" + i.value + ";");
    });

    document.write(
      '">' +
        text +
        "</p>" +
        "<br>" +
        `<input style="margin: 0 50%;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 18px;
        padding: 10px;
        background-color: rgba(128,128,128,.295);
        border: none;
        box-shadow: 0 5px 15px rgba(0,0,0,.25), 0 2px 5px rgba(0,0,0,.22);"
        type="button" value="Refresh Page" onClick="location.href=location.href">`
    );
  };

  styleText(arr, text);
}
;
//4. Создать массив аудиторий академии.
// Объект-аудитория состоит из названия,
// количества посадочных мест (от 10 до 20)
// и названия факультета, для которого
// она предназначена. Написать несколько
// функций для работы с ним

// Вывод на экран всех аудиторий;

// Вывод на экран аудиторий для указанного факультета;

// Вывод на экран только тех аудиторий, которые подходят для переданной группы.

// Объект-группа состоит из названия, количества студентов и названия факультета;

// Функция сортировки аудиторий по количеству мест;

// Функция сортировки аудиторий по названию (по алфавиту).

function task4() {
  const arr = [
    { name: "321", places: "25", faculty: "Software" },
    { name: "316", places: "15", faculty: "Cybernetics" },
    { name: "312", places: "30", faculty: "Techical Cybernetics" },
    { name: "300", places: "10", faculty: "Engineering" },
    { name: "212", places: "25", faculty: "Economic cybernetics" },
    { name: "115", places: "30", faculty: "Software" },
    { name: "100", places: "10", faculty: "Languages" },
    { name: "110", places: "10", faculty: "Techical Cybernetics" },
    { name: "404", places: "35", faculty: "Software" },
  ];

  const group = {
    name: "2St1",
    count: "28",
    faculty: "Software",
  };

  const arrSortPlace = () => {
    arr.sort((a, b) => {
      return a.places - b.places;
    });
  };

  const arrSortName = () => {
    arr.sort((a, b) => {
      return a.name - b.name;
    });
  };

  const showClassrooms = () => {
    let show = [];
    arr.forEach((i) => {
      show.push(i.name);
    });
    return `Все доступные аудитории: ${show.join(" | ")}.`;
  };

  const showFacultyRooms = (arr, faculty) => {
    let show = [];

    arr.forEach((i) => {
      if (i.faculty.toString().toLowerCase() == faculty.toLowerCase()) {
        show.push(i.name);
      }
    });

    return `Все аудитории для факультета ${faculty} : ${show.join(" | ")}.`;
  };

  const showGroupRooms = (arr, group) => {
    let show = [];

    arr.forEach((i) => {
      if (
        group.faculty.toString().toLowerCase() ==
          i.faculty.toString().toLowerCase() &&
        (group.count < i.places || group.count == i.places)
      ) {
        show.push(i.name);
      }
    });

    return `Для группы ${group.name} (${group.count} человек) факультета ${
      group.faculty
    } аудитории: ${show.join(" | ")}.`;
  };

  const faculty = "Software";

  const mainDiv = document.getElementById("task4");

  const show = (func) => {
    const div = document.createElement("p");
    div.textContent = func;
    mainDiv.appendChild(div);
  };

  let print = () => {
    arr.forEach((i) => {
      let p = document.createElement("p");
      p.innerHTML = `
      <br>Название аудитории: ${i.name}
      <br>Количество мест: ${i.places}
      <br>Факультет: ${i.faculty};`;
      document.getElementById("task4").append(p);
    });
  };

  print(arrSortPlace(arr));

  show(arrSortName(arr));

  show(showClassrooms(arr));

  show(showFacultyRooms(arr, faculty));

  show(showGroupRooms(arr, group));
}
;
