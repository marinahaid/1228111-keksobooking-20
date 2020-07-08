'use strict';
(function () {
  var map = document.querySelector('.map');
  var cardTemplate = document
    .querySelector('#card')
    .content.querySelector('.map__card');

  var cardElement = cardTemplate.cloneNode(true);

  function removeCard() {
    var card = map.querySelector('.map__card');
    if (card !== null) {
      card.remove();
    }
  }

  // var cardData = window.adverts[0];
  // window.card =
  function renderCard(cardData) {
    cardElement.querySelector('.popup__avatar').src = cardData.author.avatar;
    cardElement.querySelector('.popup__title').textContent =
      cardData.offer.title;
    cardElement.querySelector('.popup__text--address').textContent =
      cardData.offer.address;
    cardElement.querySelector('.popup__text--price').textContent =
      cardData.offer.price + '₽/ночь';

    /* if (cardData.offer.type === 'house') {
      cardElement.querySelector('popup__type').textContent = 'Дом';
    }

    if (cardData.offer.type === 'flat') {
      cardElement.querySelector('popup__type').textContent = 'Квартира';
    }

    if (cardData.offer.type === 'palace') {
      cardElement.querySelector('popup__type').textContent = 'Дворец';
    }

    if (cardData.offer.type === 'bungalo') {
      cardElement.querySelector('popup__type').textContent = 'Бунгало';
    } */

    switch (cardData.offer.type) {
      case 'house':
        cardElement.querySelector('.popup__type').textContent = 'Дом';
        break;

      case 'flat':
        cardElement.querySelector('.popup__type').textContent = 'Квартира';
        break;

      case 'palace':
        cardElement.querySelector('.popup__type').textContent = 'Дворец';
        break;

      case 'bungalo':
        cardElement.querySelector('.popup__type').textContent = 'Бунгало';
        break;
    }

    // Для комнат и гостей
    cardElement.querySelector('.popup__text--capacity').textContent =
      cardData.offer.rooms + 'комната для ' + cardData.offer.guests + ' гостей';
    /* if (cardData.offer.rooms === '1') {
       cardElement.querySelector('.popup__text--capacity').textContent = 'для 1 гостя';
     }

     if (cardData.offer.rooms === '2') {
       cardElement.querySelector('.popup__text--capacity').textContent = 'для 2 гостей';
     }

     if (cardData.offer.rooms === '3') {
       cardElement.querySelector('.popup__text--capacity').textContent = 'для 3 гостей';
     }

   if (cardData.offer.guests === '1') {
       cardElement.querySelector('.popup__text--capacity').textContent = '1 комната';
     } else if {
       cardData.offer.rooms.querySelector('.popup__text--capacity').textContent = 'для 1 гостя';
     }

   /* if (cardData.offer.guests === '2') {
     cardElement.querySelector('.popup__text--capacity').textContent = '2 комнаты';
   }

   if (cardData.offer.guests === '3') {
     cardElement.querySelector('.popup__text--capacity').textContent = '3 комнаты';
   } */

    // Для заезда.выезда
    cardElement.querySelector('.popup__text--time').textContent =
      'Заезд после ' +
      cardData.offer.checkin +
      ' выезд до ' +
      cardData.offer.checkout;

    // Для удобств
    cardElement.querySelector('.popup__features').innerHTML = '';
    for (var i = 0; i < cardData.offer.features.length; i++) {
      var newItemFeature = document.createElement('li');
      newItemFeature.classList.add('popup__feature');
      newItemFeature.classList.add('popup__feature--' + cardData.offer.features[i]
      );

      cardElement.querySelector('.popup__features').appendChild(newItemFeature);
    }

    // Описание
    cardElement.querySelector('.popup__description').textContent =
      cardData.offer.description;

    // Для фото
    cardElement.querySelector('.popup__photos').innerHTML = '';
    if (cardData.offer.photos.length === 0) {
      cardElement.offer.photos.querySelector('.popup__photos').style.display =
        'none';
    } else {
      cardElement.querySelector('.popup__photos').style.display = '';
      var fragment = document.createDocumentFragment();
      for (var j = 1; j < cardData.offer.photos.length; j++) {
        var newPhoto = document.createElement('img');
        newPhoto.className = 'popup__photo';
        newPhoto.src = cardData.offer.photos[j];
        newPhoto.width = 45;
        newPhoto.height = 40;
        newPhoto.alt = 'Фотография жилья' + j;
        fragment.append(newPhoto);
      }
      cardElement.querySelector('.popup__photos').append(fragment);
    }

    map.insertBefore(cardElement, map.querySelector('map__filters-container'));
  }

  window.card = {
    renderCard: renderCard,
    removeCard: removeCard
  };
})();
