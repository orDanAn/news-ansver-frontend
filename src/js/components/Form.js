/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import Button from './Button';
import { api } from '../constants/variables';

export default class Form {
  constructor() {
    this.forms = document.forms;
  }

  _validateInputElement(input) {
    if (input.value.length === 0) {
      this.message = 'это обязательное поле';
      //console.log(this.message);
      return this.message;
    }
    if (input.getAttribute('type') === 'email') {
      if ((!input.checkValidity())) {
        this.message = 'необходимо указать почту в формате: sega@yandex.ru';
        //console.log(this.message);
        return this.message;
      }
    }
    if (input.getAttribute('type') === 'password') {
      if (input.value.length < 6) {
        this.message = 'необходимо указать пароль от 6 символов';
        //console.log(this.message);
        return this.message;
      }
    }
    if (input.getAttribute('type') === 'text') {
      if (input.value.length < 2 || input.value.length > 20) {
        this.message = 'необходимо указать имя от 2 до 20 символов';
        //console.log(this.message);
        return this.message;
      }
    }
    this.message = '';
   // console.log(this.message);
    return this.message;
  }

  _contentErrorMessage() {
    const errorEmailAuth = document.getElementById('formAuth-error-email');
    const errorPasswordAuth = document.getElementById('formAuth-error-password');
    const errorEmailSingUp = document.getElementById('formSingUp-error-email');
    const errorPasswordSingUp = document.getElementById('formSingUp-error-password');
    const errorNameSingUp = document.getElementById('formSingUp-error-name');


    if (Array.from(this.forms).includes(this.forms.namedItem('formAuth'))) {
      if (event.target.getAttribute('type') === 'email') {
        errorEmailAuth.textContent = this.message;
      }
      if (event.target.getAttribute('type') === 'password') {
        errorPasswordAuth.textContent = this.message;
      }
    }
    if (Array.from(this.forms).includes(this.forms.namedItem('formSingUp'))) {
      if (event.target.getAttribute('type') === 'email') {
        errorEmailSingUp.textContent = this.message;
      }
      if (event.target.getAttribute('type') === 'password') {
        errorPasswordSingUp.textContent = this.message;
      }
      if (event.target.getAttribute('type') === 'text') {
        errorNameSingUp.textContent = this.message;
      }
    }
  }

  _validateForm() {
    const formAuth = this.forms.namedItem('formAuth');
    const formSingUp = this.forms.namedItem('formSingUp');
    const errorEmailAuth = document.getElementById('formAuth-error-email');
    const errorPasswordAuth = document.getElementById('formAuth-error-password');
    const errorEmailSingUp = document.getElementById('formSingUp-error-email');
    const errorPasswordSingUp = document.getElementById('formSingUp-error-password');
    const errorNameSingUp = document.getElementById('formSingUp-error-name');
    const buttonFormAuth = document.getElementById('button-formAuth');
    const buttonFormSingUp = document.getElementById('button-formSingUp');


    if (Array.from(this.forms).includes(formAuth)) {
      buttonFormAuth.setAttribute('disabled', true);
      buttonFormAuth.classList.remove('popup__button_validate');

      if (formAuth.elements[0].value.length > 0 && errorEmailAuth.textContent === '' && errorPasswordAuth.textContent === '' && formAuth.elements[1].value.length > 0) {

        buttonFormAuth.removeAttribute('disabled');
        buttonFormAuth.classList.add('popup__button_validate');
      }
    }
    if (Array.from(this.forms).includes(formSingUp)) {
      buttonFormSingUp.setAttribute('disabled', true);
      buttonFormSingUp.classList.remove('popup__button_validate');
      if (formSingUp.elements[0].value.length > 0 && errorEmailSingUp.textContent === '' && errorPasswordSingUp.textContent === '' && formSingUp.elements[1].value.length > 0 && formSingUp.elements[2].value.length > 0 && errorNameSingUp.textContent === '') {
        buttonFormSingUp.removeAttribute('disabled');
        buttonFormSingUp.classList.add('popup__button_validate');
      }
    }
  }

  setServerError(errorServer) {
    const formAuthErrorUpButton = document.getElementById('formAuth-error-up-button');
    const formSingUpErrorUpButton = document.getElementById('formSingUp-error-up-button');
    if (Array.from(this.forms).includes(this.forms.namedItem('formAuth'))) {
      formAuthErrorUpButton.textContent = errorServer;
    }
    if (Array.from(this.forms).includes(this.forms.namedItem('formSingUp'))) {
      formSingUpErrorUpButton.textContent = errorServer;
    }
  }
}
