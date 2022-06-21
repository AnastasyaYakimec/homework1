// const user = {};
// user.name = "Anastasya";
// user.surname = "Yakimec";
// user.name = "Jerry";
// delete user.name;
// console.log(user);

// const salaries = {
//   Vlad: 100,
//   Alina: 130,
//   Roman: 110,
//   Alex: 120,
// };
// function sumSalary(salaries) {
//   if (Object.keys(salaries).length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }

// let calculator = {
//   read() {
//     a = +prompt("Введите первое число", 0);
//     b = +promt("Введите второе число ", 0);
//   },

//   sum() {
//     return a + b;
//   },

//   mul() {
//     return a * b;
//   },

//   div() {
//     return a / b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// alert(calculator.div());

dataFootball = [
  {
    cardName: " Андрей",
    cardLastName: " Пятов",
    cardAge: "37",
    cardClub: "Шахтер",
    cardHeight: "190",
    cardWeight: "78",
  },

  {
    cardName: "Георгий  ",
    cardLastName: "Бущан",
    cardAge: "28",
    cardClub: "Динамо",
    cardHeight: "190",
    cardWeight: "94",
  },

  {
    cardName: "Дмитрий",
    cardLastName: "Ризнык",
    cardAge: "23",
    cardClub: "Ворскла",
    cardHeight: "186",
    cardWeight: "77",
  },
  {
    cardName: "Александр ",
    cardLastName: "Караваев ",
    cardAge: "30",
    cardClub: "Динамо",
    cardHeight: "173",
    cardWeight: "69",
  },
  {
    cardName: "Александр ",
    cardLastName: "Сирота",
    cardAge: "22",
    cardClub: "Динамо",
    cardHeight: "189",
    cardWeight: "74",
  },
  {
    cardName: "Александр ",
    cardLastName: "Тымчик",
    cardAge: "25",
    cardClub: "Динамо",
    cardHeight: "180",
    cardWeight: "67",
  },
  {
    cardName: " Виктор ",
    cardLastName: "Корниенко ",
    cardAge: "23",
    cardClub: "Шахтер",
    cardHeight: "180",
    cardWeight: "67",
  },
];

const generateDynamicCards = () => {
  const football = document.getElementById("football");

  dataFootball.forEach((article) => {
    const articleHtml = ` <li class="fCard">
        <p class="name">${article.cardName}</p>
        <p class="last-name">${article.cardLastName}</p>
        <p class="age">${article.cardAge}</p>
        <p class="club">${article.cardClub}</p>
        <p class="height">${article.cardHeight}</p>
        <p class=">weight">${article.cardWeight}</p>
          </li>`;

    const articleDiv = document.createElement("div");
    articleDiv.style.display = "flex";
    articleDiv.innerHTML = articleHtml;
    football.appendChild(articleDiv);
  });
};
generateDynamicCards();
