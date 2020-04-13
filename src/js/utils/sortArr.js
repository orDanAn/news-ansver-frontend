export default function sortArr(array) {
  const frequency = {};

  array.forEach((value) => { frequency[value] = 0; });

  // eslint-disable-next-line no-plusplus
  const uniques = array.filter((value) => ++frequency[value] === 1);

  return uniques.sort((a, b) => frequency[b] - frequency[a]);
}
