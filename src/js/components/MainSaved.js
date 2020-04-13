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
    api.getUserData()
      .then((res) => {
        if (res) {
          this.name.textContent = res.name;
        }
      })
      .catch((err) => console.error(err.message));
  }

  renderMainSavedTextNomber() {
    api.getArticles()
      .then((articles) => {
        this.nomber.textContent = articles.length;
      })
      .catch((err) => console.error(err.message));
  }

  // eslint-disable-next-line class-methods-use-this
  renderMainSavedTextInformation() {
    api.getArticles()
      .then((articles) => {
        const keyWords = [];

        // сделали массив с keyword
        articles.forEach((item) => {
          keyWords.push(item.keyword);
        });

        const unigkeyWords = sortArr(keyWords);

        if (unigkeyWords.length < 1) {
          this.infomation.textContent = 'у вас нет сохраненных статей';
        }
        if (unigkeyWords.length > 0 && unigkeyWords.length < 2) {
          this.infomation.textContent = `${unigkeyWords[0]}`;
        }
        if (unigkeyWords.length > 1 && unigkeyWords.length < 3) {
          this.infomation.textContent = `${unigkeyWords[0]}, ${unigkeyWords[1]}`;
        }
        if (unigkeyWords.length > 2 && unigkeyWords.length < 4) {
          this.infomation.textContent = `${unigkeyWords[0]}, ${unigkeyWords[1]} и ${unigkeyWords[2]}`;
        }
        if (unigkeyWords.length > 3) {
          this.infomation.textContent = `${unigkeyWords[0]}, ${unigkeyWords[1]} и ${unigkeyWords.length - 2} другим`;
        }
      })
      .catch((err) => console.error(err.message));
  }
}
