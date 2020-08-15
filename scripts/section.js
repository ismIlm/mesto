export default class Section {
    constructor ({items, renderer}, cardsContainer) {
        this._renderItems = items;
        this._renderer = renderer;
        this._cardsContainer = document.querySelector(cardsContainer);
    }

    _renderItems() {
        this._renderItems.forEach(item => {
            this._renderer(item)
        });
    }

    addItem(CardElement) {
        this._cardsContainer.prepend(CardElement);
    }
}