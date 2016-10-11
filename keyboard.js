
function listenKeyboard(_event) {
  var evento = _event || window.event;
  var letra = evento.charCode || evento.keyCode;
  letra = String.fromCharCode(letra);
  console.log(letra);
}

window.onload = function() {
  document.onkeypress = listenKeyboard;
};
