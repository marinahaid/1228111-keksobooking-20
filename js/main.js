'use strict';
var avatar = document.querySelector('.popup__avatar');
var offer = document.querySelector('.popup__close');
var title = document.querySelector('.popup__title')
var address = document.querySelector('.popup__text--address');
var price = document.querySelector('.popup__text--price');
var type = document.querySelector('.popup__type');
var rooms = document.querySelector();
var guests = document.querySelector('.popup__text--capacity');
var checkin = document.querySelector('.popup__features');
var checkout = document.querySelector('.popup__feature--wifi');
var features = document.querySelector('.popup__feature--dishwasher');
var description = document.querySelector('.popup__feature--parking');
var photos = document.querySelector('.popup__feature--washer');
var photos = document.querySelector('.popup__feature--elevator');
var location = document.querySelector('.popup__feature--conditioner');
var x = document.querySelector('.')
var y = document.querySelector

var template = document.querySelector('#card').content.querySelector("article");



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
