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

const cards = [
  // {
  //   cardName: " Андрей",
  //   cardLastName: " Пятов",
  //   cardAge: "37",
  //   cardClub: "Шахтер",
  //   cardHeight: "190",
  //   cardWeight: "78",
  // },
  // {
  //   cardName: "Георгий",
  //   cardLastName: "Бущан",
  //   cardAge: "28",
  //   cardClub: "Динамо",
  //   cardHeight: "190",
  //   cardWeight: "94",
  // },
  // {
  //   cardName: "Дмитрий",
  //   cardLastName: "Ризнык",
  //   cardAge: "23",
  //   cardClub: "Ворскла",
  //   cardHeight: "186",
  //   cardWeight: "77",
  // },
  // {
  //   cardName: "Александр",
  //   cardLastName: "Караваев",
  //   cardAge: "30",
  //   cardClub: "Динамо",
  //   cardHeight: "173",
  //   cardWeight: "69",
  // },
  // {
  //   cardName: "Александр ",
  //   cardLastName: "Сирота",
  //   cardAge: "22",
  //   cardClub: "Динамо",
  //   cardHeight: "189",
  //   cardWeight: "74",
  // },
  // {
  //   cardName: "Александр ",
  //   cardLastName: "Тымчик",
  //   cardAge: "25",
  //   cardClub: "Динамо",
  //   cardHeight: "180",
  //   cardWeight: "67",
  // },
  // {
  //   cardName: " Виктор ",
  //   cardLastName: "Корниенко",
  //   cardAge: "23",
  //   cardClub: "Шахтер",
  //   cardHeight: "180",
  //   cardWeight: "67",
  // },
];

// const generateDynamicCards = () => {
//   const pages = document.getElementById("pages");

//   dataPages.forEach((article) => {
//     const articleHtml = ` <li class="fCard">
//         <p class="name">${article.cardName}</p>
//         <p class="last-name">${article.cardLastName}</p>
//         <p class="age">${article.cardAge}</p>
//         <p class="club">${article.cardClub}</p>
//         <p class="height">${article.cardHeight}</p>
//         <p class=">weight">${article.cardWeight}</p>
//           </li>`;

//     const articleDiv = document.createElement("div");
//     articleDiv.style.display = "flex";
//     articleDiv.innerHTML = articleHtml;
//     pages.appendChild(articleDiv);
//   });
// };

// configuration variables
const itemsPerPage = 3;

// reference to keep track of current page
let currentPage = 1;

// data, could be json from api

// reference to total pages
const pages = numPages(cards);

function numPages(cardsArray) {
  // returns the number of pages
  return Math.ceil(cardsArray.length / itemsPerPage);
}

function changePage(page) {
  // reference to output containing element
  const output = document.getElementById("output");

  // make sure page is in bounds
  if (page < 1) page = 1;
  if (page > pages) page = pages;

  // clear output containing element
  output.innerHTML = "";

  // for each item within the range of the current page
  for (
    let i = (page - 1) * itemsPerPage;
    i < page * itemsPerPage && i < cards.length;
    i++
  ) {
    // append the html to the output containing element
    output.innerHTML += `
     <li class="fCard">
         <p class="name">${cards[i].cardName}</p>
         <p class="last-name">${cards[i].cardLastName}</p>
         <p class="age">${cards[i].cardAge}</p>
        <p class="club">${cards[i].cardClub}</p>
         <p class="height">${cards[i].cardHeight}</p>
        <p class=">weight">${cards[i].cardWeight}</p>
           </li>
    `;
  }
}

function nextPage() {
  // if not on last page, goto next page
  if (currentPage < pages) changePage(++currentPage);
}

function prevPage() {
  // if not on the first page, goto previous page
  if (currentPage > 1) changePage(--currentPage);
}

// directly access a page by number
function gotoPage(page) {
  // sets the current page to the selected page
  currentPage = page;
  // changes the page to the selected page
  changePage(page);
}

