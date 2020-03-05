/* eslint-disable no-undef */
export default class MainApi {
  constructor(options) {
    this.options = options;
  }

  signup(email, password, name) {
    return fetch(`${this.options.baseUrl}/signup`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        name: `${name}`,
      }),
    })
      .then((res) => res.json()
        .then((body) => (res.ok
          ? Promise.resolve(body)
          : Promise.reject(body))));
  }

  // eslint-disable-next-line class-methods-use-this
  signin(email, password) {
    return fetch(`${this.options.baseUrl}/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    })
      .then((res) => res.json()
        .then((body) => (res.ok
          ? Promise.resolve(body)
          : Promise.reject(body))));
  }

  logout() {
    return fetch(`${this.options.baseUrl}/users/logout`, {
      credentials: 'include',
    })
      .then((res) => res.json()
        .then((body) => (res.ok
          ? Promise.resolve(body)
          : Promise.reject(body))));
  }

  getUserData() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      credentials: 'include',
    })
      .then((res) => res.json()
        .then((body) => (res.ok
          ? Promise.resolve(body)
          : Promise.reject(body))));
  }

  getArticles() {
    return fetch(`${this.options.baseUrl}/articles`, {
      credentials: 'include',
    })

      .then((res) => res.json()
        .then((body) => (res.ok
          ? Promise.resolve(body)
          : Promise.reject(body))))
      .then((result) => (result.article));
  }

  createArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this.options.baseUrl}/articles`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        keyword: `${keyword}`,
        title: `${title}`,
        text: `${text}`,
        date: `${date}`,
        source: `${source}`,
        link: `${link}`,
        image: `${image}`,
      }),
    })
      .then((res) => res.json()
        .then((body) => (res.ok
          ? Promise.resolve(body)
          : Promise.reject(body))))
      .then((result) => result);
  }

  removeArticle(idArticle) {
    return fetch(`${this.options.baseUrl}/articles/${idArticle}`, { // удаление карт
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json()
        .then((body) => (res.ok
          ? Promise.resolve(body)
          : Promise.reject(body))))
      .then((result) => (result));
  }
}
