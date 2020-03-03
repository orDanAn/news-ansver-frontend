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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json()); // посмотреть как обробатывать ошибки в fetch
      })
      .catch((err) => err);
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
      .then((res) => {
        if (res.ok) {
          return res.json;
        }
        return Promise.reject(res.json()); // посмотреть как обробатывать ошибки в fetch
      })
      .catch((err) => err);
  }

  logout() {
    return fetch(`${this.options.baseUrl}/users/logout`, {
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
      .catch((err) => console.log(err));
  }

  getUserData() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      credentials: 'include',
    })

      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
      .then((result) => result)
      .catch((err) => err.then((res) => console.error(res.message)));
  }

  getArticles() {
    return fetch(`${this.options.baseUrl}/articles`, {
      credentials: 'include',
    })

      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
      .then((result) => (result.article))
      .catch((err) => err.then((res) => console.error({ res })));
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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json()); // посмотреть как обробатывать ошибки в fetch
      })
      .then((result) => result)
      .catch((err) => err.then((res) => console.error({ res })));
  }

  removeArticle(idArticle) {
    return fetch(`${this.options.baseUrl}/articles/${idArticle}`, { // удаление карт
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json()); // посмотреть как обробатывать ошибки в fetch
      })
      .then((result) => (result))
      .catch((err) => err.then((res) => console.error({ res })));
  }
}
