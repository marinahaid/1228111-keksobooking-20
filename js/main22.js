'use strict';


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

var guests = document.querySelector('#capacity');

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

address.value = xCoord + ',' + yCoord;

mapPin.addEventListener('mousedown', function () {
  activatePage();
});

mapPin.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  if (evt.key === 'Enter') {
    activatePage();
  }
});
