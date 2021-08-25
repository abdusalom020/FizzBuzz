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