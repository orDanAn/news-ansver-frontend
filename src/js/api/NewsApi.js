const url = function(word, data) {
  const q = 'q=' + word + '&';
  const from = 'from=' + data + '&';
  return 'https://newsapi.org/v2/everything?' + q + from + 'sortBy=popularity&' + 'language=ru&' + 'pageSize=5'
}
// нажимаем кнопку забираем статью из значения и вставляем в функцию. Дату расчитываем от сегоднешней минус 7 дней посмотреть как форматировать даты
// текущая дата в мл секундах Date.now()
// 7 дней в мл секундах
// получаем дату new Date(timestamp)

/*
const word = 'путин';
const q = 'q=' + word + '&';
const from = 'from=2020-02-12&';
console.log(q);
const url = 'https://newsapi.org/v2/everything?' + q + from + 'sortBy=popularity&' + 'language=ru&' + 'pageSize=100'
*/

export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  getNews() {
    return fetch(url('путин', '2020-02-12'), {
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
      .then((res) => {return res.articles})
      //.then((res) => console.log(res))
      .catch((err) => console.error(err));
  }
}
