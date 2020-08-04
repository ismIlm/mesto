export const popup = document.querySelector('.popup');
export const closeBtn = popup.querySelector('.popup__btn-close');
export const formElement = popup.querySelector('.popup__container');
export const bioPopupBtn = popup.querySelector('.popup__btn-save');

export const profileInfo = document.querySelector('.profile__info');
export const editFormButton = profileInfo.querySelector('.profile__edit');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');

export const nameInput = popup.querySelector('.popup__text_type_name');
export const infoInput = popup.querySelector('.popup__text_type_job');
export const addFormButton = document.querySelector('.profile__add-button');

export const popupNewPlace = document.querySelector('.popup_new_place');
export const closeBtnNewPlace = popupNewPlace.querySelector('.popup__btn-close');
export const formElementNewPlace = popupNewPlace.querySelector('.popup__container');
export const nameInputNewPlace = popupNewPlace.querySelector('.popup__text_type_name');
export const lincInputNewPlace = popupNewPlace.querySelector('.popup__text_type_job');

export const popupImg = document.querySelector(".popup_img");
export const closeBtnImg = popupImg.querySelector(".popup__btn-close");
export const popupBigImage = document.querySelector(".popup__big-image");
export const popupFigcaption = document.querySelector(".popup__figcaption");

export const cardsContainer = document.querySelector('.card-container');
export const cardTemplate = document.querySelector('#card-template').content;
export const cardImage = document.querySelector('.card__image');

export const allPopups = Array.from(document.querySelectorAll('.popup'));

export const errorElementClassSuffix = '-error';