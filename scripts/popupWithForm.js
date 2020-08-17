import Popup from './popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    const popupImage =  this._popupElement.querySelector('.popup_image');
    console.log(data);
    popupImage.src = data._link;
    popupImage.alt += data._name;
    this._popupElement.querySelector('.popup__box-title').textContent = data.name;
    super.open();
  }

  

  _getInputValues() {
      this._inputList = Array.from(this._popupSelector.querySelectorAll('.popup__input')); 
      this._formValue = {}; 
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

  } 
  closePopup() {
    super.closePopup();
    this._popupSelector.querySelector('.popup_container').reset();
  }
}