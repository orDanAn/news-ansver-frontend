export default function formatDateCard(date) {
  const dateCard = new Date(date);
  const month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  const day = dateCard.getDate();
  const year = dateCard.getFullYear();


  return `${day} ${month[dateCard.getMonth()]}, ${year}`;
}
