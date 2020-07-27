'use strict';

(function () {
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var map = document.querySelector('.map');
  var activePin = null;

  function renderPin(ad) {
    var pinElement = pinTemplate.cloneNode(true);
    pinElement.style.left = ad.location.x + 'px';
    pinElement.style.top = ad.location.y + 'px';
    pinElement.querySelector('img').src = ad.author.avatar;
    pinElement.querySelector('img').alt = ad.offer.title;
    pinElement.addEventListener('click', function () {
      window.card.removeCard();
      window.card.renderCard(ad);

      if (activePin !== null) {
        activePin.classList.remove('map__pin--active');
      }
      pinElement.classList.add('map__pin--active');

      activePin = pinElement;
    });
    return pinElement;
  }
  function removeAllPins() {
    var allPins = map.querySelectorAll('.map__pin:not(.map__pin--main)');
    allPins.forEach(function (it) {
      it.remove();
    });
  }
  window.pin = {
    renderPin: renderPin,
    removeAllPins: removeAllPins
  };
})();
