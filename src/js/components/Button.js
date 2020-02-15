//import MainApi from '../api/MainApi';
import { api } from '../constants/variables';
import { newsApi } from '../constants/variables';


export default class Button {
  constructor(button) {
    this.button = button;
  }

  searchButton() { // добавить url
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      newsApi.getNews();
    });
  }
}


/*export default class Button {
  constructor(button) {
    this.button = button;
  }

  signinButton(email, password) {

    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      api.signin(email, password);
      //console.log(email.value, password.value);
      //console.log(this.email.value, this.password.value);
    });
  }

  signupButton(email, password, name) {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      api.signup(email, password, name);
    });
  }

  searchButton() { // добавить url
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      newsApi.getNews();
    });
  }
}*/
