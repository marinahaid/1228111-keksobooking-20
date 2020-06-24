'use strict';

(function () {
  //создаем переменную на основе шаблона
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  function renderPin(ad) {
    var pinElement = pinTemplate.cloneNode(true);
    pinElement.style.left = ad.location.x + 'px';
    pinElement.style.top = ad.location.y + 'px';
    pinElement.querySelector('img').src = ad.author;
    pinElement.querySelector('img').alt = ad.offer.title;
    return pinElement;
  }

  window.pin = {
    renderPin: renderPin;
  }
})();