// creates individual page navigation
function addPages() {
  // grab reference to containing element
  const el = document.getElementById("pages");
  // for each page
  for (let i = 1; i < pages + 1; i++) {
    // append a link with the respective page number
    el.innerHTML += `<li><a href="javascript:gotoPage(${i})">${i}</a></li>`;
  }
}

window.onload = function () {
  changePage(1); // set default page
  addPages(); // generate page navigation
};

// const itemsPerPage = 5;

// let currentPage = 1;
// const cards = [
//   { card: "Пятов" },
//   { card: "Бущан" },
//   { card: "Ризнык" },
//   { card: "Караваев" },
//   { card: "Сирота" },
//   { card: "Тымчик" },
//   { card: "Корниенко" },

//   { card: "Пятов" },
//   { card: "Бущан" },
//   { card: "Ризнык" },
//   { card: "Караваев" },
//   { card: "Сирота" },
//   { card: "Тымчик" },
//   { card: "Корниенко" },

//   { card: "Пятов" },
//   { card: "Бущан" },
//   { card: "Ризнык" },
//   { card: "Караваев" },
//   { card: "Сирота" },
//   { card: "Тымчик" },
//   { card: "Корниенко" },
// ];
// const cards = [
//   { card: "Knight of the Widget" },
//   { card: "Oddly Uneven" },
//   { card: "Midlife Upgrade" },
//   { card: "Old Guard" },
//   { card: "Ordinary Pony" },
//   { card: "Rhino-" },
//   { card: "Riveting Rigger" },
//   { card: "Rules Lawyer" },
//   { card: "Sacrifice Play" },
//   { card: "Shaggy Camel" },
//   { card: "Knight of the Widget" },
//   { card: "Oddly Uneven" },
//   { card: "Midlife Upgrade" },
//   { card: "Old Guard" },
//   { card: "Ordinary Pony" },
//   { card: "Rhino-" },
//   { card: "Riveting Rigger" },
//   { card: "Rules Lawyer" },
//   { card: "Sacrifice Play" },
//   { card: "Shaggy Camel" },
// ];

// const pages = numPages((cards = dataPages));

// function numPages(cardsArray) {
//   return Math.ceil(cardsArray.length / itemsPerPage);
// }

// function changePage(page) {
//   const output = document.getElementById("output");
//   if (page < 1) page = 1;
//   if (page > pages) page = pages;
//   console.log(page);
//   output.innerHTML = "";

//   for (
//     let i = (page - 1) * itemsPerPage;
//     i < page * itemsPerPage && i < cards.length;
//     i++
//   ) {
//     output.innerHTML += `<li>
//     ${cards[i].cardName}</li>
//     `;
//   }
// }

// function nextPage() {
//   if (currentPage < pages) changePage(++currentPage);
// }

// function prevPage() {
//   if (currentPage > 1) changePage(--currentPage);
// }

// function gotoPage(page) {
//   currentPage = page;
//   changePage(page);
// }

// function addPages() {
//   const el = document.getElementById("pages");
//   for (let i = 1; i < pages + 1; i++) {
//     el.innerHTML += `<li><a href="javascript:gotoPage(${i})">${i}</a></li>`;
//   }
// }

// window.onload = function () {
//   changePage(1); // set default page
//   addPages(); // generate page navigation
// };
const saveTolocalStorage = document.getElementById("saveTolocalStorage");
const deleteTolocalStorage = document.getElementById("deleteTolocalStorage");
const getDataFormsLS = document.getElementById("getDataFormsLS");

saveTolocalStorage.onclick = () => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: "Name",
      desc: "Description about user",
      age: "23",
    })
  );
};
getDataFormsLS.onclick = () => {
  const user = localStorage.getItem("user");
  console.log(JSON.parse(user));
};

deleteTolocalStorage.onclick = () => {
  localStorage.clear("user");
};
// const sortType = "filter";

// const cards = [
//   {
//     id: "0",
//     cardImg:
//       "../assets/database/man-with-copy-space-and-futuristic-device_23-2148864987.webp",
//     cardName: "Metaverse",
//     cardText: "Man with copy space and futuristic device vrglasses.",
//     cardDataTime: "null",
//   },
//   {
//     id: "1",
//     cardImg:
//       "../assets/database/close-up-man-wearing-vr-glasses_23-2148864995.webp",
//     cardName: "Metaverse",
//     cardText: "Close up man wearing vr glasses.",
//     cardDataTime: "null",
//   },

