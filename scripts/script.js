const profileInfo = document.querySelector('.profile__info'); 
const editBtn = profileInfo.querySelector('.profile__edit'); 
const popup = document.querySelector('.popup'); 
const closeBtn = popup.querySelector('.popup__btn-close'); 
const formElement = popup.querySelector('.popup__container');

const profileTitle = document.querySelector('.profile__title'); 
const profileSubtitle = document.querySelector('.profile__subtitle'); 
const nameInput = popup.querySelector('.popup__text_type_name'); 
const infoInput = popup.querySelector('.popup__text_type_job');
const addBtn = document.querySelector('.profile__add-button');


const popupNewPlace = document.querySelector('.popup_new_place');
const closeBtnNewPlace = popupNewPlace.querySelector('.popup__btn-close'); 
const formElementNewPlace = popupNewPlace.querySelector('.popup__container');
const nameInputNewPlace = popupNewPlace.querySelector('.popup__text_type_name');
const lincInputNewPlace = popupNewPlace.querySelector('.popup__text_type_job');

const popupImg = document.querySelector(".popup_img");
const closeBtnImg = popupImg.querySelector(".popup__btn-close");
const popupBigImage = document.querySelector(".popup__big-image");
const popupFigcaption = document.querySelector(".popup__figcaption");
const cardsContainer = document.querySelector('.card-container'); 
const cardTemplate = document.querySelector('#card-template').content;

const cards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function togglePopup(localPopup) {
    localPopup.classList.toggle('popup_opened');
}

function showPopup(localPopup, allName, info) {
    const inputName = localPopup.querySelector('.popup__text_type_name');
    inputName.textContent = allName;

    const inputInfo = localPopup.querySelector('.popup__text_type_job');
    inputInfo.textContent = info;

    togglePopup(localPopup);
}

function openImgPopup(evt) {
    popupBigImage.src = evt.target.src;
    popupBigImage.alt = evt.target.alt;
    popupFigcaption.textContent = evt.target.alt;

    togglePopup(popupImg);
}

function bioFormSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = infoInput.value;

    togglePopup(popup);
}

function newPlaceFormSubmitHandler(evt) { 
    evt.preventDefault(); 
    const newCardData = { 
        name: nameInputNewPlace.value, 
        link: lincInputNewPlace.value, 
    }; 

    cardsContainer.prepend(createCard(newCardData)); 
} 

function createCard(item) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.card__title').textContent = item.name;
    const elementImg = cardElement.querySelector('.card__image');
    elementImg.src = item.link;
    elementImg.alt = item.name;
    cardElement.querySelector('.card__remove-button').addEventListener("click", removeCard);
    cardElement.querySelector('.card__like').addEventListener("click", likeCard);
    cardElement.querySelector('.card__image').addEventListener("click",openImgPopup);
    return cardElement;
}

function likeCard(event) {
    event.target.classList.toggle('card__like_active');
}

function addCards(cards) {
    cards.forEach(card => cardsContainer.prepend(createCard(card)));
}

function removeCard(event) {
    const cardElement = event.target.closest(".card");
    cardElement.remove();
}

editBtn.addEventListener('click', () => showPopup(popup, profileTitle.textContent, profileSubtitle.textContent));
addBtn.addEventListener('click', () => showPopup(popupNewPlace, " ", " "));
closeBtn.addEventListener('click', () => { togglePopup(popup) });
closeBtnNewPlace.addEventListener('click', () => { togglePopup(popupNewPlace) });
closeBtnImg.addEventListener ('click', () => { togglePopup(popupImg) });
formElement.addEventListener('submit', bioFormSubmitHandler); 
formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler); 
addCards(cards);