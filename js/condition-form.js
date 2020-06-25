'use strict';

var form = document.querySelector('ad-form');
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


