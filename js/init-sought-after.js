const initSoughtAfter = [
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты для warface",
  },
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты для ПОРНОХАБ",
  },
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты для ГАЧИ-МУЧИ",
  },
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты для ГАЧИ-МУЧИ",
  },
];

//инициализация карточек каталог
function setEventListeners(htmlElement) {}
const itemTemplate = document.getElementById("sought-after").content;
const elements = document.querySelector(".ac-elements");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const acImage = htmlElement.querySelector(".pre__image");
  const acName = htmlElement.querySelector(".in-demand__text h3");

  // Проверяем наличие значения поля в объекте item перед присваиванием его элементу

  if (item.image) {
    acImage.src = item.image;
  }
  if (item.name) {
    acName.textContent = item.name;
  }
  setEventListeners(htmlElement);

  return htmlElement;
}

initSoughtAfter.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.append(elementCreate);
});

const moreButton = document.querySelector(".in-demand__more");
const backButton = document.querySelector(".in-demand__back");
const pageGrid = document.querySelector(".in-demand__grid-pre");
const pageGridFull = document.querySelector(".in-demand__grid-pre-full");

if (initSoughtAfter.length > 3) {
  moreButton.classList.add("active");
} else {
  moreButton.classList.remove("active");
}

if (moreButton) {
  moreButton.addEventListener("click", () => {
    pageGrid.classList.add("in-demand__grid-pre-full");
    backButton.classList.add("active");
    moreButton.classList.remove("active");
  });
}
if (backButton) {
  backButton.addEventListener("click", () => {
    pageGrid.classList.remove("in-demand__grid-pre-full");
    backButton.classList.remove("active");
    moreButton.classList.add("active");
  });
}
