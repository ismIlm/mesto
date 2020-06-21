const prInfo = document.querySelector('.profile__info'); 
const editBtn = prInfo.querySelector('.profile__edit'); 
const popup = document.querySelector('.popup'); 
const closeBtn = popup.querySelector('.popup__btn-close'); 
const saveBtn = popup.querySelector('.popup__btn-save'); 
const formElement = popup.querySelector('.popup__container');

const prTitle = document.querySelector('.profile__title'); 
const prSubtitle = document.querySelector('.profile__subtitle'); 
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
const cardsContainer = document.querySelector('.elements'); 
const likeBtn = document.querySelector('.element__like');

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


function showPopup(localPopup, allName, info) {
    localPopup.classList.toggle('popup_opened');

    const inputName = localPopup.querySelector('.popup__text_type_name');
    inputName.textContent = allName;

    const inputInfo = localPopup.querySelector('.popup__text_type_job');
    inputInfo.textContent = info;

}

editBtn.addEventListener('click', () => showPopup (popup, prTitle.textContent, prSubtitle.textContent));
//closeBtn.addEventListener('click', () => showPopup (popup));
addBtn.addEventListener('click', () => showPopup (popupNewPlace, " ", " "));
//closeBtnNewPlace.addEventListener('click', () => showPopup (popupNewPlace));

function closePopup(localPopup) {
    localPopup.classList.remove('.popup_opened')
}

function bioFormSubmitHandler(evt) {
    evt.preventDefault();
    prTitle.textContent = nameInput.value;
    prSubtitle.textContent = infoInput.value;
    closePopup(localPopup);
}
formElement.addEventListener('submit', bioFormSubmitHandler); 
closeBtn.addEventListener('click', () => closePopup (popup));
//closeBtnNewPlace.addEventListener('click', () => closePopup (popupNewPlace));

function newPlaceFormSubmitHandler(evt) {
    evt.preventDefault();
    newCardData = {
    name: nameInputNewPlace.value,
    link: lincInputNewPlace.value,
};

addNewCards(newCardData);
    closePopupNewPlace();
}
formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler); 
closeBtnNewPlace.addEventListener('click', () => closePopup (popupNewPlace));

function openImgPopup(evt) {
    popupImg.classList.add("popup_opened");
    popupBigImage.src = evt.target.src;
    const NameCard = evt.target.nextElementSibling.nextElementSibling.textContent;
    console.log(NameCard);
    popupBigImage.alt = NameCard;
    popupFigcaption.textContent = NameCard;
}

function closeImgPopup() { 
    popupImg.classList.remove('popup_opened');
}

function likeCard(event) {
    console.log('like button clicked. event=' + event);
    event.target.classList.toggle('element__like_active');
}

function addNewCards(item) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.element__title').textContent = item.name;
    cardElement.querySelector('.element__image').src = item.link;
    cardElement.querySelector('.element__remove-button').addEventListener("click", removeCard);
    cardElement.querySelector('.element__like').addEventListener("click", likeCard);
    cardElement.querySelector('.element__image').addEventListener("click",openImgPopup);
    cardsContainer.prepend(cardElement);
}

function addCards(cards) {
    cards.forEach(card => addNewCards(card));
}
  
addCards(cards);

function removeCard(event) {
    const cardElement = event.target.closest(".element");
    cardsContainer.removeChild(cardElement);
}

closeBtnImg.addEventListener("click", closeImgPopup);

/*
function showPopup() { 
    popup.classList.toggle('popup_opened');
    nameInput.value = prTitle.textContent; 
    jobInput.value = prSubtitle.textContent;
}

function showPopupNewPlace() { 
    popupNewPlace.classList.toggle('popup_opened');
    nameInputNewPlace.value = '';
    lincInputNewPlace.value = '';
}

function closePopup() { 
    popup.classList.remove('popup_opened');
}

function bioFormSubmitHandler(evt) {
    evt.preventDefault();
    prTitle.textContent = nameInput.value;
    prSubtitle.textContent = jobInput.value;
    closePopup();
}

function closePopupNewPlace() { 
    popupNewPlace.classList.remove('popup_opened');
}

function newPlaceFormSubmitHandler(evt) {
    evt.preventDefault();
    newCardData = {
    name: nameInputNewPlace.value,
    link: lincInputNewPlace.value,
};

addNewCards(newCardData);
    closePopupNewPlace();
}



function openImgPopup(evt) {
    popupImg.classList.add("popup_opened");
    popupBigImage.src = evt.target.src;
    const NameCard = evt.target.nextElementSibling.nextElementSibling.textContent;
    console.log(NameCard);
    popupBigImage.alt = NameCard;
    popupFigcaption.textContent = NameCard;
}

function closeImgPopup() { 
    popupImg.classList.remove('popup_opened');
}

function likeCard(event) {
    console.log('like button clicked. event=' + event);
    event.target.classList.toggle('element__like_active');
}

function addNewCards(item) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.element__title').textContent = item.name;
    cardElement.querySelector('.element__image').src = item.link;
    cardElement.querySelector('.element__remove-button').addEventListener("click", removeCard);
    cardElement.querySelector('.element__like').addEventListener("click", likeCard);
    cardElement.querySelector('.element__image').addEventListener("click",openImgPopup);
    cardsContainer.prepend(cardElement);
}

function addCards(cards) {
    cards.forEach(card => addNewCards(card));
}
  
addCards(cards);

function removeCard(event) {
    const cardElement = event.target.closest(".element");
    cardsContainer.removeChild(cardElement);
}

formElement.addEventListener('submit', bioFormSubmitHandler); 
editBtn.addEventListener('click', showPopup); 
closeBtn.addEventListener('click', closePopup); 
formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler); 
addBtn.addEventListener('click', showPopupNewPlace); 
closeBtnNewPlace.addEventListener('click', closePopupNewPlace);
closeBtnImg.addEventListener("click", closeImgPopup);
*/