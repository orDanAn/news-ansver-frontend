// eslint-disable-next-line import/no-cycle
import { api } from '../constants/variables';
import sortArr from '../utils/sortArr';

export default class MainSaved {
  constructor(name, nomber, infomation) {
    this.name = name;
    this.nomber = nomber;
    this.infomation = infomation;
  }

  renderMainSavedTitle() {
    api.getUserData().then((res) => {
      if (res) {
        this.name.textContent = res.name;
      }
    });
  }

  renderMainSavedTextNomber() {
    api.getArticles().then((res) => {
      this.nomber.textContent = res.length;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderMainSavedTextInformation() {
    api.getArticles().then((res) => {
      const arr = [];

      // сделали массив с keyword
      res.forEach((item) => {
        arr.push(item.keyword);
      });

      const arrUnig = sortArr(arr);

      if (arrUnig.length < 1) {
        this.infomation.textContent = 'у вас нет сохраненных статей';
      }
      if (arrUnig.length > 0 && arrUnig.length < 2) {
        this.infomation.textContent = `${arrUnig[0]}`;
      }
      if (arrUnig.length > 1 && arrUnig.length < 3) {
        this.infomation.textContent = `${arrUnig[0]}, ${arrUnig[1]}`;
      }
      if (arrUnig.length > 2 && arrUnig.length < 4) {
        this.infomation.textContent = `${arrUnig[0]}, ${arrUnig[1]} и ${arrUnig[2]}`;
      }
      if (arrUnig.length > 3) {
        this.infomation.textContent = `${arrUnig[0]}, ${arrUnig[1]} и ${arrUnig.length - 2} другим`;
      }
    });
  }
}
