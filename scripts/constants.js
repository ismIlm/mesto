const popup = document.querySelector('.popup');

const profileInfo = document.querySelector('.profile__info');
const editFormButton = profileInfo.querySelector('.profile__edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// переменные секции "popup_profile"
const nameInput = popup.querySelector('.popup__text_type_name');
const infoInput = popup.querySelector('.popup__text_type_job');
const addFormButton = document.querySelector('.profile__add-button');

// переменные к секции "popup_new_place"
const popupNewPlace = document.querySelector('.popup_new_place');
const closeBtnNewPlace = popupNewPlace.querySelector('.popup__btn-close');
const formElementNewPlace = popupNewPlace.querySelector('.popup__container');
const nameInputNewPlace = popupNewPlace.querySelector('.popup__text_type_name');
const lincInputNewPlace = popupNewPlace.querySelector('.popup__text_type_job');

// переменные к секции "popup_img"
const popupImg = document.querySelector(".popup_img");
const closeBtnImg = popupImg.querySelector(".popup__btn-close");
const popupBigImage = document.querySelector(".popup__big-image");
const popupFigcaption = document.querySelector(".popup__figcaption");

// переменные к карточкам
const cardsContainer = document.querySelector('.card-container');
const cardTemplate = document.querySelector('#card-template').content;
const cardImage = document.querySelector('.card__image');  // новая переменная

// общие переменные
const allPopups = Array.from(document.querySelectorAll('.popup'));

export { 
    popup,
    popupNewPlace,
    popupImg,
 };