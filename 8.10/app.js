/*
  Дан произвольный url вида - https://purpleschool.ru/course/javascript
  Нужно сделать функцию, которая выводит в консоль:

  Протокол (https)
  Доменное имя (purpleschool.ru)
  Путь внутри сайта (/course/javascript)
*/

let url = 'https://purpleschool.ru/course/javascript';

function showInConsol (url) {
  let [protocol, _, host, ...path ] = url.split('/');
  if (protocol === 'https:' || protocol === 'http:') {
    if (!host.includes('.')) {
      return;
    }
    console.log(`
    protocol: ${protocol.split(':')[0]}
    host: ${host}
    path: /${path.join('/')}
  `);
  }
};

showInConsol(url);

