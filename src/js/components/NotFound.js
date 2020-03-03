/* eslint-disable no-undef */
export default class NotFound {
  constructor(section, template) {
    this.section = section;
    this.template = template;
  }

  createNotFound() {
    const content = this.template.content.cloneNode(true);
    this.section.appendChild(content);
  }

  clearContent() {
    if (!(document.querySelector('.not-found') === null)) {
      this.section.removeChild(document.querySelector('.not-found'));
    }
  }
}
