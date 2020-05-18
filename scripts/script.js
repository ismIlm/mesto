const prInfo = document.querySelector('.profile__info'); 
const editBtn = prInfo.querySelector('.profile__edit'); 
const popup = document.querySelector('.popup'); 
const closeBtn = popup.querySelector('.popup__btn-close'); 
const saveBtn = popup.querySelector('.popup__btn-save'); 
const formElement = popup.querySelector('.popup__container'); 
const prTitle = document.querySelector('.profile__title'); 
const prSubtitle = document.querySelector('.profile__subtitle'); 
const nameInput = popup.querySelector('.popup__text_type_name'); 
const jobInput = popup.querySelector('.popup__text_type_job'); 
const addBtn = document.querySelector('.profile__add-button');
const popupNewPlace = document.querySelector('.popup_new_place');
const closeBtnNewPlace = popupNewPlace.querySelector('.popup__btn-close'); 
const formElementNewPlace = popupNewPlace.querySelector('.popup__container');
const elTitle = document.querySelector('.element__title');
const elLinc = document.querySelector('.element__image');
const nameInputNewPlace = popupNewPlace.querySelector('.popup__text_type_name');
const lincInputNewPlace = popupNewPlace.querySelector('.popup__text_type_job');
const cardsContainer = document.querySelector('.elements'); //куда вставляются картинки
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

function showPopup() { 
    popup.classList.toggle('popup_opened');
    nameInput.value = prTitle.textContent; 
    jobInput.value = prSubtitle.textContent;
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

function showPopupNewPlace() { 
    popupNewPlace.classList.toggle('popup_opened');
    nameInputNewPlace.value = '';
    lincInputNewPlace.value = '';
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
    cardElement.querySelector(".element__like").addEventListener("click", likeCard);

    cardsContainer.prepend(cardElement);
 
    return cardElement;
}


function addCards(cards) {
    cards.map(function (card) {
      cardsContainer.prepend(addNewCard(card));
    });
  }
  
addNewCards(cards);

// Функция удалить карточку 

function removeCard(event) {
    const cardElement = event.target.closest(".element");
    const removeButton = cardElement.querySelector('.element__remove-button'); 
    cardElement.querySelector(".element__remove-button").removeEventListener("click", remove);
    cardElement.querySelector(".element__image").removeEventListener("click", openImgPopup);
    cardsContainer.removeChild(cardElement);
    cards.splice(cardElement, prepend);
    removeButton.addEventListener('click', handleRemoveButtonClick);
    cardElement.addEventListener('click', handleImageElementClick(imageElement));
    return cardElement;
}


 /*   
// Zoom  (Увеличение) карточки при нажатии
function handleImageElementClick(event) {
    popupImage.src = event.target.src;
    popupCaption.textContent = event.target.alt;
   
}



/*const popupZoom = document.querySelector('.popup_zoom');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const closeButtonZoom = document.querySelector('.popup__close-button_zoom');*/



formElement.addEventListener('submit', bioFormSubmitHandler); 
editBtn.addEventListener('click', showPopup); 
closeBtn.addEventListener('click', closePopup); 
formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler); 
addBtn.addEventListener('click', showPopupNewPlace); 
closeBtnNewPlace.addEventListener('click', closePopupNewPlace);