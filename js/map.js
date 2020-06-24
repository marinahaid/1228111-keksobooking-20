"use strict";

(function () {
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;

  var form = document.querySelector(".ad-form");
  var allfieldsets = form.querySelectorAll("fieldset");
  var map = document.querySelector(".map");

  var mapFilters = document.querySelector(".map__filters");
  var allSelects = mapFilters.querySelectorAll("select");
  var fieldsetmapFilters = mapFilters.querySelector("fieldset");

  //перебираем филдсеты и дизейблим
  function disactivatePage() {
    for (var i = 0; i < allfieldsets.length; i++) {
      allfieldsets[i].disabled = true;
    }
    //делаем недоступными фильтры формы
    for (var j = 0; j < allSelects.length; j++) {
      allSelects[j].disabled = true;
    }
    fieldsetmapFilters.disabled = true;
  }

  //вызов функцию, кот делает фильтры и фиелдсеты неактивными
  disactivatePage();

  //вызываем функцию, кот делает стр активной
  function activatePage() {
    for (var i = 0; i < allfieldsets.length; i++) {
      allfieldsets[i].disabled = false;
    }

    for (var j = 0; j < allSelects.length; j++) {
      allSelects[j].disabled = false;
    }

    fieldsetmapFilters.disabled = false;
    map.classList.remove("map--faded");
    form.classList.remove("ad-form--disabled");
    drawPins();
    setAdress();
  }

  var pinList = document.querySelector('.map__pins');
  function drawPins() {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < window.adverts.length; j++) {
      var ad1 = window.data.adverts[j];
      var pin = window.pin.renderPin(ad1);
      fragment.appendChild(pin);
    }

    pinList.appendChild(fragment);
  }

  var mapPin = document.querySelector('.map__pin--main');
  var address = form.querySelector('#address');
  x = mapPin.offsetLeft;
  y = mapPin.offsetTop;
  var xCoord = mapPin.offsetLeft + PIN_WIDTH / 2;
  var yCoord = mapPin.offsetTop + PIN_HEIGHT / 2;

  address.value = xCoord + ',' + yCoord;

  disactivatePage();
  mapPin.addEventListener('mousedown', function () {
    activatePage();
  });

  mapPin.addEventListener('keydown', function (evt) {
    evt.preventDefault();
    if (evt.key === 'Enter') {
      activatePage();

  });
})();