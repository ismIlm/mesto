const prInfo = document.querySelector('.profile__info');
const editBtn = prInfo.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector('.popup__btn-close');
const saveBtn = popup.querySelector('.popup__btn-save');
const formElement = popup.querySelector('.popup__container');
let prTitle = document.querySelector('.profile__title');
let prSubtitle = document.querySelector('.profile__subtitle');
let nameInput = popup.querySelector('.popup__text_type_name');
let jobInput = popup.querySelector('.popup__text_type_job');

function showPopup() {
    popup.classList.toggle('popup_opened');
    
    nameInput.value = prTitle.textContent;

    jobInput.value = prSubtitle.textContent;
}
editBtn.addEventListener('click', showPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
closeBtn.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
 
    let newName = nameInput.value;
    console.log('New name of Jack Custo is');
    console.log(newName);

    let newJob = jobInput.value;
    console.log('New job of исследователь is');
    console.log(newJob);
   
    prTitle.textContent = newName;

    prSubtitle.textContent = newJob;
   
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);
