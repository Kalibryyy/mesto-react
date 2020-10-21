class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this.headers = options.headers;
  }

  _getInitialCards(path) {
    return fetch(`${this._url}${path}`, {
        headers: this.headers
      })
      .then(this.checkStatus)
      .catch(this.showError);
  }

  getUserInfo(path) {
    return fetch(`${this._url}${path}`, {
        headers: this.headers
      })
      .then(this.checkStatus)
      .catch(this.showError);
  }

  getAppInfo(userDataPath, cardsDataPath) {
    return Promise.all([this.getUserInfo(userDataPath), this._getInitialCards(cardsDataPath)])
  }

  updateInfo(path, {name, about}) {
    return fetch(`${this._url}${path}`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then(this.checkStatus)
      .catch(this.showError);
  }

  put(path, id) {
    return fetch(`${this._url}${path}/${id}`, {
        method: "PUT",
        headers: this.headers
      })
      .then(this.checkStatus)
      .catch(this.showError);
  }

  delete(path, id) {
    return fetch(`${this._url}${path}/${id}`, {
      method: "DELETE",
      headers: this.headers
    })
      .then(this.checkStatus)
      .then(res => res)
      .catch(this.showError);
  }

    updateAvatar(path, { avatar }) {
      return fetch(`${this._url}${path}`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          avatar: avatar
        })
      })
        .then(this.checkStatus)
        .catch(this.showError);
    }

  addCard(path, { name, link }) {
    return fetch(`${this._url}${path}`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
      .then(this.checkStatus)
      .catch(this.showError);
  }

  checkStatus(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  showError(err) {
    return console.log(err);
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15/',
  headers: {
    authorization: '4b693f44-f60e-4f4e-bfd2-2bb476e7515d',
    'Content-Type': 'application/json'
  }
});