//   {
//     id: "2",
//     cardImg:
//       "../assets/database/teenage-girl-with-virtual-reality-headset_231208-5336.webp",
//     cardName: "Metaverse",
//     cardText: "Teenage girl with virtual reality headset.",
//     cardDataTime: "null",
//   },

//   {
//     id: "3",
//     cardImg:
//       "../assets/database/woman-in-glasses-augmented-reality-blue-social-media-cover_53876-97072.webp",
//     cardName: "Metaverse",
//     cardText: "Woman in vr  glasses augmented reality.",
//     cardDataTime: "null",
//   },
//   {
//     id: "4",
//     cardImg:
//       "../assets/database/young-woman-using-vr-glasses_23-2149437736.webp",
//     cardName: "Metaverse",
//     cardText: "Young woman using vr glasses.",
//     cardDataTime: "null",
//   },

//   {
//     id: "5",
//     cardImg:
//       "../assets/database/smart-attractive-asian-female-business-owner-weared-virtual-reality-glasses-enjoys-casual-metaverse-meeting-with-concentrate-at-cafe-restaurantasian-female-using-oculus-rift-headset-in-cafe_609648-2189.webp",
//     cardName: "Metaverse",
//     cardText: "Young asian female business woman using vr glasses.",
//     cardDataTime: "null",
//   },
//   {
//     id: "6",
//     cardImg:
//       "../assets/database/portrait-of-a-man-with-glasses-of-virtual-reality-vr-interacts-with-a-virtual-screen_99433-259.webp",
//     cardName: "Metaverse",
//     cardText:
//       "Man with glasses of virtual reality vr interacts with a virtual screen.",
//     cardDataTime: "null",
//   },
//   {
//     id: "7",
//     cardImg:
//       "../assets/database/portrait-of-a-man-with-glasses-of-virtual-reality-vr-interacts-with-a-virtual-screen_99433-249.webp",
//     cardName: "Metaverse",
//     cardText: "A Network of 3D virtual worlds focused on social connection.",
//     cardDataTime: "null",
//   },
//   {
//     id: "8",
//     cardImg:
//       "../assets/database/medium-shot-woman-wearing-vr-glasses_23-2148864930.webp",
//     cardName: "Metaverse",
//     cardText: " Woman wearing vr glasses_.",
//     cardDataTime: "null",
//   },

//   {
//     id: "9",
//     cardImg:
//       "../assets/database/man-experiencing-vr-simulation-entertainment-technology_53876-102991.webp",
//     cardName: "Metaverse",
//     cardText: "Man experiencing vr simulation entertainment technology.",
//     cardDataTime: "null",
//   },
//   {
//     id: "10",
//     cardImg:
//       "../assets/database/wondering-of-feelings-little-girl-or-child-in-jeans-and-shirt-with-virtual-reality-headset-glasses-isolated-on-blue-studio-background-concept-of-cutting-edge-technology-video-games-innovation_155003-36852.webp",
//     cardName: "Metaverse",
//     cardText: "Child with virtual reality technology video games innovation.",
//     cardDataTime: "null",
//   },
//   {
//     id: "11",
//     cardImg:
//       "../assets/database/a-man-with-glasses-on-the-background-of-virtual-reality-the-metaverse-future-metaphor-metaverse-technology-concept-cyberuniverse-communication-blockchain-futuristic-network-mixed-media_99433-8199.webp",
//     cardName: "Metaverse",
//     cardText:
//       "A man with glasses on the background of virtual reality the metaverse future.",
//     cardDataTime: "null",
//   },
// ];

// let cardDataTime = null;
// let clients = null;
// const inputCardName = document.getElementById("cardName");
// const inputCardDescription = document.getElementById("cardDescription");
// const inputCardImageName = document.getElementById("cardImageName ");
// const btnAddCard = document.getElementById("btnAddCard");
