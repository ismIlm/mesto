let prInfo = document.querySelector('.profile__info');
let editBtn = prInfo.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeBtn = popup.querySelector('.popup__btn-close');
let saveBtn = popup.querySelector('.popup__btn-save');

function showPopup() {
    popup.classList.toggle('popup_opened');
}
editBtn.addEventListener('click', showPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
closeBtn.addEventListener('click', closePopup);

let formElement = popup.querySelector('popup__container');

function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameInput = popup.querySelector('popup__text_type_name');
    let jobInput = popup.querySelector('popup__text_type_job');

    let newName = popup.querySelector('profile__title');
    let newJob = popup.querySelector('profile__subtitle');

    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;

    popup.classList.remove('popup_opened');

}
formElement.addEventListener('submit', formSubmitHandler);
