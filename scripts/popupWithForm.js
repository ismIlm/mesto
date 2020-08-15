import Popup from './popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {submitForm}) {
      super(popupSelector);
      this._submitForm = submitForm;
    }
  
    //метод собирает все поля формы
    _getInputValues() {
        this._inputList = Array.from(this._popupSelector.querySelectorAll('.popup__input')); // найти все инпуты в попапе и сделать из них массив
        this._formValue = {}; // создать объект 
        this._inputList.forEach(item => {
            this._formValue[item.name] = item.value;
          });
        return this._formValue
    }

    setEventListeners() {
      super.setEventListeners();
      this._popupSelector.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const data = this._getInputValues()
        console.log(data)
        this._submitForm(data)
      });

    closePopup() {
      super.closePopup();
      this._popupSelector.querySelector('.popup_container').reset();
    }
}