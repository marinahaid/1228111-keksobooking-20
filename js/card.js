'use strict';
(function () {
  var map = document.querySelector('.map');
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  /*for (var i = 0; i < cardTemplate.length; i++) {
var element = template.cloneNode(true);
element.children[0].textContent = i;
  }*/
  map.insertAdjacentHTML('beforeend', cardTemplate);
})();
