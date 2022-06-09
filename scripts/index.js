// let user = null;
// let userSignIn = false;
// let sort = "New First";
// let card = null;
// let cartDataTime = null;
// let clients = null;
// let cartUser = null;

let modalSignIn = document.getElementById("modalSignIn");
let closeSignIn = document.getElementById("closeSignIn");
let openSignIn = document.getElementById("openSignIn");

closeSignIn.onclick = () => {
  modalSignIn.style.display = "none";
};
openSignIn.onclick = () => {
  modalSignIn.style.display = "block";
};

const openItemPage = document.getElementById("item-page");
const closeItemPage = document.getElementById("closeItemPage");
const qweerty = document.getElementsByClassName("list-variant-li");
for (let i = 0; i < qweerty.length; i++) {
  qweerty[i].onclick = () => {
    console.log("ksdduisdudsldiiu");
    openItemPage.style.display = "block";
  };

  closeItemPage.onclick = () => {
    openItemPage.style.display = "none";
  };

  
}
