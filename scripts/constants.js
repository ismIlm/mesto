export const popupEditProfile = document.querySelector('.popup');
export const closeBtn = popupEditProfile.querySelector('.popup__btn-close');
export const formElement = popupEditProfile.querySelector('.popup__container');
export const bioPopupBtn = popupEditProfile.querySelector('.popup__btn-save');
export const nameInput = popupEditProfile.querySelector('.popup__text_type_name');
export const infoInput = popupEditProfile.querySelector('.popup__text_type_job');

export const profileInfo = document.querySelector('.profile__info');
export const editFormButton = profileInfo.querySelector('.profile__edit');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const addFormButton = document.querySelector('.profile__add-button');

export const popupNewPlace = document.querySelector('.popup_new_place');
export const closeBtnNewPlace = popupNewPlace.querySelector('.popup__btn-close');
export const formElementNewPlace = popupNewPlace.querySelector('.popup__container');
export const nameInputNewPlace = popupNewPlace.querySelector('.popup__text_type_name');
export const lincInputNewPlace = popupNewPlace.querySelector('.popup__text_type_job');

export const popupImg = document.querySelector(".popup_img"); // deprecated
export const closeBtnImg = popupImg.querySelector(".popup__btn-close"); // deprecated
export const popupImgSelector = ".popup_img";


export const cardsContainer = document.querySelector('.card-container');
export const cardTemplate = document.querySelector('#card-template').content;
export const cardImage = document.querySelector('.card__image');

export const allPopups = Array.from(document.querySelectorAll('.popup'));

export const errorElementClassSuffix = '-error';

export const validationParams = {
    formSelector: '.popup__container',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__form-submit_inactive',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__text-error_active'
};
