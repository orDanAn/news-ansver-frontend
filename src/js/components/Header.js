// eslint-disable-next-line import/no-cycle
import { api } from '../constants/variables';

export default class Header {
  constructor(link, authButton, logOutButton) {
    this.link = link;
    this.authButton = authButton;
    this.logOutButton = logOutButton;
    this.buttonText = this.logOutButton.querySelector('.header-button__text');
  }

  start() {
    api.getUserData()
      .then((res) => {
        if (res) {
          this.authButton.classList.remove('header__button_activ');
          this.buttonText.textContent = res.name;
          this.logOutButton.classList.add('header__button_activ');
          this.link.classList.add('header__link_activ');
        }
      })
      .catch((err) => {
        console.error(err.message);
        this.authButton.classList.add('header__button_activ');
        this.logOutButton.classList.remove('header__button_activ');
        this.link.classList.remove('header__link_activ');
      });
  }

  savedArticles() {
    api.getUserData()
      .then((res) => {
        if (res) {
          this.buttonText.textContent = res.name;
          this.logOutButton.classList.add('header__button_activ');
        }
      })
      .catch(() => {
        // eslint-disable-next-line no-undef
        document.location.href = './';
      });
  }

  startMobile() {
    api.getUserData()
      .then((res) => {
        if (res) {
          this.authButton.classList.remove('menu-mobile__button_activ');
          this.buttonText.textContent = res.name;
          this.logOutButton.classList.add('menu-mobile__button_activ');
          this.link.classList.add('menu-mobile__link_activ');
        }
      })
      .catch(() => {
        this.authButton.classList.add('menu-mobile__button_activ');
        this.logOutButton.classList.remove('menu-mobile__button_activ');
        this.link.classList.remove('menu-mobile__link_activ');
      });
  }
}
