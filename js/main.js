var elinsumma = document.querySelector('.insumma');
var elvaluta = document.querySelector('.valuta');
var eloutput = document.querySelector('.output');
var elform = document.querySelector('form');

elform.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var most = Number(elinsumma.value * elvaluta.value) / 100;
  eloutput.textContent = most.toFixed(2);
})
