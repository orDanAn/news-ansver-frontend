/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import './style.css';
import Button from './js/components/Button';
import Form from './js/components/Form';
import {
  popup,
  popupOpen,
  formAuth,
  formSignUp,
  api,
  formEnter,
  searchFieldButton,
  header,
  logOutButton,
  buttonMenu,
  menuMobile,
  menuClose,
  headerMobile,
  popupOpenMomile,
  logOutButtonMobile,
  searchFieldText,
  resultSearchButton,
  resultSearchTitle,
} from './js/constants/variables';


header.start();
headerMobile.startMobile();


new Button(searchFieldButton).searchButton(searchFieldText, resultSearchButton, resultSearchTitle);
new Button(logOutButton).logOutButton(); // запускаем кнопку выхода в шапке
new Button(logOutButtonMobile).logOutButton(); // запускаем кнопку выхода в мобильном меню
new Button(buttonMenu).buttonMenu(menuMobile, menuClose); // кнопка запуска ммобильного меню

const form = new Form(); // запускае формы

popupOpen.addEventListener('click', formAuth.open); // открываем форму входа

// открываем форму входа из мобильног меню
popupOpenMomile.addEventListener('click', () => {
  formAuth.open();
  menuMobile.classList.remove('popup_is-opened');
});

// работа popup
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
    api.signin(document.forms[1].elements[0].value, document.forms[1].elements[1].value, form)
      .then((res) => {
        if (res) {
          if ('message' in res) {
            form.setServerError(res.message);
          } else {
            popup.classList.remove('popup_is-opened'); formAuth.clearContent(); header.start(); headerMobile.startMobile();
          }
        }
      });
  }
  if (event.target.getAttribute('id') === 'button-formSingUp') {
    event.preventDefault();
    api.signup(document.forms[1].elements[0].value, document.forms[1].elements[1].value, document.forms[1].elements[2].value, form)
      .then((res) => {
        if (res) {
          if ('message' in res) {
            form.setServerError(res.message);
          } else { formSignUp.clearContent(); formEnter.open(); }
        }
      });
  }
  if (event.target.getAttribute('id') === 'enter') {
    formEnter.clearContent();
    formAuth.open();
  }
});

// валидация форм
popup.addEventListener('input', (event) => {
  const input = event.target;
  form._validateInputElement(input);
  form._contentErrorMessage();
  form._validateForm();
});

console.log('Привет Я главная страница');
