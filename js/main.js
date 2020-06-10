'use strict';
var TITLE_NAMES = ['Большая уютная квартира', 'Маленькая неутная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгалао по колено в воде']
var OBJECT_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
var FEATURES_SERVICES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var adverts = [];
function generateRandomValue(min, max) {
  var rand = min + Math.random() * (max - min + 1);
  rand = Math.floor(rand);
  return rand;
}

function getRandomItem(array) {
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

for (var i = 0; i < 8; i++) {
  var ad = {
    'author': '',
    'offer': {},
    'location': {}
  };
  ad.author = 'img/avatars/user0' + (i + 1) + '.png';
  ad.offer.title = getRandomItem(TITLE_NAMES);
  ad.offer.adress = generateRandomValue(0, 1024) + ',' + generateRandomValue(130, 630);
  ad.offer.price = generateRandomValue(0, 20000);
  ad.offer.type = getRandomItem(OBJECT_TYPE);
  ad.offer.rooms = generateRandomValue(0, 6);
  ad.offer.guests = generateRandomValue(0, 100);
  ad.offer.checkin = getRandomItem(CHECKIN_TIMES);
  ad.offer.checkout = getRandomItem(CHECKIN_TIMES);
  ad.offer.features = getRandomItem(FEATURES_SERVICES);
  ad.offer.description = '';
  ad.offer.photos = getRandomItem(PHOTOS);
  ad.location.x = generateRandomValue(0, 1024);
  ad.location.y = generateRandomValue(130, 630);
  adverts.push(ad);
}

var map = document.querySelector('.map');
map.classList.remove('map--faded');


var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

function renderPin(ad) {
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.style.left = ad.location.x + 'px';
  pinElement.style.top = ad.location.y + 'px';
  pinElement.querySelector('img').src = ad.author;
  pinElement.querySelector('img').alt = ad.offer.title;
  return pinElement;
}

var pinList = document.querySelector('.map__pins');
var fragment = document.createDocumentFragment();
for (var j = 0; j < adverts.length; j++) {
  var ad1 = adverts[j];
  var pin = renderPin(ad1);
  fragment.appendChild(pin);

}

pinList.appendChild(fragment);






