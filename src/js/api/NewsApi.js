export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  // eslint-disable-next-line class-methods-use-this
  getNews(url, keyAuthorization) {
    // eslint-disable-next-line no-undef
    return fetch(url, {
      headers: {
        authorization: keyAuthorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
      .then((res) => res.articles);
  }
}
