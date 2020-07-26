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

  // Форма фильтра
  var filters = document.querySelector('.map__filters');

  // Фильтр по типу жилья
  var houseType = filters.querySelector('#housing-type');
  // Фильтр по цене жилья
  var housingPrice = filters.querySelector('#housing-price');
  // Фильтр по количеству комнат
  var housingRooms = filters.querySelector('#housing-rooms');
  // Фильтр по количеству гостей
  var housingGuests = filters.querySelector('#housing-guests');
  // Фильтр по особенностям помещения в виде массива
  var filterFeatures = Array.from(filters.querySelectorAll('.map__checkbox').values());


  function renderPins(ads) {
    var fragment = document.createDocumentFragment();

    var pinsCount = 5;
    if (ads.length < 5) {
      pinsCount = ads.length;
    }
    for (var i = 0; i < pinsCount; i++) {
      var currentAd = ads[i];
      fragment.appendChild(window.pin.renderPin(currentAd));
    }
    pinList.appendChild(fragment);

  }

  var filteredAd = [];

  function allFiltersCheck() {
    filteredAd = window.adverts;

    checkHouseType(filteredAd);
    checkPrice(filteredAd);
    checkGuests(filteredAd);
    checkRooms(filteredAd);
    checkFeatures(filteredAd);

    removeAllPins();
    window.card.removeCard();
    renderPins(filteredAd);
  }

  function checkHouseType(arr) {
    if (houseType.value !== 'any') {
      filteredAd = arr.filter(function (ad) {
        return ad.offer.type === houseType.value;
      });
    }
  }

  function checkFeatures(arr) {
    // выбрали  значения всех отмеченных  фильтров удобств
    var filterSelectedFeatures = filterFeatures.filter(function (item) {
      return item.checked;
    });
    if (filterSelectedFeatures.length > 0) {
      filteredAd = arr.filter(function (ad) {
        var adFeatures = ad.offer.features;
        return filterSelectedFeatures.every(function (item) {
          return adFeatures.indexOf(item.value) !== -1;
        });
      });
    }
  }

  function checkRooms(arr) {
    if (housingRooms.value !== 'any') {
      filteredAd = arr.filter(function (ad) {
        return ad.offer.rooms === +housingRooms.value;
      });
    }
  }
  function checkGuests(arr) {
    if (housingGuests.value !== 'any') {
      filteredAd = arr.filter(function (ad) {
        return ad.offer.guests === +housingGuests.value;
      });
    }
  }

  function checkPrice(arr) {
    if (housingPrice.value !== 'any') {
      switch (housingPrice.value) {
        case 'low':
          filteredAd = arr.filter(function (ad) {
            return ad.offer.price < 10000;
          });
          break;
        case 'middle':
          filteredAd = arr.filter(function (ad) {
            return ad.offer.price >= 10000 && ad.offer.Price <= 50000;
          });
          break;
        case 'high':
          filteredAd = arr.filter(function (ad) {
            return ad.offer.price > 50000;
          });
          break;
      }
    }
  }

  filters.addEventListener('change', window.debounce(allFiltersCheck));

  window.filters = {
    removeAllPins: removeAllPins
  };

})();
