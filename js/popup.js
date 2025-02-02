var reservationButton = document.querySelector('.button');
var reservationForm = document.querySelector('.modal');
var close = document.querySelector('.submit-reservation-form');

reservationButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  reservationForm.classList.toggle('modal-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  reservationForm.classList.toggle('modal-show');
});



function minus1(){
  document.getElementById('amount_of_adults').value--;
  if (document.getElementById('amount_of_adults').value < 0){
    document.getElementById('amount_of_adults').value = 0;
  }
}

function plus1(){
  document.getElementById('amount_of_adults').value++;

}


function minus2(){
  document.getElementById('children_of_amount').value--;
  if (document.getElementById('children_of_amount').value < 0){
    document.getElementById('children_of_amount').value = 0;
  }
}

function plus2(){
  document.getElementById('children_of_amount').value++;
}
