import './style.css';
import { Popup } from './js/components/Popup';

const popup = document.querySelector('.popup');
const popupClose = document.getElementById('popup-close');
const popupOpen = document.getElementById('authButton');
const popupAuth = document.getElementById('popup-auth');


new Popup(popup, popupOpen, popupAuth);

console.log('Привет Я главная страница');
console.log(popupAuth.content);
