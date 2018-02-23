function isExplorer() {
  return  navigator.userAgent.toLowerCase().indexOf('msie') != -1 ;
}


function showMouseData(e) {
  var $event = e || window.event;
  var ie = isExplorer();
  var $scr = document.getElementById('screen'),
      $page = document.getElementById('page');
  // screen
  $scr.innerText = "[ " + $event.screenX + ", " + $event.screenY + "]";
  // page
  if(ie) {
    $page.innerText = "[ " + $event.clientX + document.body.scrollLeft +
                     ", " + $event.clientY + document.body.scrollTop + "]";
  }
  else
    $page.innerText = "[ " + $event.pageX + ", " + $event.pageY + "]";
}


function showKeyboardData(e) {
  var char;
  var $event = e || window.event;
  var code = $event.charCode || $event.keyCode;
  var $character = document.getElementById('character'),
      $code = document.getElementById('code');

  switch(code) {
    case 13:
      char = 'enter';
      break;
    default:
      char = String.fromCharCode(code);
  }

  $character.innerText = char;
  $code.innerText = code;
}

window.onload = function() {
  document.addEventListener('mousemove', showMouseData);
  document.addEventListener('keypress', showKeyboardData);
}
