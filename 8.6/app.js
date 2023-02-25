/*
  Дан список задач.
  Сделать функции:
  Добавление задачи в конец
  Удаление задачи по названию
  Перенос задачи в начало списка по названию
*/

let tasks = ['Задача 1'];

function addTaskToEnd (task, arr) {
  return arr.push(task);
};
addTaskToEnd('Задача 2', tasks);
console.log(tasks);

function removeTaskOnName (task, arr) {
  let taskIndex = arr.indexOf(task);
  if (taskIndex === -1) return;
  return arr.splice(taskIndex, 1);
}
removeTaskOnName('Задача 1', tasks);
console.log(tasks);

let tasks2 = ['1', '2', '3']
function transferTaskToStart(task, arr) {
  let taskIndex = arr.indexOf(task);
  if (taskIndex === -1) return;
  let transferedTask = arr.splice(taskIndex, 1)[0];
  arr.unshift(transferedTask);
}
transferTaskToStart(5, tasks2);
console.log(tasks2)
