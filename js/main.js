'use strict';
(function () {

  var erButtonTemplate = document.querySelector('#error').content.querySelector('.error__button');

  var onError = function (message) {
    console.error(message);
  };

  var onSuccess = function (data) {
    console.log(data);
  };

  window.load(onSuccess, onError);
})();
