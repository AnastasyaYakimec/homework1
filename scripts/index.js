let user = null;
let userSignIn = false;
let sort = "New First";
let card = [
  {
    id: "0",
    cardImg: "img/foto man v vr.svg",
    cardName: "Metaverse",
    cardText: "A Network of 3D virtual worlds focused on social connection.",
    cardDataTime: "null",
  },
  {
    id: "1",
    cardImg: "img/foto man v vr.svg",
    cardName: "ygfgruhrguiui",
    cardText: "A Network of 3D virtual worlds focused on social connection.",
    cardDataTime: "null",
  },
  {
    id: "2",
    cardImg: "img/foto man v vr.svg",
    cardName: "gggggggggg",
    cardText: "A Network of 3D virtual worlds focused on social connection.",
    cardDataTime: "null",
  },

  {
    id: "3",
    cardImg: "img/foto man v vr.svg",
    cardName: "hhhhhhhhhhhh",
    cardText: "A Network of 3D virtual worlds focused on social connection.",
    cardDataTime: "null",
  },

  {
    id: "4",
    cardImg: "img/foto man v vr.svg",
    cardName: "Mlllllllll",
    cardText: "A Network of 3D virtual worlds focused on social connection.",
    cardDataTime: "null",
  },
  {
    id: "5",
    cardImg: "img/foto man v vr.svg",
    cardName: "ugugrtgthjg",
    cardText: "A Network of 3D virtual worlds focused on social connection.",
    cardDataTime: "null",
  },
];
let cartDataTime = null;
let clients = null;
let cartUser = null;

let modalSignIn = document.getElementById("modalSignIn");
let closeSignIn = document.getElementById("closeSignIn");
let openSignIn = document.getElementById("openSignIn");

closeSignIn.onclick = () => {
  modalSignIn.style.display = "none";
};
openSignIn.onclick = () => {
  modalSignIn.style.display = "block";
};

const qweerty = document.getElementsByClassName("list-variant-li");
const generateDynamicCards = () => {
  const listShopVariant = document.getElementById("list-shop-variant");
  card.forEach((article) => {
    const articleHtml = ` <li class="list-variant-li">${article.id}
              <div class="grey-b">
                <h4 class="card-subtaitle">${article.cardName}</h4>
                <p class="card-text">${article.cardText} </p>
              </div>
            </li>
             `;

    const articleDiv = document.createElement("div");
    articleDiv.style.display = "flex";
    articleDiv.innerHTML = articleHtml;
    listShopVariant.appendChild(articleDiv);
  });
};
generateDynamicCards();

const generateItemPage = (id) => {
  const mainItemPage = document.getElementById("main-item-page");
  const article = card.find((item) => item.id == id);
  const mainItemPageHtml = `
      <span id ='closeItemPage' class="close-item-page">&times;</span>
      <img class="main-img" src="./assets/img/foto man v vr.svg" alt="">
      
      <div class="main-cart">
        <h4 class="header-title">${article.cardName}</h4>
        <p class="header-text">${article.cardText}</p>
        <button class="primary-btn">Get it Now</button>
      </div>
    `;
  const articleDiv = document.createElement("div");
  articleDiv.style.display = "flex";
  articleDiv.innerHTML = mainItemPageHtml;
  mainItemPage.appendChild(articleDiv);
};

const openItemPage = document.getElementById("item-page");
for (let i = 0; i < qweerty.length; i++) {
  qweerty[i].onclick = () => {
    openItemPage.style.display = "block";
    generateItemPage(i);
  };
}
const closeItemPage = document.getElementsByClassName("primary-btn");
console.log(closeItemPage);
console.log(openItemPage.style);
closeItemPage.onclick = () => {
  console.log("sdhfksdjkhf");
  openItemPage.style.display = "none";
};
