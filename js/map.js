'use strict';

(function () {
  var COUNT_ADS = 5;
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var MIN_X = 0 - PIN_WIDTH / 2;
  var MIN_Y = 130 - PIN_HEIGHT;
  var MAX_Y = 630 - PIN_HEIGHT;
  var map = document.querySelector('.map');
  var maxX = map.offsetWidth - PIN_WIDTH / 2;
  var mapPin = document.querySelector('.map__pin--main');
  var mapPinInitCoords = {
    x: mapPin.offsetLeft,
    y: mapPin.offsetTop
  };

  var form = document.querySelector('.ad-form');
  var price = form.querySelector('#price');
  var address = form.querySelector('#address');
  var allfieldsets = form.querySelectorAll('fieldset');
  var mapFilters = document.querySelector('.map__filters');
  var allSelects = mapFilters.querySelectorAll('select');
  var fieldsetmapFilters = mapFilters.querySelector('fieldset');
  var allCheckedInputs = fieldsetmapFilters.querySelectorAll('input');
  var pinList = document.querySelector('.map__pins');
  window.adverts = [];
  function onError(message) {
    var node = document.createElement('div');
    node.style.zIndex = 100;
    node.style.position = 'absolute';
    node.style.top = '25%';
    node.style.left = 0;
    node.style.right = 0;
    node.style.width = '300px';
    node.style.margin = '0 auto';
    node.style.padding = '25px 50px';
    node.style.fontSize = '21px';
    node.style.textAlign = 'center';
    node.style.color = '#ff5635';
    node.style.backgroundColor = 'white';
    node.style.boxShadow = '0 0 2px 2px #ff6547';
    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  function onSuccess(data) {
    window.adverts = data;
    activatePage();
  }

  function initPage() {
    window.xhr.load(onSuccess, onError);
  }

  function disactivatePage() {
    allfieldsets.forEach(function (it) {
      it.disabled = true;
    });

    allSelects.forEach(function (it) {
      it.disabled = true;
    });

    allCheckedInputs.forEach(function (item) {
      item.checked = false;
    });

    fieldsetmapFilters.disabled = true;
    map.classList.add('.map__faded');
    form.classList.add('.ad-form--disabled');
    mapPin.addEventListener('mousedown', firstClickMainPin);
  }
  disactivatePage();

  function activatePage() {
    allfieldsets.forEach(function (it) {
      it.disabled = false;
    });

    allSelects.forEach(function (it) {
      it.disabled = false;
    });

    allCheckedInputs.forEach(function (item) {
      item.checked = false;
    });

    fieldsetmapFilters.disabled = false;
    map.classList.remove('map--faded');
    form.classList.remove('ad-form--disabled');
    drawPins(window.adverts);
    setAddress();
    mapPin.removeEventListener('mousedown', firstClickMainPin);
    price.min = 1000;
    price.placeholder = '1000';
    form.querySelector('#capacity').value = '1';
  }

  function drawPins(arr) {
    var countAd = COUNT_ADS;
    if (arr.length < COUNT_ADS) {
      countAd = arr.length;
    }

    var fragment = document.createDocumentFragment();
    for (var j = 0; j < countAd; j++) {
      var ad1 = arr[j];
      var pin = window.pin.renderPin(ad1);
      fragment.appendChild(pin);
    }
    pinList.appendChild(fragment);
  }

  function setAddress() {
    var xCoord = mapPin.offsetLeft + PIN_WIDTH / 2;
    var yCoord = mapPin.offsetTop + PIN_HEIGHT;
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

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();
      maxX = map.offsetWidth - PIN_WIDTH / 2;
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

      if (mapPinCoords.y > MAX_Y) {
        mapPinCoords.y = MAX_Y;
      }

      if (mapPinCoords.x < MIN_X) {
        mapPinCoords.x = MIN_X;
      }

      if (mapPinCoords.y < MIN_Y) {
        mapPinCoords.y = MIN_Y;
      }
      mapPin.style.left = (mapPinCoords.x) + 'px';
      mapPin.style.top = (mapPinCoords.y) + 'px';
      setAddress();
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.map = {
    disactivatePage: disactivatePage,
    mapPinInitCoords: mapPinInitCoords,
    setAddress: setAddress,
    drawPins: drawPins
  };
})();
