'use strict';
//создаем константы с массивом
var TITLE_NAMES = ['Большая уютная квартира', 'Маленькая неутная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгалао по колено в воде']
var OBJECT_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
var FEATURES_SERVICES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
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
//находим класс и удаляем
var map = document.querySelector('.map');


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




var form = document.querySelectorAll('ad-form');
var allfieldsets = form.querySelectorAll('fieldset');


var mapFilters = document.querySelectorAll('.map__filters');
var allSelects = mapFilters.querySelectorAll('.select');
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
disactivatePage()

 var mapPin = document.querySelector('.map__pin--main');

  mapPin.addEventListener('mousedown', function () {
   activatePage();


    mapPin.addEventListener('keydown', function (evt) {
      evt.preventDefault();
      if (evt.key === 'Enter') {
        activatePage();
      }

mapPin.addEventListener('keydoun', function (evt) {
    if (evt.key === 'Enter') {
      allfieldsets.classList.remove('disabled');
    }
  });

  //вызываем функцию в цикле для каждого элемента в мвссиве, код отрисовки меток
fnction drawPins() {
  for (var j = 0; j < adverts.length; j++) {
    var ad1 = adverts[j];
    var pin = renderPin(ad1);
    fragment.appendChild(pin);

  }

  pinList.appendChild(fragment);
  }
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
  form.classList.remove('ad-form--disabled')
   drawPins();
}




  /*var input = document.querySelector('input');
  var successTemplate = document.querySelector('#success').content.querySelector('div');
  var errorTemplate = document.querySelector('#error').content.querySelector('div');

  input.addEventListener('invalid', function (evt) {
    if (input.validity.tooShort) {

    }

    else if (input.validity.tooLong) {

    }

    else if (input.validity.valueMissing) {

    }
  });*/
