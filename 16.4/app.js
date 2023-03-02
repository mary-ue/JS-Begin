'use strict';
/* 
  Создайте объект пользователя с паролем. 
  С помощью функции removePassword удалить пароль, сделав функцию сброса пароля. 
*/

const user = {
  login: 'Андрей',
  password: '123456',
}

// для сброса пароля передать true
function removePassword(reset) {
  if(reset) {
    this.password = undefined;
  } else {
    this.password = '1';
  }
}

// removePassword.call(user, true);
// console.log(user);

const resetUserPassword = removePassword.bind(user, true);
resetUserPassword();
console.log(user);
