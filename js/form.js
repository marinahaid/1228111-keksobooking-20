'use strict';
(function () {
  var URL_LOAD = 'https://javascript.pages.academy/keksobooking/data';
  var URL_UPLOAD = 'https://javascript.pages.academy/keksobooking';
function load (onSuccess, onError) {
  var xhr = new XMLHttpRequest();

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

  xhr.open('GET', URL_LOAD);
  xhr.send();
};



function upload (data, onSuccess, onError) {
  var xhr = new XMLHttpRequest();

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

  xhr.open('POST', URL_UPLOAD);
  xhr.send(data);
};

window.xhr.upload(new FormData(form), onSuccess, onError);
  window.xhr = {
    load: load,
    upload: upload
  }


})();
