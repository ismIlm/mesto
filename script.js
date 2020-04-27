let prInfo = document.querySelector('.profile__info');
let editBtn = prInfo.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeBtn = popup.querySelector('.popup__btn-close');
let saveBtn = popup.querySelector('.popup__btn-save');
let formElement = popup.querySelector('.popup__container');
let prTitle = document.querySelector('.profile__title');
let prSubtitle = document.querySelector('.profile__subtitle');

function showPopup() {
    popup.classList.toggle('popup_opened');
    // 1. сохранить существующее значение
    let nameInput = popup.querySelector('.popup__text_type_name');
    nameInput.value = prTitle.textContent;

    let jobInput = popup.querySelector('.popup__text_type_job');
    jobInput.value = prSubtitle.textContent;
}
editBtn.addEventListener('click', showPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
closeBtn.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();

    // 1. ввести новые данные
    // 1.1. возьмем новое имя
    let newName = popup.querySelector('.popup__text_type_name').value;
    console.log('New name of Jack Custo is');
    console.log(newName);

    let newJob = popup.querySelector('.popup__text_type_job').value;
    console.log('New job of исследователь is');
    console.log(newJob);
    // 1.2. сохраним новое имя на странице
    let profileName = document.querySelector('.profile__title');
    profileName.textContent = newName;

    let profileJob = document.querySelector('.profile__subtitle');
    profileJob.textContent = newJob;
    
    // 1.3. возьмем новый род деят-ти
    // 1.4. сохраним новый род деятель-ти
    // 2. закрыть popup
   /* 
    let nameInput = popup.querySelector('popup__text_type_name');
    let jobInput = popup.querySelector('popup__text_type_job');

    let newName = popup.querySelector('profile__title');
    let newJob = popup.querySelector('profile__subtitle');

    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;*/

    closePopup();

}
formElement.addEventListener('submit', formSubmitHandler);
