// Объект с настройками валидации
const enableValidation = {
    formSelector: '.popup__container',
    inputSelector: '.popup__btn-close',
    buttonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-save_inactive',
    inputErrorClass: '.popup__error',
    errorClass: 'popup__error_active'
  }
  
  // Переменные для работы с карточками
  const cards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Архыз'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Челябинская область'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: 'Иваново'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Камчатка'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Холмогорский район'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Байкал'
    }
  ];

  const cardTemplate = document.querySelector('#card-template').content;
  const cardsContainer = document.querySelector('.card-container');


// const popup = document.querySelector('.popup'); 
// const closeBtn = popup.querySelector('.popup__btn-close'); 
// const formElement = popup.querySelector('.popup__container');

// const profileTitle = document.querySelector('.profile__title'); 
// const profileSubtitle = document.querySelector('.profile__subtitle'); 
// const nameInput = popup.querySelector('.popup__text_type_name'); 
// const infoInput = popup.querySelector('.popup__text_type_job');

// const popupNewPlace = document.querySelector('.popup_new_place');
// const closeBtnNewPlace = popupNewPlace.querySelector('.popup__btn-close'); 
// const formElementNewPlace = popupNewPlace.querySelector('.popup__container');
// const nameInputNewPlace = popupNewPlace.querySelector('.popup__text_type_name');
// const lincInputNewPlace = popupNewPlace.querySelector('.popup__text_type_job');


   // Переменные для кнопок
  const addBtn = document.querySelector('.profile__add-button');
  const editFormButton = document.querySelector('.profile__edit');
  

  

  
  