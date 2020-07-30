// // переменные секции "Профиль"
// const profileInfo = document.querySelector('.profile__info');
// const editFormButton = profileInfo.querySelector('.profile__edit');
// const profileTitle = document.querySelector('.profile__title');
// const profileSubtitle = document.querySelector('.profile__subtitle');

// // переменные секции "popup_profile"
// const nameInput = popup.querySelector('.popup__text_type_name');
// const infoInput = popup.querySelector('.popup__text_type_job');
// const AddFormButton = document.querySelector('.profile__add-button');

// // переменные к секции "popup_new_place"
// const popupNewPlace = document.querySelector('.popup_new_place');
// const closeBtnNewPlace = popupNewPlace.querySelector('.popup__btn-close');
// const formElementNewPlace = popupNewPlace.querySelector('.popup__container');
// const nameInputNewPlace = popupNewPlace.querySelector('.popup__text_type_name');
// const lincInputNewPlace = popupNewPlace.querySelector('.popup__text_type_job');

// // переменные к секции "popup_img"
// const popupImg = document.querySelector(".popup_img");
// const closeBtnImg = popupImg.querySelector(".popup__btn-close");
// const popupBigImage = document.querySelector(".popup__big-image");
// const popupFigcaption = document.querySelector(".popup__figcaption");

// // переменные к карточкам
// const cardsContainer = document.querySelector('.card-container');
// const cardTemplate = document.querySelector('#card-template').content;
// const cardImage = document.querySelector('.card__image');  // новая переменная

// // общие переменные
// const allPopups = Array.from(document.querySelectorAll('.popup'));



//импорт переменных в любой(?) файл (нужно ли импортировать все указанные переменные?)
export {profileInfo, editFormButton, popup, closeBtn, formElement, bioPopupBtn, 
profileTitle, profileSubtitle, nameInput, infoInput, AddFormButton, 
popupNewPlace, closeBtnNewPlace, formElementNewPlace, nameInputNewPlace, lincInputNewPlace,
popupImg, closeBtnImg, popupBigImage, popupFigcaption, cardsContainer, cardTemplate, allPopups};

const closePopupHandler = (evt, popup) => {
    if (evt.target.classList.contains('popup')) {
        togglePopup(popup);
    }
};

const popupIsOpened = (popupElement) => {
    return popupElement.classList.contains('popup_opened');
};

const closePopupOnDocEscHandler = (evt) => {
    evt.preventDefault();
    if (evt.key == "Escape") {
        const popupElement = allPopups.find(popupElement => popupIsOpened(popupElement));
        if (popupElement) {
            togglePopup(popupElement);
        };
    };
};

function addPopupEscListener() {
    document.addEventListener('keyup', closePopupOnDocEscHandler);
}

function removePopupEscListener() {
    document.removeEventListener('keyup', closePopupOnDocEscHandler);
}

function togglePopup(localPopup) {
    if (popupIsOpened(localPopup)) {
        removePopupEscListener();
    } else {
        addPopupEscListener();
    }
    localPopup.classList.toggle('popup_opened');
}

function showPopupBio(fullName, info) {
    nameInput.value = fullName;
    infoInput.value = info;

    toggleButtonStateWithForm(formElement, bioPopupBtn);

    resetValidationErrors(popup, validationParams);

    togglePopup(popup);
}

function showPopupNewPlace() {
    nameInputNewPlace.value = "";
    lincInputNewPlace.value = "";

    resetValidationErrors(popupNewPlace, validationParams);

    togglePopup(popupNewPlace);
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

function removeCard(event) {
    const cardElement = event.target.closest(".card");
    cardElement.remove();
}



function newPlaceFormSubmitHandler(evt) {
    evt.preventDefault();
    const newCardData = {
        name: nameInputNewPlace.value,
        link: lincInputNewPlace.value,
    };
    togglePopup(popupNewPlace);
    cardsContainer.prepend(createCard(newCardData));
    formElementNewPlace.reset();
}

function addCards(cards) {
    cards.forEach(card => cardsContainer.prepend(createCard(card)));
}

popup.addEventListener('click', (evt) => closePopupHandler(evt, popup));
popupNewPlace.addEventListener('click', (evt) => closePopupHandler(evt, popupNewPlace));
popupImg.addEventListener('click', (evt) => closePopupHandler(evt, popupImg));


editFormButton.addEventListener('click', () => showPopupBio(profileTitle.textContent, profileSubtitle.textContent));
AddFormButton.addEventListener('click', () => showPopupNewPlace());
closeBtn.addEventListener('click', () => togglePopup(popup));
closeBtnNewPlace.addEventListener('click', () => togglePopup(popupNewPlace));
closeBtnImg.addEventListener('click', () => togglePopup(popupImg));
formElement.addEventListener('submit', bioFormSubmitHandler);
formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler);
addCards(cards);
