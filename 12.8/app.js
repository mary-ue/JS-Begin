/* Замаскировать все, кроме последних 4-х символом */

const card = '2342834503458353';
console.log(card.slice(-4).padStart(16, '*'));
