export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  // eslint-disable-next-line class-methods-use-this
  getNews(url) {
    // eslint-disable-next-line no-undef
    return fetch(url, {
      headers: {
        authorization: '881473579aaa43939fa0c60606e02301',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json()); // посмотреть как обробатывать ошибки в fetch
      })
      .then((res) => res.articles)
      .catch((err) => console.error(err));
  }
}
