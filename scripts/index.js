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
    openItemPage.style.display = "block";
  };

  closeItemPage.onclick = () => {
    openItemPage.style.display = "none";
  };
}

const user = {};
user.name = "Anastasya";
user.surname = "Yakimec";
user.name = "Jerry";
delete user.name;
console.log(user);



const salaries = {
  Vlad: 100,
  Alina: 130,
  Roman: 110,
  Alex: 120,
};
function sumSalary(salaries) {
  if (Object.keys(salaries).length === 0) {
    return 0;
  }
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}


let calculator = {
  read() {
    a = +prompt("введите первое число", 0);
    b = +prompt("введите second число", 0);
  },

  sum() {
    return a + b;
  },

  mul() {
    return a * b;
  },

  div() {
    return a / b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
alert(calculator.div());
