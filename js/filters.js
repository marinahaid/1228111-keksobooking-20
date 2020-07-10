'use strict';

(function () {
  var map = document.querySelector('.map');
  var pinList = document.querySelector('.map__pins');

  function removeAllPins() {
    var allPins = map.querySelectorAll('.map__pin:not(.map__pin--main)');
    for (var i = 0; i < allPins.length; i++) {
      allPins[i].remove();
    }
  }

  var filters = document.querySelector('.map__filters');
  var houseTypeFilter = filters.querySelector('#housing-type');
  var filteredAd = [];
  houseTypeFilter.addEventListener('change', function () {
    removeAllPins();
    if (houseTypeFilter.value === 'any') {
      filteredAd = window.adverts;
    } else {
      filteredAd = window.adverts.filter(function (ad) {
        return ad.offer.type === houseTypeFilter.value;
      });
    }
    window.card.removeCard();

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < filteredAd.length; i++) {
      var currentAd = filteredAd[i];
      fragment.appendChild(window.pin.renderPin(currentAd));

    }
    pinList.appendChild(fragment);
  });
})();
