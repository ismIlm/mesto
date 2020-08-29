import { cardsContainer } from '../utils/constants.js';

export default class Section {
    constructor ({items, renderer}, cardsContainer) {
        this._items = items;
        this._renderer = renderer;
        this._cardsContainer = document.querySelector(cardsContainer);
    }

    renderAll() {
        this._items.forEach(card => {
            cardsContainer.prepend(this._renderer(card));
        }); 
    }

    addItem(CardElement) {
        this._cardsContainer.prepend(CardElement);
    }
}