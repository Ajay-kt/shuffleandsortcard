
var isSorted = true;
var arr = [1,2 ,3,4,5,6,7,8,9];
function sort() {
  if(isSorted) {
   return;
  }
  
  var cards = document.getElementsByClassName("column");
  
  for(var cardIndex = 0; cardIndex < cards.length; cardIndex++)
  {
  	cards[cardIndex].innerHTML = '<div class="card-left-' + (cardIndex + 1) + '"></div><div class="card card-'+ (cardIndex + 1) + '"><h3>' + (cardIndex + 1) + '</h3></div>';
  }
}

function shuffleNumbers(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function shuffle() {
  shuffleNumbers(arr);
  var cards = document.getElementsByClassName("column");
  var cardIndex = 0;
  for(var index = 0; index < arr.length; index++)
  {
  	cards[cardIndex++].innerHTML = '<div class="card-left-' + arr[index] + '"></div><div class="card card-'+ arr[index] + '"><h3>' + arr[index] + '</h3></div>';
  }
  isSorted = false;
}

