'use strict';
(function () {
  var map = document.querySelector('.map');
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');


  var cardElement = cardTemplate.cloneNode(true);
  var cardData = window.adverts[0];

  cardElement.querySelector('.popup__avatar').src = cardData.autor.avatar;
  cardElement.querySelector('.popup__title').textContent = cardData.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = cardData.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = cardData.offer.price ₽/ночь;

  if (cardData.offer.type === 'house') {
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
  }

//можно ли со switch?
  /*switch (cardData.offer.type) {
    cardElement.querySelector('popup__type'):
    textContent = 'Бунгало';
    break;
  }*/

  //Для комнат и гостей
  //cardElement.querySelector('.popup__text--capacity').textContent = cardData.offer.address;
  if (cardData.offer.rooms === '1') {
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

/*if (cardData.offer.guests === '2') {
  cardElement.querySelector('.popup__text--capacity').textContent = '2 комнаты';
}

if (cardData.offer.guests === '3') {
  cardElement.querySelector('.popup__text--capacity').textContent = '3 комнаты';
}*/


//Для удобств
cardElement.querySelector('.popup__features').textContent = cardData.offer.features = [];


//Описание
cardElement.querySelector('.popup__description').textContent = cardData.offer.description;


//Для фото
if (cardData.offer.photos.length === 0) {
      cardData.offer.photos.querySelector('.popup__photos').style.display = 'none';
    } else {
      var fragment = document.createDocumentFragment();
      for (var j = 1; j < cardData.offer.photos.length; i++) {
        var newPhoto = document.createDocumentElement('img');
        newPhoto.className = 'popup__photo';
        newPhoto.src = cardData.offer.photos[j];
        newPhoto.width = 45;
        newPhoto.height = 40;
        newPhoto.alt = 'Фотография жилья' + j;
        fragment.append(newPhoto)
      }
      cardElement.querySelector('.popup__photos').append(fragment);
    }

  map.insertAdjacentHTML('beforeend', cardTemplate);
})();
