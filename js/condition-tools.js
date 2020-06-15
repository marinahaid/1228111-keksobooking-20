'use strict';

//вызов функцию, кот делает фильтры и фиелдсеты неактивными
disactivatePage();




var mapPin = document.querySelector('.map__pin--main');
var address = form.querySelector('#address');
x = mapPin.offsetLeft;
y = mapPin.offsetTop;
var xCoord = mapPin.offsetLeft + PIN_WIDTH / 2;
var yCoord = mapPin.offsetTop + PIN_HEIGHT / 2;

address.value = xCoord + ',' + yCoord;


mapPin.addEventListener('mousedown', function () {
  activatePage();


  mapPin.addEventListener('keydown', function (evt) {
    evt.preventDefault();
    if (evt.key === 'Enter') {
      activatePage();
    }



/*var input = document.querySelector('input');
var successTemplate = document.querySelector('#success').content.querySelector('div');
var errorTemplate = document.querySelector('#error').content.querySelector('div');

input.addEventListener('invalid', function (evt) {
  if (input.validity.tooShort) {

  }

  else if (input.validity.tooLong) {

  }

  else if (input.validity.valueMissing) {

  }
});*/
