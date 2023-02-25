/*
Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$. Необходимо сделать функции расчёта:
  - Итогового баланса
  - Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
  - Расчёта среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;

function getBalance(arrOfOperations, initialBalance) {
  let balance = initialBalance;
  for (const elem of arrOfOperations) {
    balance += elem;
  }
  return balance;
}
console.log(getBalance(operations, startBalance));

function checkOperations(arrOfOperations, initialBalance) {
  let balance = initialBalance;
  let isOk = true;
  for (const elem of arrOfOperations) {
    balance += elem;
    if (balance < 0) {
      isOk = false;
      break
    }
  }
  return isOk;
}
console.log(checkOperations(operations, startBalance));

function averageOperations(arrOfOperations) {
  let positiveCount = 0;
  let positiveSum = 0;
  let negativeCount = 0;
  let negativeSum = 0;
  for (const elem of arrOfOperations) {
    if(elem > 0) {
      positiveCount++;
      positiveSum += elem;
    }
    if(elem < 0) {
      negativeCount++;
      negativeSum += elem;
    }
  }
  return [positiveSum/positiveCount, negativeSum/negativeCount];
}

console.log(averageOperations(operations));
