// Sonni top
 
var elNumberRendomForm = document.querySelector('.number-rendom-form');
var elUserCreateInput = document.querySelector('.user-create-input');
var elquantitiyAnsver = document.querySelector('.quantitiy-ansver');
var elCheckedButton = document.querySelector('.checked-button');

var Xsoni =  Math.floor(Math.random() * (100 - 1 + 1) + 1);
var points = 0;

elNumberRendomForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  points++;
  if (elUserCreateInput.value == Xsoni) {
    elquantitiyAnsver.textContent = (points) +' ta urinishda Toptiz Barakallo';
    elUserCreateInput.value= ' ';
  } else if (points == 6){
    elquantitiyAnsver.textContent = '6 ta urinishda ham topa olmadingiz';
    elUserCreateInput.disabled = true;
    elCheckedButton.textContent = 'Reset';
    elCheckedButton.addEventListener('click', function() {
      window.location.reload();
    })
  } else if (Xsoni > Number(elUserCreateInput.value)) {
    elquantitiyAnsver.textContent = 'X soni kattaroq';
    elUserCreateInput.value = '';
  } else if (Xsoni < Number(elUserCreateInput.value)){
    elquantitiyAnsver.textContent = 'X soni kichikroq';
    elUserCreateInput.value = '';
  }
})