var menuTrigger = document.querySelector(".burger-menu-trigger");
var menu = document.querySelector(".burger-nav-container");

console.log(menu, menuTrigger);

menuTrigger.addEventListener("click", () => {
  menu.classList.toggle("burger-open");
});

menu.addEventListener("click", () => {
  menu.classList.toggle("burger-open");
});
