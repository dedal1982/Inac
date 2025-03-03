const moreButton = document.querySelector(".in-demand__more");
const preItems = document.querySelector(".in-demand__grid-pre");
const mainItems = document.querySelector(".in-demand__swiper");
const backButton = document.querySelector(".in-demand__back");

if (moreButton) {
  moreButton.addEventListener("click", () => {
    preItems.classList.add("active");
    mainItems.classList.add("active");
    moreButton.classList.add("active");
    backButton.classList.add("active");
  });
}

if (backButton) {
  backButton.addEventListener("click", () => {
    preItems.classList.remove("active");
    mainItems.classList.remove("active");
    moreButton.classList.remove("active");
    backButton.classList.remove("active");
  });
}

//мобильное меню
const burgerBtn = document.querySelector(".header__burger");
const bodyElement = document.querySelector(".body");
const mobileMenu = document.querySelector(".mobile-menu");

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    bodyElement.classList.toggle("lock");
    mobileMenu.classList.toggle("active");
  });
}

//перебор и клик по иконкам соцсети в мобильном меню
const mobileMenuSocials = document.querySelectorAll(
  ".mobile-menu__social li a,.mobile-menu__links li a"
);

if (mobileMenuSocials) {
  mobileMenuSocials.forEach((item) => {
    item.addEventListener("click", () => {
      burgerBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      bodyElement.classList.remove("lock");
    });
  });
}
