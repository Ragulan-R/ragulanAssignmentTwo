// worked on hamburger js portion with previous project 1 partner (Rebecca) so there will be some similarities with the burger menu

// 1. BURGER MENU JS

// variable to target the burger icon
let navBurgerMenu = document.getElementById("burgerIcon");
// variable to target the uls in the nav
let navBurgerItems = document.getElementById("burgerList");

// function to add a class to make the burger visible
// add a class so the new class click on turns off an on so the list goes from block to inline
navBurgerMenu.addEventListener("click", function () {
  navBurgerItems.classList.toggle("clickOn");
});

// 2. CHANGING THE COLOR OF THE WEBSITE LOGO ONCE CLICKED

// let logoChange = document.getElementById("yellowLogo");
// logoChange.addEventListener("click", function () {
//   .style.color = "yellow";
// });

let logoChange = document.querySelector("h1");

logoChange.addEventListener("click", () => {
  document.getElementById("yellowLogo").style.color = "yellow";
});

// document.getElementById("yellowLogo").addEventListener(click, function(){

// 3. CHANGING THE BORDER OF IMAGES IN THE GALLERY ONCE CLICKED

let galleryBorder = document.getElementsByClassName("box");

galleryBorder.forEach((img) => {
  img.style.border = "solid 10px yellow";
});
