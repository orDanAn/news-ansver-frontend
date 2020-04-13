/* eslint-disable no-undef */
// eslint-disable-next-line import/no-cycle
import {
  newsApi, placeCard, notFound, api, searchErrorMessage, inputErrorMessage,
} from '../constants/variables';
import { keysNewsApi } from '../constants/keys';
import url from '../utils/url';
import formatDate from '../utils/formatDate';
import addError from '../utils/addError';

export default class Button {
  constructor(button) {
    this.button = button;
    this.container = document.querySelector('.place-card');
  }

  // кнопка поиска по новостям
  searchButton(form, buttonNext, title) {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      let summa = 0; // начоло счетчика (сброс счетчика)
      let rend = 3; // начоло счетчика (сброс счетчика)
      notFound.clearContent(); // убираю картинку не найдено
      placeCard.clearContent(); // убираю все из зоны карточек
      buttonNext.classList.remove('result-search__button_activ'); // убираю кнопку

      const formValue = form.value; // значение инпута формы поиска
      const data = formatDate(new Date(Date.now() - 604800000)); // формат даты под карточку
      const getUrl = url(formValue, data); // адресс запроса АПИ
      if (formValue === '') {
        addError(this.container, inputErrorMessage); // выводим ошибку при пустом запросе
        return;
      }
      // запрос к API News
      newsApi.getNews(getUrl, keysNewsApi)
        .then((news) => {
          if (news) {
            const showMore = function showMoreCounter() {
              summa += 3;
              rend += 3;
              placeCard.renederNewsCardThree(news, summa, rend, formValue);
              if (news.length < rend || news.length === rend) {
                buttonNext.classList.remove('result-search__button_activ');
              }
            };
            if (news.length > 0) { // если пришел массив больше нуля рисуем первые три карточки
              placeCard.renederNewsCardThree(news, summa, rend, formValue);
              title.classList.add('result-search__title_activ');
            } else {
              notFound.createNotFound(); // иначе ничего не найдено
            }
            if (news.length > 3) {
              buttonNext.addEventListener('click', showMore);
              this.button.addEventListener('click', () => {
                buttonNext.removeEventListener('click', showMore);
              });
              buttonNext.classList.add('result-search__button_activ'); // если массив больше трех, рисуем кнопку показать еще
            }
          }
        })
        .catch(() => { addError(this.container, searchErrorMessage); });
    });
  }

  logOutButton() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      api.logout()
        .then((res) => {
          if (res) {
            document.location.href = './';
          }
        })
        .catch((err) => console.error(err));
    });
  }

  buttonMenu(mobileMenu, menuClose) {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      mobileMenu.classList.add('popup_is-opened');
    });
    menuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('popup_is-opened');
    });
  }
}
