
import MainApi from '../api/MainApi';
import NewsApi from '../api/NewsApi';
import Popup from '../components/Popup';


const popup = document.querySelector('.popup');
const popupOpen = document.getElementById('authButton');
const popupAuth = document.getElementById('popup-auth');
const popupSignUp = document.getElementById('popup-sign-up');
const popupSignIn = document.getElementById('popup-sign-in');
const serverUrl = 'http://localhost:3000';  //https://www.api.news-ansver.site
const searchFieldButton = document.querySelector('.search-field__button');

const formAuth = new Popup(popup, popupAuth);
const formSignUp = new Popup(popup, popupSignUp);
const formEnter = new Popup(popup, popupSignIn);

//console.log(searchFieldButton);
const api = new MainApi({ // запускаем общение с сервером
  baseUrl: serverUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const newsApi = new NewsApi();

export {
  popup, popupOpen, formAuth, formSignUp, api, formEnter, newsApi, searchFieldButton,
};
