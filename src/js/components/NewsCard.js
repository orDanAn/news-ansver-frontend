/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import { api, mainSaved } from '../constants/variables';


export default class NewsCard {
  constructor(title, data, text, image, source, link, keyword, idCard) {
    this.card = document.getElementById('card');
    this.newsCard = this.card.content.cloneNode(true);
    this.savedCard = this.newsCard.querySelector('.card');
    this.titleCard = this.newsCard.querySelector('.card__title');
    this.cardData = this.newsCard.querySelector('.card__data');
    this.cardtext = this.newsCard.querySelector('.card__text');
    this.cardimage = this.newsCard.querySelector('.card__image');
    this.sources = this.newsCard.querySelector('.card__source');
    this.link = this.newsCard.querySelector('.card__link');
    this.aboutNews = this.newsCard.querySelector('.card__message_about-news');
    this.placeCard = document.querySelector('.place-card');
    // eslint-disable-next-line max-len
    this.createElement = this.createNewsCard(title, data, text, image, source, link, keyword, idCard);

    this.placeCard.addEventListener('click', this.saveCard);
    this.placeCard.addEventListener('click', this.removeCard);
    this.placeCard.addEventListener('mouseover', this.removeCardMessage);
    this.placeCard.addEventListener('mouseover', this.saveCardMessage);
  }

  createNewsCard(title, publishedAt, description, urlToImage, source, link, keyword, idCard) {
    const { newsCard } = this;

    this.titleCard.textContent = title;
    this.cardData.textContent = publishedAt;
    this.cardtext.textContent = description;
    this.cardimage.setAttribute('style', `background-image: url(${urlToImage})`);
    this.link.setAttribute('href', link);
    this.sources.textContent = source;
    this.aboutNews.textContent = keyword; // сделать не активной
    this.savedCard.setAttribute('idCard', idCard);
    return newsCard;
  }

  // eslint-disable-next-line class-methods-use-this
  saveCard() {
    if (event.target.closest('.card')) {
      const card = event.target.closest('.card');

      if (event.target.closest('.card__save-icon') && !(event.target.closest('.card__save-icon_saved'))) {
        const buttonSave = card.querySelector('.card__save-icon');
        const titleCard = card.querySelector('.card__title').textContent;
        const data = card.querySelector('.card__data').textContent;
        const text = card.querySelector('.card__text').textContent;
        const image = card.querySelector('.card__image').getAttribute('style').split('(')[1].slice(0, -1);
        const sources = card.querySelector('.card__source').textContent;
        const link = card.querySelector('.card__link').href;
        const keyword = card.querySelector('.card__message_about-news').textContent;
        api.createArticle(keyword, titleCard, text, data, sources, link, image)
          .then((res) => {
            if (res) {
              buttonSave.classList.add('card__save-icon_saved');
              card.setAttribute('idCard', res.article._id);
            }
          });
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  removeCard() {
    if (event.target.closest('.card')) {
      const card = event.target.closest('.card');
      const buttonSave = card.querySelector('.card__save-icon');
      const placeCard = document.querySelector('.place-card');
      if (event.target.closest('.card__save-icon_saved')) {
        api.removeArticle(card.getAttribute('idCard')).then((res) => { if (res) { if (buttonSave) { buttonSave.classList.remove('card__save-icon_saved'); } } });
      }
      if (event.target.closest('.card__del-icon')) {
        api.removeArticle(card.getAttribute('idCard'))
          .then((res) => {
            if (res) {
              placeCard.removeChild(card);
              mainSaved.renderMainSavedTextInformation();
              mainSaved.renderMainSavedTextNomber();
            }
          });
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  removeCardMessage() {
    if (event.target.closest('.card')) {
      const card = event.target.closest('.card');
      const cardMessage = card.querySelector('.card__message');
      if (event.target.closest('.card__del-icon')) {
        cardMessage.classList.add('card__message_activ');
      } else { cardMessage.classList.remove('card__message_activ'); }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  saveCardMessage() {
    if (event.target.closest('.card')) {
      const card = event.target.closest('.card');
      const cardMessage = card.querySelector('.card__message');
      if (event.target.closest('.card__save-icon')) {
        api.getUserData().then((res) => { if (!res) { cardMessage.classList.add('card__message_activ'); } });
      }
    }
  }
}
