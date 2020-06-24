'use strict';
/*(function () {

  var TITLE_NAMES = ['Большая уютная квартира', 'Маленькая неутная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгалао по колено в воде']
  var OBJECT_TYPE = ['palace', 'flat', 'house', 'bungalo'];
  var CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
  var FEATURES_SERVICES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  //переменная для массива
  var adverts = [];

  window.main = {
    TITLE_NAMES: TITLE_NAMES;
    OBJECT_TYPE: OBJECT_TYPE;
    CHECKIN_TIMES: CHECKIN_TIMES;
    FEATURES_SERVICES: FEATURES_SERVICES;
    PHOTOS: PHOTOS;
    PIN_WIDTH: PIN_WIDTH;
    PIN_HEIGHT: PIN_HEIGHT;
    adverts: adverts;
  };




//функция для перебора чисел
function generateRandomValue(min, max) {
  var rand = min + Math.random() * (max - min + 1);
  rand = Math.floor(rand);
  return rand;
}
//функция для перебора строк
function getRandomItem(array) {
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
}
}) ();
for (var i = 0; i < 8; i++) {
  var ad = {
    'author': '',
    'offer': {},
    'location': {}
  };
  ad.author = 'img/avatars/user0' + (i + 1) + '.png';
  ad.offer.title = getRandomItem(window.main.TITLE_NAMES);
  ad.offer.adress = generateRandomValue(0, 1024) + ',' + generateRandomValue(130, 630);
  ad.offer.price = generateRandomValue(0, 20000);
  ad.offer.type = getRandomItem(window.main.OBJECT_TYPE);
  ad.offer.rooms = generateRandomValue(0, 6);
  ad.offer.guests = generateRandomValue(0, 100);
  ad.offer.checkin = getRandomItem(window.main.CHECKIN_TIMES);
  ad.offer.checkout = getRandomItem(window.main.CHECKIN_TIMES);
  ad.offer.features = getRandomItem(window.main.FEATURES_SERVICES);
  ad.offer.description = '';
  ad.offer.photos = getRandomItem(window.main.PHOTOS);
  ad.location.x = generateRandomValue(0, 1024);
  ad.location.y = generateRandomValue(130, 630);
  adverts.push(ad);
}


//создаем переменную на основе шаблона
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

//функцияб устанавливающая значения атрибутов
/*function renderPin(ad) {
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.style.left = ad.location.x + 'px';
  pinElement.style.top = ad.location.y + 'px';
  pinElement.querySelector('img').src = ad.author;
  pinElement.querySelector('img').alt = ad.offer.title;
  return pinElement;
}*/

//находим класс куда добавим элементы-метки
//var pinList = document.querySelector('.map__pins');




//вызываем функцию в цикле для каждого элемента в мвссиве, код отрисовки меток
/*function drawPins() {
  for (var j = 0; j < adverts.length; j++) {
    var ad1 = adverts[j];
    var pin = renderPin(ad1);
    fragment.appendChild(pin);
  }

  pinList.appendChild(fragment);
}*/









/*var guests = document.querySelector('#capacity');

function checkNumGuests(room) {
  var numGuests = parselnt(guests.value, 10);

  guests.setCustomValidity('');
  if (room === 1) {
    if (numGuests !== 1) {
      guests.setCustomValidity('Для одной комнаты может быть только 1 гость');
    }
  }

  if (room === 2) {
    if ((numGuests !== 1) && (numGuests !== 2)) {
      guests.setCustomValidity('Для двух комнат может быть  1 или 2 гостя');
    }
  }

  if (room === 3) {
    if (numGuests === 0) {
      guests.setCustomValidity('Для трех комнат может быть  1 или 2  или 3 гостя');
    }
  }

  if (room === 100) {
    if (numGuests !== [100 - 0]) {
      guests.setCustomValidity('Не для гостей');
    }
  }
}

var type = document.querySelector('#type');
var price = document.querySelector('#price');

type.addEventListener('change', function () {
  checkType(type.value);

  function checkType(selectedType) {
    if (selectedType === 'flat') {
      price.min = 1000;
    }

    if (selectedType === 'bungalo') {
      price.min = 0;
    }

    if (selectedType === 'house') {
      price.min = 5000;
    }

    if (selectedType === 'palace') {
      price.min = 10000;
    }
    price.placeholder = price.min;
  }
});


var mapPin = document.querySelector('.map__pin--main');
var address = form.querySelector('#address');
x = mapPin.offsetLeft;
y = mapPin.offsetTop;
var xCoord = mapPin.offsetLeft + PIN_WIDTH / 2;
var yCoord = mapPin.offsetTop + PIN_HEIGHT / 2;

address.value = xCoord + ',' + yCoord;*/











