'use strict';

(function () {
  var main = document.querySelector('main');
  var map = document.querySelector('.map');
  var mapPin = document.querySelector('.map__pin--main');
  var form = document.querySelector('.ad-form');

  function onClickSuccessMsg() {
    var successMsg = main.querySelector('.success');
    if (successMsg) {
      successMsg.remove();
    }
    document.removeEventListener('keydown', onKeyDownEsc);
    document.removeEventListener('click', onClickSuccessMsg);
  }
  function onKeyDownEsc(evt) {
    if (evt.key === 'Escape') {
      onClickSuccessMsg();
    }
  }

  function showSuccessMessage() {
    var template = document.querySelector('#success').content;
    var successMsg = template.cloneNode(true);
    main.appendChild(successMsg);
    document.addEventListener('click', onClickSuccessMsg);
    document.addEventListener('keydown', onKeyDownEsc);
  }

  function showErrorMessage() {
    var template = document.querySelector('#error').content;
    var errorMsg = template.cloneNode(true);
    main.appendChild(errorMsg);

    var errorButton = main.querySelector('.error__button');
    errorButton.addEventListener('click', onClickErrorButton);
    document.addEventListener('keydown', onKeyDownEscErrorMsg);
  }

  function onClickErrorButton() {
    var errorMsg = main.querySelector('.error');
    if (errorMsg) {
      errorMsg.remove();
    }
    document.removeEventListener('keydown', onKeyDownEsc);
    document.removeEventListener('click', onClickErrorButton);
  }
  function onKeyDownEscErrorMsg(evt) {
    if (evt.key === 'Escape') {
      onClickErrorButton();
    }
  }

  function onSuccess() {

    form.reset();
    map.classList.add('map--faded');
    form.classList.add('ad-form--disabled');

    showSuccessMessage();
    window.map.disactivatePage();
    window.pin.removeAllPins();

    mapPin.style.top = window.map.mapPinInitCoords.y + 'px';
    mapPin.style.left = window.map.mapPinInitCoords.x + 'px';

    window.map.setAddress();

    var cardOpened = map.querySelector('.map__card');
    if (cardOpened) {
      window.card.removeCard();
    }
  }

  function onError() {
    showErrorMessage();
  }

  window.dialog = {
    onSuccess: onSuccess,
    onError: onError
  };
})();
