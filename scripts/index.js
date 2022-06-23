let user = null;
let userSignIn = false;
let sort = "New First";
const cards = [
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
const cartUser = [
  {
    title: "starstar ",
    deckription:
      "I know in real-time where the money is spent,and i don't have to land out the company's credit card anymore.What is relirf!",
    avatar: "img/avatar1.svg",
    imageAlt: "avatar girl",
    name: "Denny Hilguston",
    email: "@denny.hill",
  },
  {
    title: "starstar ",
    deckription:
      "VISUALS are much better. The improvements in optics and resolution and much more than  modern consolea generation leap.",
    avatar: "img/avatar2.svg",
    imageAlt: "avatar girl",
    name: "Vani Pandey",
    email: "@vani.pandey",
  },
  {
    title: "starstar ",
    deckription:
      "I know in real-time where the money is spent,and i don't have to land out the company's credit card anymore.What is relirf!",
    avatar: "img/avatar2.svg",
    imageAlt: "avatar girl",
    name: "Vani Pandey",
    email: "@vani.pandey",
  },
];

let modalSignIn = document.getElementById("modalSignIn");
let closeSignIn = document.getElementById("closeSignIn");
let openSignIn = document.getElementById("openSignIn");

closeSignIn.onclick = () => {
  modalSignIn.style.display = "none";
};
openSignIn.onclick = () => {
  modalSignIn.style.display = "block";
};

const generateDynamicCards = () => {
  const listShopVariant = document.getElementById("list-shop-variant");
  cards.forEach((article) => {
    const articleHtml = ` <li class="list-variant-li" id="${article.id}">
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
const mainItemPage = document.getElementById("main-item-page");
const generateItemPage = (id) => {
  const article = cards.find((item) => item.id == id);
  const mainItemPageHtml = `
  <button id="closeItemPage"  class="mainBtn" onclick="closeDialog()">
  <span class="close-item-page">&times;</span>
  </button>
      <img class="main-img" src="./assets/img/foto man v vr.svg" alt="">
      <div class="main-cart">
        <h4 class="header-title">${article.cardName}</h4>
        <p class="header-text">${article.cardText}</p>
        <button class="primary-btn">Get it Now</button>
      </div>
       
    `;
  const articleDiv = document.createElement("div");
  articleDiv.innerHTML = mainItemPageHtml;
  mainItemPage.appendChild(articleDiv);
};
const homePageCards = document.getElementsByClassName("list-variant-li");
const openItemPage = document.getElementById("item-page");

for (let i = 0; i < homePageCards.length; i++) {
  homePageCards[i].onclick = () => {
    openItemPage.style.display = "flex";
    generateItemPage(homePageCards[i].id);
  };
}
const closeDialog = () => {
  mainItemPage.innerHTML = null;
  openItemPage.style.display = "none";
};

const generateDynamicClients = () => {
  const listCartUser = document.getElementById("listCartUser");
  console.log(listCartUser);
  cartUser.forEach((article) => {
    const articleHtml = `<li class="cart-user-1">
              <span class="cart-title">${article.title}<span> star</span></span>
              <p class="cart-p">${article.deckription}
               </p>
              <div class="user-info">
                // <img class="avatar-girl"${article.avatar} src="./assets/img/avatar1.svg" ${article.imageAlt}alt="avatar girl">
                <div class="cart-footer-div">
                  <span class="cart-footer-span">${article.name}</span>
                  <span class="cart-footer-span-email">${article.email}</span>
                </div>
              </div>
            </li>`;

    const articleDiv = document.createElement("div");
    articleDiv.style.display = "flex";
    articleDiv.innerHTML = articleHtml;
    listCartUser.appendChild(articleDiv);
  });
};
generateDynamicClients();
