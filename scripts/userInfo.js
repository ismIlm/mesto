export default class UserInfo {
    constructor ({nameSelector, jobSelector}) {
        this._nameSelector = nameSelector;
        this._jobSelector = jobSelector;
        this._cardsContainer = document.querySelector(cardsContainer);
        this._nameInput = document.querySelector(this._nameSelector);
        this._infoInput = document.querySelector(this._jobSelector);
    }

    getUserInfo() {
        this._userInfo = {
            name: this._nameInput.textComtent,
            job: this._infoInput.textComtent
        }
            return this._userInfo;
    }

    setUserInfo({name, job}) {
      this._nameInput.textComtent = name;
      this._infoInput.textComtent = job;      
    }
}