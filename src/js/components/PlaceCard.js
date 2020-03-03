/* eslint-disable max-len */
/* eslint-disable no-undef */
import formatDateCard from '../utils/formatDateCard';

export default class PlaceCard {
  constructor(addNewsCard) {
    this.container = document.querySelector('.place-card');
    this.addNewsCard = addNewsCard;
  }

  renderSavedNewsCard(array) {
    for (let i = 0; i < array.length; i += 1) {
      const arr = array;
      this.addNewsCard(arr[i].title, arr[i].date, arr[i].text, arr[i].image, arr[i].source, arr[i].link, arr[i].keyword, arr[i]._id, this.container);
    }
  }

  renederNewsCardThree(array, summa, rend, formValue) {
    let i = summa; // значение из счетчика
    const render = rend; // значение из счетчика
    if (render > array.length) {
      for (i; i < array.length; i += 1) {
        const arr = array; // массив из запроса
        this.addNewsCard(arr[i].title, formatDateCard(arr[i].publishedAt), arr[i].description, arr[i].urlToImage, arr[i].source.name, arr[i].url, formValue, null, this.container);
      }
    } else {
      for (i; i < render; i += 1) {
        const arr = array;
        this.addNewsCard(arr[i].title, formatDateCard(arr[i].publishedAt), arr[i].description, arr[i].urlToImage, arr[i].source.name, arr[i].url, formValue, null, this.container);
      }
    }
  }

  clearContent() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}
