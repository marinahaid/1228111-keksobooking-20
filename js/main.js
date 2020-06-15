'use strict';
//создаем константы с массивом
var TITLE_NAMES = ['Большая уютная квартира', 'Маленькая неутная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгалао по колено в воде']
var OBJECT_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
var FEATURES_SERVICES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;
var MIN_TITLE = 30;
var MAX_TITLE = 100;
//переменная для массива
var adverts = [];

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



//создаем переменную на основе шаблона
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

//функцияб устанавливающая значения атрибутов
function renderPin(ad) {
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.style.left = ad.location.x + 'px';
  pinElement.style.top = ad.location.y + 'px';
  pinElement.querySelector('img').src = ad.author;
  pinElement.querySelector('img').alt = ad.offer.title;
  return pinElement;
}

//находим класс куда добавим элементы-метки
var pinList = document.querySelector('.map__pins');
var fragment = document.createDocumentFragment();



//вызываем функцию в цикле для каждого элемента в мвссиве, код отрисовки меток
function drawPins() {
  for (var j = 0; j < adverts.length; j++) {
    var ad1 = adverts[j];
    var pin = renderPin(ad1);
    fragment.appendChild(pin);
  }

  pinList.appendChild(fragment);
}

var form = document.querySelector('.ad-form');
var allfieldsets = form.querySelectorAll('fieldset');
var map = document.querySelector('.map');

var mapFilters = document.querySelector('.map__filters');
var allSelects = mapFilters.querySelectorAll('select');
var fieldsetmapFilters = mapFilters.querySelector('fieldset');

//перебираем филдсеты и дизейблим
function disactivatePage() {
  for (var i = 0; i < allfieldsets.length; i++) {
    allfieldsets[i].disabled = true;
  }
  //делаем недоступными фильтры формы
  for (var j = 0; j < allSelects.length; j++) {
    allSelects[j].disabled = true;
  }
  fieldsetmapFilters.disabled = true;
}

//вызов функцию, кот делает фильтры и фиелдсеты неактивными
disactivatePage();

//вызываем функцию, кот делает стр активной
function activatePage() {
  for (var i = 0; i < allfieldsets.length; i++) {
    allfieldsets[i].disabled = false;
  }

  for (var j = 0; j < allSelects.length; j++) {
    allSelects[j].disabled = false;
  }

  fieldsetmapFilters.disabled = false;
  map.classList.remove('map--faded');
  form.classList.remove('ad-form--disabled');
  drawPins();
}

var title = document.querySelector('#title');
title.addEventListener('invalid', function (evt) {
  if (title.validity.tooShort) {
    title.setCustomValidity('Минимальная длина 30 символов');
  } else if (title.validity.tooLong) {
    title.setCustomValidity('Максимальная длина 100 символов');
  } else if (title.validity.valueMissing) {
    title.setCustomValidity('Обязательное текстовое поле');
  } else {
    title.setCustomValidity('');
  }
});

title.addEventListener('input', function (evt) {
  var valueLength = title.value.length;

  if (valueLength < MIN_TITLE) {
    title.setCustomValidity('Еще ' + (MIN_TITLE - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE) {
    title.setCustomValidity('Удалите лишние ' + (valueLength - MIN_TITLE) + ' симв.');
  } else {
    title.setCustomValidity('');
  }
});


var mapPin = document.querySelector('.map__pin--main');
var address = form.querySelector('#address');
//x = mapPin.offsetLeft;
//y = mapPin.offsetTop;
var xCoord = mapPin.offsetLeft + PIN_WIDTH / 2;
var yCoord = mapPin.offsetTop + PIN_HEIGHT / 2;

//address.value = xCoord + ',' + yCoord;

//var price = form.querySelector('#price');


mapPin.addEventListener('mousedown', function () {
  activatePage();
});

mapPin.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  if (evt.key === 'Enter') {
    activatePage();
  }
});
