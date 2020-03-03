/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */

import MainApi from '../api/MainApi';
import NewsApi from '../api/NewsApi';
import Popup from '../components/Popup';
import PlaceCard from '../components/PlaceCard';
import NotFound from '../components/NotFound';
import addNewsCard from '../utils/addNewsCard';
import Header from '../components/Header';
import MainSaved from '../components/MainSaved';

const searchErrorMessage = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const inputErrorMessage = 'Нужно ввести ключевое слово';


const popup = document.querySelector('.popup');
const popupOpen = document.getElementById('authButton');
const popupAuth = document.getElementById('popup-auth');
const popupSignUp = document.getElementById('popup-sign-up');
const popupSignIn = document.getElementById('popup-sign-in');
const serverUrl = 'https://www.api.news-ansver.site'; // 'https://www.api.news-ansver.site'; 'http://localhost:3000'
const searchFieldButton = document.querySelector('.search-field__button');
const resultSearch = document.querySelector('.result-search');
const templateNotFound = document.getElementById('not-found');
const headerLink = document.querySelector('#saved-articles');
const logOutButton = document.querySelector('#logOutButton');
const menuMobile = document.getElementById('menu-mobile');
const buttonMenu = document.querySelector('.button-menu');
const headerLinkMobile = document.getElementById('saved-articles-mobile');
const popupOpenMomile = document.getElementById('authButton-mobile');
const logOutButtonMobile = document.getElementById('logOutButton-mobile');
const menuClose = document.querySelector('.menu-mobile__close');
const searchFieldText = document.querySelector('.search-field__text');
const resultSearchButton = document.querySelector('.result-search__button');
const resultSearchTitle = document.querySelector('.result-search__title');

const mainSavedTitle = document.querySelector('.main-saved-title__name');
const mainSavedTitleNomber = document.querySelector('.main-saved-title__nomber');
const heavyWeight = document.querySelector('.heavy-weight');


const formAuth = new Popup(popup, popupAuth);
const formSignUp = new Popup(popup, popupSignUp);
const formEnter = new Popup(popup, popupSignIn);

const placeCard = new PlaceCard(addNewsCard);

const mainSaved = new MainSaved(mainSavedTitle, mainSavedTitleNomber, heavyWeight);

const api = new MainApi({ // запускаем общение с сервером
  baseUrl: serverUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const newsApi = new NewsApi();
const notFound = new NotFound(resultSearch, templateNotFound);
const header = new Header(headerLink, popupOpen, logOutButton);

const headerMobile = new Header(headerLinkMobile, popupOpenMomile, logOutButtonMobile);
const headerWhite = new Header(null, null, logOutButton);


export {
  popup,
  popupOpen,
  formAuth,
  formSignUp,
  api,
  formEnter,
  newsApi,
  searchFieldButton,
  placeCard,
  notFound,
  header,
  headerWhite,
  logOutButton,
  searchErrorMessage,
  inputErrorMessage,
  buttonMenu,
  menuMobile,
  menuClose,
  headerMobile,
  popupOpenMomile,
  logOutButtonMobile,
  searchFieldText,
  resultSearchButton,
  resultSearchTitle,
  mainSaved,

};
