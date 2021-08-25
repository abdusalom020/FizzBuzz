var elinsumma = document.querySelector('.insumma');
var elvaluta = document.querySelector('.valuta');
var eloutput = document.querySelector('.output');
var elform = document.querySelector('form');

elform.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var most = Number(elinsumma.value * elvaluta.value) / 100;
  eloutput.textContent = most.toFixed(2);
})


// FizzBuzz
var elFizzBuzzForm = document.querySelector('.fizzbuzz-form');
var elUserCreateNumber = document.querySelector('.user-crate-number');
var elHowNumberUser = document.querySelector('.how-number-usernumber');

elFizzBuzzForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (Number(elUserCreateNumber.value > 0) && ((Number(elUserCreateNumber.value) % 3) === 0) && ((Number(elUserCreateNumber.value) % 5) === 0)) {
    elHowNumberUser.textContent = 'FizzBuzz';
  } else if (Number(elUserCreateNumber.value > 0) && (elUserCreateNumber.value % 5) == 0) {
    elHowNumberUser.textContent = 'Buzz';
  } else if (Number(elUserCreateNumber.value > 0) && (elUserCreateNumber.value % 3) == 0) {
    elHowNumberUser.textContent = 'Fizz';
  } else {
    elHowNumberUser.textContent = elUserCreateNumber.value;
  }
})


// Sonno top
 
var elNumberRendomForm = document.querySelector('.number-rendom-form');
var elUserCreateInput = document.querySelector('.user-create-input');
var elquantitiyAnsver



number-rendom-form
user-create-input
quantitiy-ansver
checked-button