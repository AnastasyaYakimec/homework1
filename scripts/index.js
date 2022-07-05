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

const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const btnSignInUser = document.getElementById("btn_sign_in_user");
const loginAvatar = document.getElementById("headerAvatarId");
const notLoginHead = document.getElementById("notLoginHeader");
const avatarBtn = document.getElementById("avatar");
const userMenuRegistered = document.getElementById("userMenuRegistered");
const userMenuVectorRegistered = document.getElementById(
  "userMenuVectorRegistered"
);

btnSignInUser.onclick = () => {
  localStorage.setItem("userEmail", JSON.stringify(inputEmail.value));
  inputEmail.value = null;
  localStorage.setItem("userPassword", JSON.stringify(inputPassword.value));
  inputPassword.value = null;
  modalSignIn.style.display = "none";
  notLoginHead.style.display = "none";
  loginAvatar.style.display = "flex";
};

let closeSignIn = document.getElementById("closeSignIn");
let openSignIn = document.getElementById("openSignIn");
closeSignIn.onclick = () => {
  modalSignIn.style.display = "none";
};
openSignIn.onclick = () => {
  modalSignIn.style.display = "block";
};
const storedEmail = JSON.parse(localStorage.getItem("userEmail"));
const storedPassword = JSON.parse(localStorage.getItem("userPassword"));

avatarBtn.onclick = () => {
  userMenuRegistered.style.display = "block";
};

userMenuVectorRegistered.onclick = () => {
  userMenuRegistered.style.display = "none";
};
const cardManagement = document.getElementById("cardManagement");
const closeAddingCart = document.getElementById("closeAddingCart");
const modalAddingCart = document.getElementById("modalAddingCart");

cardManagement.onclick = () => {
  modalAddingCart.style.display = "block";

  closeAddingCart.onclick = () => {
    modalAddingCart.style.display = "none";
    // modalAddingCart.innerHTML = "";
  };
};

const click = document.getElementById("inputCardForm");
const cards = JSON.parse(localStorage.getItem("cards") || "[]");
const card = [];

click.onsubmit = (e) => {
  let inputCardName = document.getElementById("inputCardName").value;
  let inputCardText = document.getElementById("inputCardDescription").value;
  let inputCardImgName = document.getElementById("inputCardImageName").value;
  let userCard = {
    id: cards.length,
    cardImg: inputCardImgName,
    cardName: inputCardName,
    cardText: inputCardText,
    cardDataTime: Date.now(),
  };
  card.push(userCard);
  localStorage.setItem("cards", JSON.stringify(card));
};
console.log(typeof cards);

const generateDynamicCards = () => {
  const listShopVariant = document.getElementById("list-shop-variant");
  cards.forEach((article) => {
    const articleHtml = `
    <li class="list-variant-li"
  style="background-image: url("${article.cardImg}");"
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

const itemsPerPage = 6;
let currentPage = 1;
const pages = numPages(cards);

function numPages(cardsArray) {
  return Math.ceil(cardsArray.length / itemsPerPage);
}

function changePage(page) {
  const output = document.getElementById("list-shop-variant");
  if (page < 1) page = 1;
  if (page > pages) page = pages;
  output.innerHTML = "";

  for (
    let i = (page - 1) * itemsPerPage;
    i < page * itemsPerPage && i < cards.length;
    i++
  ) {
    output.innerHTML += `
    <button  class="modalMainBtn"  onclick="modalRender()">
      <li  class="list-variant-li" 
   style="background-image: url(../assets/database/${cards[i].cardImg}.webp);"
   id="${cards[i].id}">
               <div class="grey-b">
                 <h4 class="card-subtaitle">${cards[i].cardName}</h4>
                 <p class="card-text">${cards[i].cardText} </p>
               </div>
            </li>
            </button>
           `;
  }
}

function nextPage() {
  if (currentPage < pages) changePage(++currentPage);
}

function prevPage() {
  if (currentPage > 1) changePage(--currentPage);
}

function gotoPage(page) {
  currentPage = page;
  changePage(page);
}

function addPages() {
  const el = document.getElementById("pages");
  for (let i = 1; i < pages + 1; i++) {
    el.innerHTML += `<li ><a class="pagination_number_li" href="javascript:gotoPage(${i})">${i}</a></li>`;
  }
}
window.onload = function () {
  changePage(1);
  addPages();
};

const openItemPage = document.getElementById("item-page");
const homePageCards = document.getElementsByClassName("list-variant-li");
modalRender = () => {
  for (let i = 0; i < homePageCards.length; i++) {
    homePageCards[i].onclick = () => {
      openItemPage.style.display = "flex";
      generateItemPage(homePageCards[i].id);
    };
  }
};

const closeDialog = () => {
  mainItemPage.innerHTML = null;
  openItemPage.style.display = "none";
};

const mainItemPage = document.getElementById("main-item-page");
const generateItemPage = (id) => {
  const article = cards.find((item) => item.id == id);
  console.log(cards[id].cardImg);
  const mainItemPageHtml = `
  <button id="closeItemPage"  class="mainBtn" onclick="closeDialog()">
  <span class="close-item-page">&times;</span>
  </button>
      <img class="main-img" src="../assets/database/${cards[id].cardImg}.webp" alt="">
      
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

console.log(cards);

function logOut() {
  localStorage.clear();
  document.getElementById("userMenuRegistered").style.display = "none";
  window.location.reload();
}

const filter = document.getElementById("filter");
console.log(filter.value);

filter.onchange = () => {
  if (filter.value == "sortNew") {
    cards.sort((a, b) => b.cardDataTime - a.cardDataTime);
    console.log(cards);
  } else {
    cards.sort((a, b) => a.cardDataTime - b.cardDataTime);
    console.log(cards);
  }

  // listShopVariant.innerHTML = "";
  // changePage(currentPage);
  // clickItem();
};
