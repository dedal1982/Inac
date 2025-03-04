const accountCsGo = [
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты 33",
    price: "200",
    buy: "ссылка",
  },
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты 22",
    price: "300",
    buy: "ссылка",
  },
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты 11",
    price: "400",
    buy: "ссылка",
  },
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты 33",
    price: "200",
    buy: "ссылка",
  },
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты 22",
    price: "300",
    buy: "ссылка",
  },
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты 11",
    price: "400",
    buy: "ссылка",
  },
  {
    image: "../../images/warfacebezss.png",
    name: "Аккаунты 00",
    price: "400",
    buy: "https://www.last.fm/ru/music/TGGG",
  },
];

//инициализация аккаунтов CSGO
function setEventListeners(htmlElement) {}
const itemTemplate = document.getElementById("accountCsGo").content;
const elements = document.querySelector(".account__grid");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const acImage = htmlElement.querySelector(".account__image img");
  const acName = htmlElement.querySelector(".ac-title");
  const acPrice = htmlElement.querySelector(".account__amount");
  const acBuy = htmlElement.querySelector(".account__buy");

  // Проверяем наличие значения поля в объекте item перед присваиванием его элементу

  if (item.image) {
    acImage.src = item.image;
  }
  if (item.name) {
    acName.textContent = item.name;
  }
  if (item.buy) {
    acPrice.textContent = item.price;
  }
  if (item.price) {
    acBuy.href = item.buy;
  }
  setEventListeners(htmlElement);

  return htmlElement;
}

accountCsGo.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.append(elementCreate);
});
