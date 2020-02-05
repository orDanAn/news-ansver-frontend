class Popup {
  constructor(popup, buttonOpen, template) {
    this.popup = popup;
    this.buttonOpen = buttonOpen;

    this.template = template;

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.setContent = this.setContent.bind(this);


    buttonOpen.addEventListener('click', this.open);
    popup.addEventListener('click', this.open);
    this.popup.addEventListener('click', this.close);

  }

  open() {
    if (this.buttonOpen === event.target) {
      this.popup.classList.add('popup_is-opened');
      this.setContent();
    }
  }

  close() {
    if (event.target.classList.contains("popup__close")) {
      this.popup.classList.remove('popup_is-opened');
      this. clearContent();
    }
  }

  setContent() {
    const content = this.template.content.cloneNode(true);
    this.popup.appendChild(content);

  }

  clearContent() {
    //this.popup.remove();

    while (this.popup.firstChild) {
      this.popup.removeChild(this.popup.firstChild);
    }
  }



}


export { Popup };
