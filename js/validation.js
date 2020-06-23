'use strict';

(function () {
  var guests = document.querySelector('#capacity');

  function checkNumGuests(room) {
    var numGuests = parselnt(guests.value, 10);

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

  var type = document.querySelector('#type');
  var price = document.querySelector('#price');

  type.addEventListener('change', function () {
    checkType(type.value);

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
      price.placeholder = price.min;
    }
  });

  var mapPin = document.querySelector('.map__pin--main');
  var address = form.querySelector('#address');
  x = mapPin.offsetLeft;
  y = mapPin.offsetTop;
  var xCoord = mapPin.offsetLeft + PIN_WIDTH / 2;
  var yCoord = mapPin.offsetTop + PIN_HEIGHT / 2;

  address.value = xCoord + ',' + yCoord;
})();
