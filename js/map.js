'use strict';

(function () {
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;

  var map = document.querySelector('.map');
  var mapPin = document.querySelector('.map__pin--main');


  var form = document.querySelector('.ad-form');
  var allfieldsets = form.querySelectorAll('fieldset');
  var map = document.querySelector('.map');

  var mapFilters = document.querySelector('.map__filters');
  var allSelects = mapFilters.querySelectorAll('select');
  var fieldsetmapFilters = mapFilters.querySelector('fieldset');
  var pinList = document.querySelector('.map__pins');
  window.adverts = [];

  var onError = function (messange) {
    console.log(messange);
  };

  var onSuccess = function (data) {
    window.adverts = data;
    activatePage();
  };

  function initPage() {
    window.load(onSuccess, onError);
  }


  function disactivatePage() {
    for (var i = 0; i < allfieldsets.length; i++) {
      allfieldsets[i].disabled = true;
    }

    for (var j = 0; j < allSelects.length; j++) {
      allSelects[j].disabled = true;
    }
    fieldsetmapFilters.disabled = true;
  }

  disactivatePage();

  function activatePage() {
    for (var i = 0; i < allfieldsets.length; i++) {
      allfieldsets[i].disabled = false;
    }

    for (var j = 0; j < allSelects.length; j++) {
      allSelects[j].disabled = false;

    }

    fieldsetmapFilters.disabled = false;

    map.classList.remove('map--faded');
    form.classList.remove('ad-form--disabled');

    drawPins();
    setAddress();

    // window.card(window.adverts[0]);
  }


  function drawPins() {
    var countAd = 5;
    window.adverts.length = 20;
    if (window.adverts.length < 5) {
      countAd = window.adverts.length;
    }
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < countAd; j++) {
      var ad1 = window.adverts[j];
      var pin = window.pin.renderPin(ad1);
      fragment.appendChild(pin);
    }
    pinList.appendChild(fragment);
  }

  function setAddress() {

    var address = form.querySelector('#address');
    var xCoord = mapPin.offsetLeft + PIN_WIDTH / 2;
    var yCoord = mapPin.offsetTop + PIN_HEIGHT / 2;
    address.value = xCoord + ',' + yCoord;
  }


  mapPin.addEventListener('mousedown', function () {
    initPage();
  });

  mapPin.addEventListener('keydown', function (evt) {
    evt.preventDefault();
    if (evt.key === 'Enter') {
      initPage();
    }

  });
  function removeAllPins() {
    var allPins = map.querySelectorAll('.map__pin:not(.map__pin--main)');
    for (var i = 0; i < allPins.length; i++) {
      allPins[i].remove();
    }
  }

})();
