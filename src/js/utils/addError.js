export default function addError(container, errorMessage) {
  container.insertAdjacentHTML('afterbegin', `<p style="color: red; font-size: 45px; font-family: Arial">${errorMessage} </p>`);
}
