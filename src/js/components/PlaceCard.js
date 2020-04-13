/* eslint-disable max-len */
/* eslint-disable no-undef */
import formatDateCard from '../utils/formatDateCard';

export default class PlaceCard {
  constructor(addNewsCard) {
    this.container = document.querySelector('.place-card');
    this.addNewsCard = addNewsCard;
  }

  renderSavedNewsCard(cards) {
    for (let i = 0; i < cards.length; i += 1) {
      this.addNewsCard({
        title: cards[i].title,
        data: cards[i].date,
        text: cards[i].text,
        image: cards[i].image,
        source: cards[i].source,
        link: cards[i].link,
        keyword: cards[i].keyword,
        idCard: cards[i]._id,
        container: this.container,
      });
    }
  }

  renederNewsCardThree(cards, summa, rend, formValue) {
    let i = summa; // значение из счетчика
    const render = rend; // значение из счетчика
    if (render > cards.length) {
      for (i; i < cards.length; i += 1) {
        this.addNewsCard({
          title: cards[i].title,
          data: formatDateCard(cards[i].publishedAt),
          text: cards[i].description,
          image: cards[i].urlToImage,
          source: cards[i].source.name,
          link: cards[i].url,
          keyword: formValue,
          idCard: null,
          container: this.container,
        });
      }
    } else {
      for (i; i < render; i += 1) {
        this.addNewsCard({
          title: cards[i].title,
          data: formatDateCard(cards[i].publishedAt),
          text: cards[i].description,
          image: cards[i].urlToImage,
          source: cards[i].source.name,
          link: cards[i].url,
          keyword: formValue,
          idCard: null,
          container: this.container,
        });
      }
    }
  }

  clearContent() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}
