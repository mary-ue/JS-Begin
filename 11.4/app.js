/*
  Имеется массив изменений цен prices, где внутри 1-й элемент масива является ценой в момент X, 2-й - ценой в момент Y.
  Нужно преобразовать данные в массив, где будут отображены только положительные изменения цен. 
*/

const prices = [[100, 200], [120, 100], [200, 350]];

const result = prices
  .map(product => product[1] - product[0])
  .filter(price => price > 0);
  console.log(result);