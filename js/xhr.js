'use strict';

(function () {
  var URL = 'https://javascript.pages.academy/keksobooking/data';
  window.load = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();


    var form = document.querySelector('.ad-form');

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('GET', URL);
    xhr.send();


    xhr.open('POST', URL);
    xhr.send(data);






};
})();

