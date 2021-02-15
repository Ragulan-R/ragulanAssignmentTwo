// worked on js portion with previous partner so there will be some similarities

// variable to target the burger icon
let navBurgerMenu = document.getElementById("burgerIcon");

// variable to target the uls in the nav
let navBurgerItems = document.getElementById("burgerList");

// function to add a class to make the burger visible

// console.log(navBurgerMenu);
// console.log(navBurgerItems);

// add a class so the new class click on turns off an on so the list goes from block to inline
navBurgerMenu.addEventListener("click", function () {
  navBurgerItems.classList.toggle("clickOn");
});
