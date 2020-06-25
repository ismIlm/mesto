const prInfo = document.querySelector('.profile__info'); 
const editBtn = prInfo.querySelector('.profile__edit'); 
const popup = document.querySelector('.popup'); 
const closeBtn = popup.querySelector('.popup__btn-close'); 
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

function showPopup(localPopup, allName, info) {
    localPopup.classList.toggle('popup_opened');

    const inputName = localPopup.querySelector('.popup__text_type_name');
    inputName.textContent = allName;

    const inputInfo = localPopup.querySelector('.popup__text_type_job');
    inputInfo.textContent = info;

}

function bioFormSubmitHandler(evt) {
    evt.preventDefault();
    prTitle.textContent = nameInput.value;
    prSubtitle.textContent = infoInput.value;
}

editBtn.addEventListener('click', () => showPopup(popup, prTitle.textContent, prSubtitle.textContent));
closeBtn.addEventListener('click', () => popup.classList.toggle('popup_opened'));
addBtn.addEventListener('click', () => showPopup(popupNewPlace, " ", " "));
closeBtnNewPlace.addEventListener('click', () => popupNewPlace.classList.toggle('popup_opened'));
formElement.addEventListener('submit', bioFormSubmitHandler); 

function openImgPopup(evt) {
    const parentElement = evt.target.parentElement;
    const element = parentElement.querySelector('.element__title');
    popupImg.classList.toggle("popup_opened");
    popupBigImage.src = evt.target.src;
    const nameCard = element.textContent;
    popupBigImage.alt = nameCard;
    popupFigcaption.textContent = nameCard;
}

formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler); 
closeBtnImg.addEventListener ('click', (evt) => popupImg.classList.toggle("popup_opened"));

function createCard(item) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.element__title').textContent = item.name;
    cardElement.querySelector('.element__image').src = item.link;
    cardElement.querySelector('.element__remove-button').addEventListener("click", removeCard);
    cardElement.querySelector('.element__like').addEventListener("click", likeCard);
    cardElement.querySelector('.element__image').addEventListener("click",openImgPopup);
    return cardElement;
}

function newPlaceFormSubmitHandler(evt) {
    evt.preventDefault();
    const newCardData = {
        name: nameInputNewPlace.value,
        link: lincInputNewPlace.value,
    };

    cardsContainer.prepend(createCard(newCardData));
}

function likeCard(event) {
    event.target.classList.toggle('element__like_active');
}

function addCards(cards) {
    cards.forEach(card => cardsContainer.prepend(createCard(card)));
}
  
addCards(cards);

function removeCard(event) {
    const cardElement = event.target.closest(".element");
    cardsContainer.removeChild(cardElement);
}