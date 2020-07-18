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



  var map = document.querySelector('.map');
  var minX = 0;
  var maxX = map.offsetWidth;
  var minY = 130;
  var maxY = 630;





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
    mapPin.addEventListener('mousedown', firstClickMainPin);
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
    mapPin.removeEventListener('mousedown', firstClickMainPin);
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

  function firstClickMainPin() {
    initPage();
  }
  mapPin.addEventListener('mousedown', firstClickMainPin);

  mapPin.addEventListener('keydown', function (evt) {
    evt.preventDefault();
    if (evt.key === 'Enter') {
      initPage();
    }

  });

  mapPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var mapPinCoords = {
        x: mapPin.offsetLeft - shift.x,
        y: mapPin.offsetTop - shift.y
      };

      if (mapPinCoords.x > maxX) {
        mapPinCoords.x = maxX;
      }

      if (mapPinCoords.y > maxY) {
        mapPinCoords.y = maxY;
      }

      if (mapPinCoords.x < minX) {
        mapPinCoords.x = minX;
      }

      if (mapPinCoords.y < minY) {
        mapPinCoords.y = minY;
      }
      mapPin.style.top = (mapPinCoords.y) + 'px';
      mapPin.style.left = (mapPinCoords.x) + 'px';
      maxX = map.offsetWidth - PIN_WIDTH;
      setAddress();
    };



    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
