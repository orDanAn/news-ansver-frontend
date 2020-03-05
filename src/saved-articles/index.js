import '../style.css';

import Button from '../js/components/Button';
import {
  api, placeCard,
  headerWhite,
  logOutButton,
  menuMobile,
  menuClose,
  buttonMenu,
  headerMobile,
  logOutButtonMobile,
  mainSaved,
} from '../js/constants/variables';


api.getArticles()
  .then((articles) => { placeCard.renderSavedNewsCard(articles); })
  .catch((err) => console.error(err.message));

mainSaved.renderMainSavedTitle();
mainSaved.renderMainSavedTextNomber();
mainSaved.renderMainSavedTextInformation();

headerWhite.savedArticles(); // запускаем шапку сайта
headerMobile.startMobile(); // запускаем шапку мобильного сайта

new Button(logOutButton).logOutButton(); // работа кнопки выхода шапка сайта
new Button(buttonMenu).buttonMenu(menuMobile, menuClose); // открытие мобильного меню
new Button(logOutButtonMobile).logOutButton(); // работа кнопки выхода мобильная шапка сайта

console.log('Привет я вторая страница');
