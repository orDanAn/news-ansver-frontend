export default class NewsCard {
  constructor(title, data, text, image, source) {
    this.card = document.getElementById('card');
    this.placeCard = document.querySelector('.place-card');
    this.createElement = this.createNewsCard(title, data, text, image, source);
  }

  createNewsCard(title, publishedAt, description, urlToImage, source) {
    const newsCard = this.card.content.cloneNode(true);
    this.placeCard.appendChild(newsCard);

    const buttonSave = document.querySelector('.card__save-icon');
    const titleCard = document.querySelector('.card__title');
    const data = document.querySelector('.card__data');
    const text = document.querySelector('.card__text');
    const image = document.querySelector('.card__image');
    const sources = document.querySelector('.card__source');

    titleCard.textContent = title;
    data.textContent = publishedAt;
    text.textContent = description;
    image.setAttribute('style', `background-image: url(${urlToImage})`);
    sources.textContent = source;
    //this.placeCard.appendChild(newsCard);
  }
}



/*
<div class="card">
            <div class="card__image">
              <button class="card__save-icon">

              </button>
              <p class="card__message"></p>

            </div>
            <div class="card__information">
              <p class="card__data">
              </p>
              <div class="card__information_height">
                <h3 class="card__title">
                </h3>
                <p class="card__text">
                </p>
              </div>
              <p class="card__source">
              </p>
            </div>
*/