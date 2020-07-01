'use strict';
(function () {
  var onError = function (message) {
    console.error(message);
  };

  var onSuccess = function (data) {
    console.log(data);
  };

  window.load('https://javascript.pages.academy/keksobooking/data', onSuccess, onError);

  window.load('https://javascript.pages.academy/keksobooking/data', onSuccess, onError);

  window.load('https://api.github.com/user', onSuccess, onError);
})();
