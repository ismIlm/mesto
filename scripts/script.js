const prInfo = document.querySelector('.profile__info'); 
const prTitle = document.querySelector('.profile__title');
const prSubtitle = document.querySelector('.profile__subtitle');
const addBtn = document.querySelector('.profile__add-button');
const editBtn = prInfo.querySelector('.profile__edit');

const popup = document.querySelector('.popup_profile');
const closeBtn = popup.querySelector('.popup__btn-close'); 
const saveBtn = popup.querySelector('.popup__btn-save');
const formElement = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('.popup__text_type_name');
const jobInput = popup.querySelector('.popup__text_type_job');

const popupNewPlace = document.querySelector('.popup_new_place');
const formElementNewPlace = popupNewPlace.querySelector('.popup__container');
const cardName = popupNewPlace.querySelector('.profile__title');
const cardLinc = popupNewPlace.querySelector('.profile__subtitle');
const nameInputNewPlace = popupNewPlace.querySelector('.popup__text_type_name');
const lincInputNewPlace = popupNewPlace.querySelector('.popup__text_type_job');
const closeBtnNewPlace = popupNewPlace.querySelector('.popup__btn-close'); 

const elements = document.querySelector('.elements'); //карточки

function showPopup() { 
    popup.classList.toggle('popup_opened');
    nameInput.value = prTitle.textContent; 
    jobInput.value = prSubtitle.textContent;
}

function closePopup() { 
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    prTitle.textContent = nameInput.value;
    prSubtitle.textContent = jobInput.value;
    closePopup();
}

function showPopupNewPlace() { 
    popupNewPlace.classList.toggle('popup_opened');
    nameInputNewPlace.value = cardName.textContent;
    lincInputNewPlace.value = cardLinc.textContent;
}

function closePopupNewPlace() { 
    popupNewPlace.classList.remove('popup_opened');
}

function formSubmitHandler(evt) { // 3. инициируем отправку формы
    evt.preventDefault(); // отменяем переход по ссылке ???
    cardName.textContent = nameInputNewPlace.value; //вывести текстовое содержимое из поля ввода 
    cardLinc.textContent = lincInputNewPlace.value; //вывести текстовое содержимое из поля ввода 
    closePopupNewPlace(); // закрыть попап
}
formElement.addEventListener('submit', formSubmitHandler); 
editBtn.addEventListener('click', showPopup); 
closeBtn.addEventListener('click', closePopup); 
formElementNewPlace.addEventListener('submit', formSubmitHandler); 
addBtn.addEventListener('click', showPopupNewPlace); 
closeBtnNewPlace.addEventListener('click', closePopupNewPlace);

/*

const initialCards = [ // где это вставить? и что дальше?
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

// Добавление карточек(элементов)

// Включение лайков
function handleLikeButtonClick(event) {
    event.target.classList.toggle('element__like-button_active');
}

// Удаление карточек(элементов)
function handleRemoveButtonClick(event) {
    const deleteElement = event.target.closest('.element');
    deleteElement.remove();
}    

// Zoom  (Увеличение) карточки при нажатии
function handleImageElementClick(event) {
    popupImage.src = event.target.src;
    popupCaption.textContent = event.target.alt;
   
}

// Добавление карточек(элементов)

function createCard(item) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.element__text').textContent = item.name;
    cardElement.querySelector('.element__image').src = item.link;
    cardElement.querySelector('.element__image').alt = cardElement.querySelector('.element__text').textContent;

    const likeButton = cardElement.querySelector('.element__like-button');
    likeButton.addEventListener('click', handleLikeButtonClick);
    
    const removeButton = cardElement.querySelector('.element__remove-button'); 
    removeButton.addEventListener('click', handleRemoveButtonClick);

    const imageElement = cardElement.querySelector('.element__image');
    imageElement.addEventListener('click', handleImageElementClick(imageElement));

    return cardElement;
    // elements.prepend(cardElement);

}

function addCreateCard() {
    elements.prepend();   
}

cards.forEach(createCard);


/*const popupZoom = document.querySelector('.popup_zoom');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const closeButtonZoom = document.querySelector('.popup__close-button_zoom');*/
