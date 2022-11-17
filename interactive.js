var numberToWord = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five'
};
var selectedRating = '0';
var allRatings = document.querySelectorAll('.rating-number');
for (var i = 0; i < allRatings.length; i++) {
  allRatings[i].addEventListener('click', function(event) {
    removeSelectedStarClass();
    selectedRating = event.target.innerText;
    addSelectedStarClass();
  });
}

document.querySelector('#submit').addEventListener('click', function(event) {
  let scoreDesc = 'You selected '+selectedRating+' out of 5';
    document.querySelector('.score').innerHTML= scoreDesc;

  document.querySelector('.card-content').classList.add('rotate-on-submit');
});


function addSelectedStarClass() {
  for (var i = 1; i <= Object.keys(numberToWord).length; i++) {
    if (selectedRating >= i) {
      var className = '.' + numberToWord[i];
      document.querySelector(className).classList.add('selected-rating-background-color');
      let childDiv = document.querySelector(className);
      childDiv.querySelectorAll(":scope > .rating-number")[0].classList.add('selected-rating-color');
    }
  }
}

function removeSelectedStarClass() {
  for (var i = 1; i <= Object.keys(numberToWord).length; i++) {
    var className = '.' + numberToWord[i];
    if (document.querySelector(className).classList.contains('selected-rating-background-color')) {
      document.querySelector(className).classList.remove('selected-rating-background-color');
      let childDiv = document.querySelector(className);
      childDiv.querySelectorAll(":scope > .rating-number")[0].classList.remove('selected-rating-color');



    }
  }
}
