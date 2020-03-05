// eslint-disable-next-line import/no-cycle
import NewsCard from '../components/NewsCard';

// eslint-disable-next-line max-len
export default function addNewsCard({
  title, data, text, image, source, link, keyword, idCard, container,
}) {
  const { createElement } = new NewsCard({
    title, data, text, image, source, link, keyword, idCard,
  });
  container.appendChild(createElement);
}
