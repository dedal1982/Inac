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
