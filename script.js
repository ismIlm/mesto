const prInfo = document.querySelector('.profile__info');
const prTitle = document.querySelector('.profile__title');
const prSubtitle = document.querySelector('.profile__subtitle');
const addButton = document.querySelector('.profile__add-button');
const editBtn = prInfo.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector('.popup__btn-close');
const saveBtn = popup.querySelector('.popup__btn-save');
const formElement = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('.popup__text_type_name');
const jobInput = popup.querySelector('.popup__text_type_job');
const elements = document.querySelector('.elements');


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
formElement.addEventListener('submit', formSubmitHandler);

editBtn.addEventListener('click', showPopup);

closeBtn.addEventListener('click', closePopup);





const closeButtonNewPlace = document.querySelector('.popup__close-button_new-place');






const popupZoom = document.querySelector('.popup_zoom');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const closeButtonZoom = document.querySelector('.popup__close-button_zoom');
const popupNewPlace = document.querySelector('.popup_new-place');
const formElementNewPlace = document.querySelector('.popup__form_new-place');
const placeInput = document.querySelector('.popup__input_new-place_name');
const linkInput = document.querySelector('.popup__input_new-place_link');