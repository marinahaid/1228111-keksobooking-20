'use strict';

(function () {
  var form = document.querySelector(".ad-form");
var guests = document.querySelector('#capacity');
var type = form.querySelector('#type');
var price = form.querySelector('#price');
var rooms = form.querySelector('#room_number');
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
      type.addEventListener('change', function () {
        checkType(type.value);

        guests.addEventListener('change', function () {
          var roomNumber = parselnt(room.value)
       checkNumGuests(roomNumber);
    });
    rooms.addEventListener('change', function () {
      var room
    });
  }) ();



