export default function url(word, data) {
  const q = `q= ${word}&`;
  const from = `from=${data}&`;
  // eslint-disable-next-line no-useless-concat
  return `https://newsapi.org/v2/everything?${q}${from}sortBy=popularity&` + 'language=ru&' + 'pageSize=100';
}
