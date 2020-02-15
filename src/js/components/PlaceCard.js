/* eslint-disable no-undef */
import NewsCard from "./NewsCard";

export default class PlaceCard {
  constructor(array) {
    this.container = document.querySelector('.place-card');
    this.array = array;
    this.renderNewsCard(array);
  }

  addNewsCard(title, data, text, image, source) {
    const { createElement } = new NewsCard(title, data, text, image, source);
    this.container.appendChild(createElement);

  }

  renderNewsCard() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.array.length; i++) {
      const arr = this.array;
      this.addNewsCard(arr[i].title, arr[i].publishedAt, arr[i].description, arr[i].urlToImage, arr[i].source);
    }
  }
}


/*
class CardList {
  constructor (container, array) {
    this.container = container;
    this.array = array;
    this.render(array);
  }
  addCard (image, text, somelike, ownerId, cardId, likeId) {
    const {cardElement} = new Card(image, text, somelike, ownerId, cardId, likeId);
    this.container.appendChild(cardElement);
  }
  render () {
    for (let i = 0; i < this.array.length; i++) {
      this.addCard(this.array[i].link, this.array[i].name, this.array[i].likes.length, this.array[i].owner._id, this.array[i]._id, this.array[i].likes.some(like => like._id === '82687fb710a7a00db742a691'));
    }
  }
}
*/