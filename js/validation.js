'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapPin = document.querySelector('.map__pin--main');
  var form = document.querySelector('.ad-form');
  var reset = form.querySelector('.ad-form__reset');
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
      if (numGuests !== 0) {
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

  var timeIn = document.querySelector('#timein');
  var timeOut = document.querySelector('#timeout');
  timeIn.addEventListener('change', function () {
    timeOut.value = timeIn.value;
  });

  timeOut.addEventListener('change', function () {
    timeIn.value = timeOut.value;
  });

  type.addEventListener('change', function () {
    switch (type.value) {
      case 'bungalo':
        price.placeholder = '0';
        price.min = 0;
        break;
      case 'flat':
        price.placeholder = '1000';
        price.min = 1000;
        break;
      case 'house':
        price.placeholder = '5000';
        price.min = 5000;
        break;
      case 'palace':
        price.placeholder = '10000';
        price.min = 10000;
        break;
    }
  });
  reset.addEventListener('click', function (evt) {
    evt.preventDefault();
    form.reset();
    map.classList.add('map--faded');
    form.classList.add('ad-form--disabled');
    window.map.disactivatePage();
    window.pin.removeAllPins();
    mapPin.style.top = window.map.mapPinInitCoords.y + 'px';
    mapPin.style.left = window.map.mapPinInitCoords.x + 'px';
    window.map.setAddress();

    var cardOpened = map.querySelector('.map__card');
    if (cardOpened) {
      window.card.removeCard();
    }
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.xhr.upload(new FormData(form), window.dialog.onSuccess, window.dialog.onError);
  });
})();
