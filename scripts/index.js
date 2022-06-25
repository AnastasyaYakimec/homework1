let user = null;
let userSignIn = false;
let sort = "New First";
const cards = [
  {
    id: "0",
    cardImg:
      "../assets/database/man-with-copy-space-and-futuristic-device_23-2148864987.webp",
    cardName: "Metaverse",
    cardText: "Man with copy space and futuristic device vrglasses.",
    cardDataTime: "null",
  },
  {
    id: "1",
    cardImg:
      "../assets/database/close-up-man-wearing-vr-glasses_23-2148864995.webp",
    cardName: "Metaverse",
    cardText: "Close up man wearing vr glasses.",
    cardDataTime: "null",
  },

  {
    id: "2",
    cardImg:
      "../assets/database/teenage-girl-with-virtual-reality-headset_231208-5336.webp",
    cardName: "Metaverse",
    cardText: "Teenage girl with virtual reality headset.",
    cardDataTime: "null",
  },

  {
    id: "3",
    cardImg:
      "../assets/database/woman-in-glasses-augmented-reality-blue-social-media-cover_53876-97072.webp",
    cardName: "Metaverse",
    cardText: "Woman in vr  glasses augmented reality.",
    cardDataTime: "null",
  },
  {
    id: "4",
    cardImg:
      "../assets/database/young-woman-using-vr-glasses_23-2149437736.webp",
    cardName: "Metaverse",
    cardText: "Young woman using vr glasses.",
    cardDataTime: "null",
  },

  {
    id: "5",
    cardImg:
      "../assets/database/smart-attractive-asian-female-business-owner-weared-virtual-reality-glasses-enjoys-casual-metaverse-meeting-with-concentrate-at-cafe-restaurantasian-female-using-oculus-rift-headset-in-cafe_609648-2189.webp",
    cardName: "Metaverse",
    cardText: "Young asian female business woman using vr glasses.",
    cardDataTime: "null",
  },
  {
    id: "6",
    cardImg:
      "../assets/database/portrait-of-a-man-with-glasses-of-virtual-reality-vr-interacts-with-a-virtual-screen_99433-259.webp",
    cardName: "Metaverse",
    cardText:
      "Man with glasses of virtual reality vr interacts with a virtual screen.",
    cardDataTime: "null",
  },
  {
    id: "7",
    cardImg:
      "../assets/database/portrait-of-a-man-with-glasses-of-virtual-reality-vr-interacts-with-a-virtual-screen_99433-249.webp",
    cardName: "Metaverse",
    cardText: "A Network of 3D virtual worlds focused on social connection.",
    cardDataTime: "null",
  },
  {
    id: "8",
    cardImg:
      "../assets/database/medium-shot-woman-wearing-vr-glasses_23-2148864930.webp",
    cardName: "Metaverse",
    cardText: " Woman wearing vr glasses_.",
    cardDataTime: "null",
  },

  {
    id: "9",
    cardImg:
      "../assets/database/man-experiencing-vr-simulation-entertainment-technology_53876-102991.webp",
    cardName: "Metaverse",
    cardText: "Man experiencing vr simulation entertainment technology.",
    cardDataTime: "null",
  },
  {
    id: "10",
    cardImg:
      "../assets/database/wondering-of-feelings-little-girl-or-child-in-jeans-and-shirt-with-virtual-reality-headset-glasses-isolated-on-blue-studio-background-concept-of-cutting-edge-technology-video-games-innovation_155003-36852.webp",
    cardName: "Metaverse",
    cardText: "Child with virtual reality technology video games innovation.",
    cardDataTime: "null",
  },
  {
    id: "11",
    cardImg:
      "../assets/database/a-man-with-glasses-on-the-background-of-virtual-reality-the-metaverse-future-metaphor-metaverse-technology-concept-cyberuniverse-communication-blockchain-futuristic-network-mixed-media_99433-8199.webp",
    cardName: "Metaverse",
    cardText:
      "A man with glasses on the background of virtual reality the metaverse future.",
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
    const articleHtml = ` 
    <li class="list-variant-li"
  style="background-image: url(${article.cardImg});"
  id="${article.id}">
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
      <img class="main-img" src="${article.cardImg}" alt="">
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
