const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list .mine");
const menus = document.querySelectorAll(
  ".header .nav-bar .nav-list .mine li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

// document.addEventListener("scroll", () => {
//   var scrolls = window.scrollY;
//   if (scrolls > 250) {
//     header.style.backgroundcolor = "#2d3945";
//   } else {
//     header.style.backgroundcolor = "transparent";
//   }
// });

menus.forEach(function (item) {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
