'use strict';

var adverts = [];
function generateRandomValue(min, max) {
  var rand = min + Math.random() * (max - min + 1);
  rand = Math.floor(rand);
  return rand;
}

function getRandomItem(array) {
  var rand = Math.floor(Math.random() * array.lenght);
  return array[rand];
}

for (var i = 0; i < 8; i++) {
  var ad = {};
  var TITLE_NAMES = ['Большая уютная квартира', 'Маленькая неутная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгалао по колено в воде']
  var OBJECT_TYPE = ['palace', 'flat', 'house', 'bungalo'];
  var CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
  var FEATURES_SERVICES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];




  ad.author = 'img/avatars/user0' + (i + 1) + '.png';
  ad.offer.title = getRandomItem(TITLE_NAMES);
  ad.offer.adress = generateRandomValue(0, 1024) + ',' + generateRandomValue(130, 630);
  ad.offer.price =
    ad.offer.type = getRandomItem(OBJECT_TYPE);
  ad.offer.rooms =
    ad.offer.guests =
    ad.offer.checkin =
    ad.offer.checkout =
    ad.offer.features =
    ad.offer.description =
    ad.offer.photos =
    ad.location =
    adverts.push(ad);
}

/*{
  "author": {
      "avatar": строка, адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
  },
  "offer": {
      "title": строка, заголовок предложения
      "address": строка, адрес предложения. Для простоты пусть пока представляет собой запись вида "{{location.x}}, {{location.y}}", например, "600, 350"
      "price": число, стоимость
      "type": строка с одним из четырёх фиксированных значений: palace, flat, house или bungalo
      "rooms": число, количество комнат
      "guests": число, количество гостей, которое можно разместить
      "checkin": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
      "checkout": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
      "features": массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",
      "description": строка с описанием,
      "photos": массив строк случайной длины, содержащий адреса фотографий "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
  },
  "location": {
      "x": случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
      "y": случайное число, координата y метки на карте от 130 до 630.
  }
}*/
ф
