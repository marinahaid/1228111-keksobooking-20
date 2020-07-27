'use strict';

(function () {
  var MAX_COUNT_ADS = 5;
  var filters = document.querySelector('.map__filters');
  var houseType = filters.querySelector('#housing-type');
  var housingPrice = filters.querySelector('#housing-price');
  var housingRooms = filters.querySelector('#housing-rooms');
  var housingGuests = filters.querySelector('#housing-guests');
  var filterFeatures = Array.from(filters.querySelectorAll('.map__checkbox').values());

  function allFiltersCheck() {
    var filteredAds = [];

    for (var i = 0; i < window.adverts.length; i++) {
      var ad = window.adverts[i];
      var isSuitabledAd = true;

      isSuitabledAd = checkHouseType(ad);
      if (isSuitabledAd === false) {
        continue;
      }

      isSuitabledAd = checkPrice(ad);
      if (isSuitabledAd === false) {
        continue;
      }

      isSuitabledAd = checkRooms(ad);
      if (isSuitabledAd === false) {
        continue;
      }

      isSuitabledAd = checkGuests(ad);
      if (isSuitabledAd === false) {
        continue;
      }

      isSuitabledAd = checkFeatures(ad);
      if (isSuitabledAd === false) {
        continue;
      }

      filteredAds.push(ad);
      if (filteredAds.length >= MAX_COUNT_ADS) {
        break;
      }

      window.pin.removeAllPins();
      window.card.removeCard();
      window.map.drawPins(filteredAds);
    }
  }
  function checkHouseType(ad) {

    if (houseType.value !== 'any') {
      return ad.offer.type === houseType.value;
    }
    return true;
  }
  function checkPrice(ad) {
    if (housingPrice.value !== 'any') {
      var isSuitable = true;
      switch (housingPrice.value) {
        case 'low':
          isSuitable = (ad.offer.price < 10000);
          break;
        case 'middle':
          isSuitable = (ad.offer.price >= 10000 && ad.offer.price <= 50000);
          break;
        case 'high':
          isSuitable = ad.offer.price > 50000;
          break;
      }
      return isSuitable;
    }
    return true;
  }

  function checkRooms(ad) {
    if (housingRooms.value !== 'any') {
      return ad.offer.rooms === +housingRooms.value;
    }
    return true;
  }

  function checkGuests(ad) {
    if (housingGuests.value !== 'any') {
      return ad.offer.guests === +housingGuests.value;
    }
    return true;
  }

  function checkFeatures(ad) {
    var filterSelectedFeatures = filterFeatures.filter(function (item) {
      return item.checked;
    });
    if (filterSelectedFeatures.length > 0) {
      var adFeatures = ad.offer.features;
      return filterSelectedFeatures.every(function (item) {
        return adFeatures.indexOf(item.value) !== -1;
      });
    }
    return true;
  }
  filters.addEventListener('change', window.debounce(allFiltersCheck));

})();
