'use strict';

(function () {
  var form = document.querySelector('.ad-form');
  var guests = document.querySelector('#capacity');
  var type = form.querySelector('#type');
  var price = form.querySelector('#price');
  var rooms = form.querySelector('#room_number');
  function checkNumGuests(room) {
    var numGuests = parseInt(guests.value, 10);

    guests.setCustomValidity('');
    if (room === 1) {
      if (numGuests !== 1) {
        guests.setCustomValidity('Для одной комнаты может быть только 1 гость');
      }
    }

    if (room === 2) {
      if ((numGuests !== 1) && (numGuests !== 2)) {
        guests.setCustomValidity('Для двух комнат может быть  1 или 2 гостя');
      }
    }

    if (room === 3) {
      if (numGuests === 0) {
        guests.setCustomValidity('Для трех комнат может быть  1 или 2  или 3 гостя');
      }
    }

    if (room === 100) {
      if (numGuests !== [100 - 0]) {
        guests.setCustomValidity('Не для гостей');
      }
    }
  }

  function checkType(selectedType) {
    if (selectedType === 'flat') {
      price.min = 1000;
    }

    if (selectedType === 'bungalo') {
      price.min = 0;
    }

    if (selectedType === 'house') {
      price.min = 5000;
    }

    if (selectedType === 'palace') {
      price.min = 10000;
    }
    price.placeholder = '' + price.min;
  }
  type.addEventListener('change', function () {
    checkType(type.value);
  });
  guests.addEventListener('change', function () {
    var roomNumber = parseInt(rooms.value, 10);
    checkNumGuests(roomNumber);
  });
  rooms.addEventListener('change', function () {
    var roomNumber = parseInt(rooms.value, 10);
    checkNumGuests(roomNumber);
  });

  /* form.addEventListener('submit', function (evt) {
    window.xhr.upload(new FormData(form),*/


  var main = document.querySelector('.main');

  function onclickSuccessMsg() {
    var successMsg = main.querySelector('.success');
    if (successMsg) {
      successMsg.remove();
    }
    document.removeEventListener('keydown', onkeydownEsc);
    document.removeEventListener('click', onclickSuccessMsg);
  }
  function onkeydownEsc(evt) {
    if (evt.key === 'Escape') {
      onclickSuccessMsg();
    }
  }

  function showSuccessMessage() {
    var template = document.querySelector('#success').content;
    var successMsg = template.cloneNode(true);
    document.querySelector('main').appendChild(successMsg);
    document.addEventListener('click', onclickSuccessMsg);
    document.addEventListener('keydown', onkeydownEsc);
  }

  function showErrorMessage() {
    var template = document.querySelector('#error').content;
    var errorMsg = template.cloneNode(true);
    var template = document.querySelector('.error__button').content;
    document.querySelector('main').appendChild(errorMsg);

    var errorButton = main.querySelector('.error__button')

    errorButton.addEventListener('click', onclickErrorButton);

    document.addEventListener('click', showErrorMessage);
    document.addEventListener('keydown', onkeydownEscErrorMsg);
  }



  function onclickErrorButton() {
    var errorMsg = main.querySelector('.error');
    if (errorMsg) {
      errorMsg.remove();
    }
    document.removeEventListener('keydown', onkeydownEsc);
    document.removeEventListener('click', onclickErrorButton);
  }
  function onkeydownEsc(evt) {
    if (evt.key === 'Escape') {
      onclickErrorButton();
    }
  }

  function onSuccess() {
    form.reset();
    showSuccessMessage();
    window.map.disactivatePage();
    window.filters.removeAllPins();
    var mapPin = document.querySelector('.map__pin--main');
    mapPin.style.top = window.map.mapPinInitCoords.y + 'px';
    mapPin.style.left = window.map.mapPinInitCoords.x + 'px';

    window.map.setAddress();

  }
  function onError() {
    showErrorMessage();
  }

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.xhr.upload(new FormData(form), onSuccess, onError)
  });
})();



