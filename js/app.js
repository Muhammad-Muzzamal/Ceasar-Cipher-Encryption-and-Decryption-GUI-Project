let menuBtn = document.querySelector("#menu-icon");
let menuLinks = document.querySelector(".menu-links");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuLinks.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (!menuLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    menuLinks.classList.remove("active");
  }
});
