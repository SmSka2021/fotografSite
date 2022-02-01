"use strict";
/*сохраняем данные языка и темы в localStorage*/
let langFirst = "en";
let themaFirst = "false";
let flagRu;

function setLocalStorage() {
  localStorage.setItem("lang", langFirst);
  localStorage.setItem("thema", themaFirst);
  localStorage.setItem("flagRu", flagRu); 
}
window.addEventListener("beforeunload", setLocalStorage)

/* считываем данные языка и темы из localStorage*/
function getLocalStorage() {
  if(localStorage.getItem("lang")) {
    langFirst = localStorage.getItem("lang");
    getTranslate(langFirst);
  }
  if(localStorage.getItem("thema") === "true"){
    changeSubject();
  }
  if(localStorage.getItem("flagRu") === "true"){
    rusLang.classList.add("visited");
    engLang.classList.remove("visited");
  }
  if(localStorage.getItem("flagRu") === "false"){
    rusLang.classList.remove("visited");
    engLang.classList.add("visited");
  }
}
window.addEventListener('load', getLocalStorage)

//////перевод//////
const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Retouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    standart: "Standart",
    premium: "Premium",
    gold: "Gold",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
    "placeholder-email": "E-mail",
    "placeholder-phone": "Phone",
    "placeholder-message": "Message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    standart: "Стандарт",
    premium: "Премиум",
    gold: "Золотая",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
    "placeholder-email": "Эл.адрес",
    "placeholder-phone": "Тел.номер",
    "placeholder-message": "Текст сообщения",
  },
};
//////переводчик////
let engLang = document.querySelector(".en");
let rusLang = document.querySelector(".ru");
rusLang.addEventListener("click", translate);
engLang.addEventListener("click", translate);


function translate(event) {
  if (event.target.classList.contains("ru")) {
    langFirst = "ru";
    flagRu = "true";
    getTranslate("ru");
    event.target.classList.add("visited");
    event.target.previousElementSibling.classList.remove("visited");
  } else if (event.target.classList.contains("en")) {
    langFirst = "en";
    flagRu = "false";
    getTranslate("en");
    event.target.classList.add("visited");
    event.target.nextElementSibling.classList.remove("visited");
  }
}

function getTranslate(lang) {
  let elemTranslate = document.querySelectorAll("[data-i18]");
  elemTranslate.forEach((item) => {
    item.textContent = i18Obj[lang][item.dataset.i18];
    if (item.placeholder) {
      item.placeholder = i18Obj[lang][item.dataset.i18];
      item.textContent = "";
    }
  });
}
//////смена темы/////////////
let tema = document.querySelector(".tema__sun");
let temaWhite = document.querySelector(".tema__moon");

tema.addEventListener("click", changeSubject);
temaWhite.addEventListener("click", changeSubject);

let arElem = [
  ".container__price_cards",
  ".titl3",
  ".titl2",
  ".titl",
  ".container__portfolio",
  ".container__video",
  ".container__skills",
  ".container__price",
  ".section__titl",
  ".container__skills_items",
];

function changeSubject() {
  tema.classList.toggle("dispNone");
  temaWhite.classList.toggle("dispNone");
  themaFirst = (tema.classList.contains("dispNone")).toString();
  /*кнопки портфолио меяют color*/
  let btnPoffolio = document.querySelectorAll(".bt");
  for (let bt of btnPoffolio) {
    bt.classList.toggle("portfolio__btnWhiteThem");
  }
  /*адаптивное меню-гамбургер меняем фон на белый*/
  let main = document.querySelector(".navigation");
  main.classList.toggle("navigationWhite");
  let linkMain = document.querySelectorAll(".navigation__link");
  for (let a of linkMain) {
    a.classList.toggle("openMaimWhitThem");
  }
  ///// /*меняем цвет полосок before after*/ ////
  arElem.forEach((item) => {
    let a = document.querySelector(item);
    a.classList.toggle("lit");
    if (
      item === ".section__titl" ||
      item === ".titl" ||
      item === ".titl2" ||
      item === ".titl3"
    ) {
      let v = document.querySelector(item);
      v.classList.toggle("polosa");
    }
  });
}
/////****АДАПТИВНОЕ МЕНЮ*********////////
//вешаем слушатель событий на гамбургер//
let list = document.getElementById("list_main"); //<ul>
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", show_menu);

function show_menu() {
  hamburger.classList.toggle("is-active"); //добавляем активный класс <ul> и гамбургеру
  list.classList.toggle("is-active");

  if (tema.classList.contains("dispNone")) {
    let hamburgerLine = document.querySelectorAll(".line");
    for (let a of hamburgerLine) {
      a.classList.toggle("lineWtiteThem");
    }
  }
}

//вешаем прослушиватель событий на на поле <ul>, чтобы закрывать меню/
list.addEventListener("click", closeMenu);

function closeMenu(event) {
  if (event.target.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
    list.classList.remove("is-active");
    // код, удаляющий класс `is-active`
    //у гамбургер-иконки и у меню при нажатии  на поле <ul>
  }
}

//вешаем прослушиватель событий на сылки, чтобы закрывать меню
//при переходе по ссылкам
let navLinks = document.querySelectorAll(".open");
navLinks.forEach((el) => el.addEventListener("click", closMenu));

function closMenu(event) {
  hamburger.classList.remove("is-active");
  list.classList.remove("is-active");
  // здесь код, удаляющий класс `is-active`
  //у гамбургер-иконки и у меню при нажатии  cсылку,
  //так как мы переходим по ссылке и открытое меню нам больше не нужно
}
/////////////////portfolio IMG////////////////
const portfolioBtns = document.querySelector(".container__portfolio_btn");
const portfolioImages = document.querySelectorAll(".portfolio__card");
portfolioBtns.addEventListener("click", changeImage);

function changeImage(event) {
  for (let i = 0; i < 4; i++) {
    portfolioBtns.children[i].classList.remove("active");
  }
  if (event.target.classList.contains("portfolio__btn")) {
    let dataAttribute = event.target.dataset.season;
    event.target.classList.add("active");
    event.stopPropagation();
    // перебираем массив рисунков и выбираем нужный src изображения исходя из dataAttribute
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `./assets/img/${dataAttribute}/${index + 1}.jpg`)
    );
  }
}
///////кэшируем изображения/////////
const seasons = ["winter", "spring", "summer", "autumn"];
seasons.forEach((item) => {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${item}/${i}.jpg`;
  }
});


