/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import './style.css';
import MainApi from './js/api/MainApi';
import Popup from './js/components/Popup';
import Form from './js/components/Form';

const popup = document.querySelector('.popup');
const popupOpen = document.getElementById('authButton');
const popupAuth = document.getElementById('popup-auth');
const popupSignUp = document.getElementById('popup-sign-up');
const serverUrl = 'http://localhost:3000';  //https://www.api.news-ansver.site

const formAuth = new Popup(popup, popupAuth);
const formSignUp = new Popup(popup, popupSignUp);

const api = new MainApi({ // запускаем общение с сервером
  baseUrl: serverUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

//api.logout();
//api.removeArticle('5e404ded39ee6f46cc7c0ba5');
//api.createArticle("test2222", "title_test11777", "texjdkjnklnsdlkvl;ksdfmlkdmfgklmnlsdkklflkdnflknbvaldkflk;badlkfnmlkvlkd", "25.12.2019", "source-test11777", "https://trello.com/b/ek4iOP6z/news-ansver", 'https://trello.com/b/ek4iOP6z/news-ansver');
//api.getArticles();
//api.getUserData();
//api.signin('test10@gmail.com', '12345678');
//api.signup('test999@gmail.com', '123456789', 'test999');
//api.getUserData();
popupOpen.addEventListener('click', formAuth.open);

popup.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup__choice_color-blue')) {
    if (event.target.getAttribute('id') === 'button-sign-up') {
      formAuth.clearContent();
      formSignUp.open();
    }
    if (event.target.getAttribute('id') === 'button-enter') {
      formSignUp.clearContent();
      formAuth.open();
    }
  }
});
popup.addEventListener('input', (event) => {
  const input = event.target;
  const form = new Form();

  form._validateInputElement(input);
  form._contentErrorMessage();
  form._validateForm();
});


console.log('Привет Я главная страница');
