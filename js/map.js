'use strict';

(function () {
  function drawPins() {
    for (var j = 0; j < adverts.length; j++) {
      var ad1 = adverts[j];
      var pin = renderPin(ad1);
      fragment.appendChild(pin);
    }

    pinList.appendChild(fragment);
  }
})();




