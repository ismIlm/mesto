// здесь должны быть попапы
import { popup, popupNewPlace, popupImg } from './constants.js';

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

popup.addEventListener('click', (evt) => closePopupHandler(evt, popup));
popupNewPlace.addEventListener('click', (evt) => closePopupHandler(evt, popupNewPlace));
popupImg.addEventListener('click', (evt) => closePopupHandler(evt, popupImg));

export {
    bioFormSubmitHandler,
    newPlaceFormSubmitHandler,
    openImgPopup,
};
