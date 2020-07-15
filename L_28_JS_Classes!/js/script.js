//1. Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
//   поле, хранящее радиус окружности;
//   get-свойство, возвращающее радиус окружности;
//   set-свойство, устанавливающее радиус окружности;
//   get-свойство, возвращающее диаметр окружности;
//   метод, вычисляющий площадь окружности;
//   метод, вычисляющий длину окружности.

function task1() {
  class Ring {
    constructor(r) {
      this.r = r;
    }
    get radius() {
      return this.r;
    }
    set radius(r) {
      this.r = r;
    }
    get diameter() {
      return this.r * 2;
    }

    area() {
      return Math.PI * this.r * this.r;
    }
    circumference() {
      return Math.PI * this.r * 2;
    }
  }

  let item = prompt("Введите число", "7");

  let ring = new Ring(item);

  let p = document.createElement("p");
  p.innerHTML = `Радиус окружности : ${(ring.radius = item)};
  <br>Диаметр окружности : ${ring.diameter};
  <br>Площадь окружности : ${ring.area().toFixed(2)};
  <br>Длина окружности : ${ring.circumference().toFixed(2)}.`;
  document.getElementById("task1").append(p);
}
;
// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

//     поле, которое хранит цвет маркера;
//     поле, которое хранит количество чернил в маркере (в процентах);

//     метод для печати (метод принимает строку
//      и выводит текст соответствующим цветом;
//      текст выводится до тех пор, пока в маркере
//      есть чернила; один не пробельный символ –
//      это 0,5% чернил в маркере).

// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов.

function task2() {
  class Marker {
    constructor(c, p) {
      this.c = c;
      this.p = p;
    }
    get markerProps() {
      return [this.c, this.p];
    }

    set markerProps(newProps) {
      [this.c, this.p] = [...newProps];
    }

    print(line) {
      let t = document.getElementById("task2");
      for (let i = 0; i < line.length; i++) {
        if (this.p != 0) {
          if (line[i] == " ") {
            this.p += 0.5;
          }
          t.innerHTML += line[i];
          t.style.color = this.c;
          this.p -= 0.5;
        } else {
          let p = document.createElement("p");
          p.innerHTML = `Marker is over`;
          document.getElementById("task21").append(p);
          break;
        }
      }
    }
  }

  class FilledMarker extends Marker {
    fill(p) {
      if (p > 100) {
        p = 100;
      } else {
        this.p += p;
      }
    }
  }

  let numb_full = +prompt("Введите на сколько заправлены чернила (%):", "30");
  if (isNaN(numb_full)) {
    return alert("!!!Error. Введите только число!!!");
  } else numb_full;

  let marker = new FilledMarker("#838", numb_full);

  let numb_fill = +prompt(
    "Введите на сколько нужно дозаправить чернила (%):",
    "30"
  );
  if (isNaN(numb_fill)) {
    return alert("!!!Error. Введите только число!!!");
  } else numb_fill;

  marker.fill(numb_fill);

  const text_fish = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere dolorum eveniet ullam id, esse laboriosam voluptatem ad ea hic est exercitationem quas repellendus aliquam in voluptas ratione voluptatibus assumenda.`;
  marker.print(text_fish);
}
;
//3. Реализовать класс Employee, описывающий
// работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации
// HTML-кода таблицы со списком работников банка.
// Массив работников необходимо передавать через
// конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и
// вывести на экран результат
// работы метода getHtml().

function task3() {
  const mainDiv = document.getElementById("task3");

  const tableDiv = document.createElement("div");
  tableDiv.setAttribute("id", "content__tableDiv");
  tableDiv.className = "content__tableDiv";

  const tableTag = document.createElement("table");
  tableTag.setAttribute("id", "content__table");
  tableTag.className = "content__table";

  tableDiv.append(tableTag);
  mainDiv.append(tableDiv);

  class Employee {
    constructor(name, position, department, salary) {
      this.name = name;
      this.position = position;
      this.department = department;
      this.salary = salary;
    }
  }
  const arrEmp = [
    new Employee("John Doe", "Manager", "Sales", 5000),
    new Employee("Bill Freeman", "Manager", "Sales", 5000),
    new Employee("Uno Dirck", "Manager", "Sales", 5000),
    new Employee("Erick Rapid", "Manager", "Sales", 5000),
    new Employee("Chris Rea", "Manager", "Sales", 5000),
    new Employee("Tommy Lee", "Manager", "Sales", 5000),
    new Employee("Jeck Ward", "DevOps Engineer", "DevOps", 3500),
    new Employee(
      "Rick Depper",
      ".Net Senior Developer",
      "Desktop Solutions",
      4000
    ),
    new Employee("Neo Matrix", "Team Lead", "Desktop Solutions", 5000),
    new Employee(
      "Trinity Matrix",
      ".Net Senior Developer",
      "Desktop Solutions",
      4000
    ),
    new Employee(
      "Rick Grouy",
      ".Net Junior Developer",
      "Desktop Solutions",
      1000
    ),
    new Employee(
      "George McCalister",
      ".Net Junior Developer",
      "Desktop Solutions",
      1000
    ),
    new Employee(
      "Fred Durst",
      ".Net Junior Developer",
      "Desktop Solutions",
      1000
    ),
    new Employee(
      "Piter Parker",
      ".Net Middle Developer",
      "Desktop Solutions",
      4000
    ),
    new Employee(
      "Bro Somebody",
      ".Net Senior Developer",
      "Desktop Solutions",
      4000
    ),
    new Employee(
      "Merlin Mysterier",
      ".Net Middle Developer",
      "Desktop Solutions",
      4000
    ),
    new Employee(
      "Harry Potter",
      ".Net Senior Developer",
      "Desktop Solutions",
      4000
    ),
    new Employee(
      "Norton Commander",
      ".Net Middle Developer",
      "Desktop Solutions",
      4000
    ),
    new Employee(
      "Elon Musk",
      ".Net Senior Developer",
      "Desktop Solutions",
      4000
    ),
  ];
  class EmpTable {
    constructor(arr) {
      this.arr = arr;
    }
    getHtml() {
      const table = document.getElementById("content__table");
      const array = this.arr;
      const head = document.createElement("tr");
      head.setAttribute("style", "font-size: 18px;");
      const th1 = document.createElement("th");
      th1.setAttribute("style", "text-align : center;");
      th1.textContent = "Name";
      const th2 = document.createElement("th");
      th2.setAttribute("style", "text-align : center;");
      th2.textContent = "Position";
      const th3 = document.createElement("th");
      th3.setAttribute("style", "text-align : center;");
      th3.textContent = "Department";
      const th4 = document.createElement("th");
      th4.setAttribute("style", "text-align : center;");
      th4.textContent = "Salary ($)";
      head.append(th1);
      head.append(th2);
      head.append(th3);
      head.append(th4);
      table.append(head);
      for (let i in array) {
        let tr = document.createElement("tr");
        table.append(tr);
        for (let j in array[i]) {
          let td = document.createElement("td");
          td.textContent = array[i][j];
          tr.append(td);
          td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
        }
      }
      table.setAttribute("border", "2");
      table.setAttribute("bordercolor", "brown");
      table.setAttribute("width", "100%");
      table.setAttribute("style", "margin: auto; background-color: lightgrey;");
    }
  }
  const tableObj = new EmpTable(arrEmp);
  tableObj.getHtml();
}
;
