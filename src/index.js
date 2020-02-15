/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import './style.css';
import NewsApi from './js/api/NewsApi';
import Button from './js/components/Button';
import Form from './js/components/Form';
import { popup, popupOpen, formAuth, formSignUp, api, formEnter, searchFieldButton, } from './js/constants/variables';
import NewsCard from './js/components/NewsCard';
import PlaceCard from './js/components/PlaceCard';

//new NewsCard().createNewsCard('title', 'null', 'null', 'null', 'null');

const arr = new NewsApi();
arr.getNews().then((res) => (res));
console.log(arr.getNews().then(items => console.log(items)));


//console.log(arr.getNews().then(result => result));

new PlaceCard(api.getArticles()); // массив надо сюда, но метод работае криво

new Button(searchFieldButton).searchButton();
//api.logout();
//api.removeArticle('5e404ded39ee6f46cc7c0ba5');
//api.createArticle("test2222", "title_test11777", "texjdkjnklnsdlkvl;ksdfmlkdmfgklmnlsdkklflkdnflknbvaldkflk;badlkfnmlkvlkd", "25.12.2019", "source-test11777", "https://trello.com/b/ek4iOP6z/news-ansver", 'https://trello.com/b/ek4iOP6z/news-ansver');
//api.getArticles();
//api.getUserData();
//api.signin('test10@gmail.com', '12345678');
//api.signup('test999@gmail.com', '123456789', 'test999');
//api.getUserData();

const form = new Form();

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
  if (event.target.getAttribute('id') === 'button-formAuth') {
    event.preventDefault();
    api.signin(document.forms[1].elements[0].value, document.forms[1].elements[1].value, form).then((res) => { if (res) { popup.classList.remove('popup_is-opened'); formAuth.clearContent(); } });
  }
  if (event.target.getAttribute('id') === 'button-formSingUp') {
    event.preventDefault();
    api.signup(document.forms[1].elements[0].value, document.forms[1].elements[1].value, document.forms[1].elements[2].value, form).then((res) => { if (res) { formSignUp.clearContent(); formEnter.open(); } });
  }
  if (event.target.getAttribute('id') === 'enter') {
    formEnter.clearContent();
    formAuth.open();
  }
});


popup.addEventListener('input', (event) => {
  const input = event.target;
  form._validateInputElement(input);
  form._contentErrorMessage();
  form._validateForm();
});

console.log('Привет Я главная страница');
