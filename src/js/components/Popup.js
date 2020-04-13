/* eslint-disable no-restricted-globals */
export default class Popup {
  constructor(popup, template) {
    this.popup = popup;
    this.template = template;

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.setContent = this.setContent.bind(this);

    this.popup.addEventListener('click', this.close);
    this.popup.addEventListener('click', this.transitionButton);
    this.popup.addEventListener('click', this.transition);
  }

  open() {
    this.popup.classList.add('popup_is-opened');
    this.setContent();
  }

  close() {
    // eslint-disable-next-line no-undef
    if (event.target.classList.contains('popup__close')) {
      this.popup.classList.remove('popup_is-opened');
      this.clearContent();
    }
  }

  setContent() {
    const content = this.template.content.cloneNode(true);
    this.popup.appendChild(content);
  }

  clearContent() {
    while (this.popup.firstChild) {
      this.popup.removeChild(this.popup.firstChild);
    }
  }
}
