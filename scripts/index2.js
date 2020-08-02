// переменные секции "Профиль"
export  const profileInfo = document.querySelector('.profile__info');
export const editFormButton = profileInfo.querySelector('.profile__edit');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');

// переменные секции "popup_profile"
export const nameInput = popup.querySelector('.popup__text_type_name');
export const infoInput = popup.querySelector('.popup__text_type_job');
export const addFormButton = document.querySelector('.profile__add-button');

// переменные к секции "popup_new_place"
export const popupNewPlace = document.querySelector('.popup_new_place');
export const closeBtnNewPlace = popupNewPlace.querySelector('.popup__btn-close');
export const formElementNewPlace = popupNewPlace.querySelector('.popup__container');
export const nameInputNewPlace = popupNewPlace.querySelector('.popup__text_type_name');
export const lincInputNewPlace = popupNewPlace.querySelector('.popup__text_type_job');

// переменные к секции "popup_img"
export const popupImg = document.querySelector(".popup_img");
export const closeBtnImg = popupImg.querySelector(".popup__btn-close");
export const popupBigImage = document.querySelector(".popup__big-image");
export const popupFigcaption = document.querySelector(".popup__figcaption");

// переменные к карточкам
export const cardsContainer = document.querySelector('.card-container');
export const cardTemplate = document.querySelector('#card-template').content;
export const cardImage = document.querySelector('.card__image');  // новая переменная

// общие переменные
export const allPopups = Array.from(document.querySelectorAll('.popup'));


_addCards(cards) {
        cards.forEach(card => cardsContainer.prepend(createCard(card)));
    }


// экспорт переменных 
// export {profileInfo, editFormButton, popup, closeBtn, formElement, bioPopupBtn, 
// profileTitle, profileSubtitle, nameInput, infoInput, addFormButton, 
// popupNewPlace, closeBtnNewPlace, formElementNewPlace, nameInputNewPlace, lincInputNewPlace,
// popupImg, closeBtnImg, popupBigImage, popupFigcaption, cardsContainer, cardTemplate, allPopups};

// const closePopupHandler = (evt, popup) => {
//     if (evt.target.classList.contains('popup')) {
//         togglePopup(popup);
//     }
// };

// const popupIsOpened = (popupElement) => {
//     return popupElement.classList.contains('popup_opened');
// };

// const closePopupOnDocEscHandler = (evt) => {
//     evt.preventDefault();
//     if (evt.key == "Escape") {
//         const popupElement = allPopups.find(popupElement => popupIsOpened(popupElement));
//         if (popupElement) {
//             togglePopup(popupElement);
//         };
//     };
// };

// function addPopupEscListener() {
//     document.addEventListener('keyup', closePopupOnDocEscHandler);
// }

// function removePopupEscListener() {
//     document.removeEventListener('keyup', closePopupOnDocEscHandler);
// }

// function togglePopup(localPopup) {
//     if (popupIsOpened(localPopup)) {
//         removePopupEscListener();
//     } else {
//         addPopupEscListener();
//     }
//     localPopup.classList.toggle('popup_opened');
// }

// function showPopupBio(fullName, info) {
//     nameInput.value = fullName;
//     infoInput.value = info;

//     toggleButtonStateWithForm(formElement, bioPopupBtn);

//     resetValidationErrors(popup, validationParams);

//     togglePopup(popup);
// }

// function showPopupNewPlace() {
//     nameInputNewPlace.value = "";
//     lincInputNewPlace.value = "";

//     resetValidationErrors(popupNewPlace, validationParams);

//     togglePopup(popupNewPlace);
// }

// function openImgPopup(evt) {
//     popupBigImage.src = evt.target.src;
//     popupBigImage.alt = evt.target.alt;
//     popupFigcaption.textContent = evt.target.alt;

//     togglePopup(popupImg);
// }

// function bioFormSubmitHandler(evt) {
//     evt.preventDefault();
//     profileTitle.textContent = nameInput.value;
//     profileSubtitle.textContent = infoInput.value;

//     togglePopup(popup);
// }

// function removeCard(event) {
//     const cardElement = event.target.closest(".card");
//     cardElement.remove();
// }



// function newPlaceFormSubmitHandler(evt) {
//     evt.preventDefault();
//     const newCardData = {
//         name: nameInputNewPlace.value,
//         link: lincInputNewPlace.value,
//     };
//     togglePopup(popupNewPlace);
//     cardsContainer.prepend(createCard(newCardData));
//     formElementNewPlace.reset();
// }

// function addCards(cards) {
//     cards.forEach(card => cardsContainer.prepend(createCard(card)));
// }

popup.addEventListener('click', (evt) => closePopupHandler(evt, popup));
popupNewPlace.addEventListener('click', (evt) => closePopupHandler(evt, popupNewPlace));
popupImg.addEventListener('click', (evt) => closePopupHandler(evt, popupImg));


editFormButton.addEventListener('click', () => showPopupBio(profileTitle.textContent, profileSubtitle.textContent));
addFormButton.addEventListener('click', () => showPopupNewPlace());
closeBtn.addEventListener('click', () => togglePopup(popup));
closeBtnNewPlace.addEventListener('click', () => togglePopup(popupNewPlace));
closeBtnImg.addEventListener('click', () => togglePopup(popupImg));
formElement.addEventListener('submit', bioFormSubmitHandler);
formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler);
addCards(cards);
