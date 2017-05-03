//Business Logic
//identify the vowels
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

//Removes punctuation and numbers from a string, then converts it to lower case
var cleanText = function(input) {
  return input.replace(/[.,\/#!$%@?'|"+\^&\*;:{}=\-_`~()0-9]/g, "").toLowerCase();
};

//turns a string into an array - takes in string
var convertStringToArray = function(input) {
  return input.split("");
};

//turn an array into a string - takes in array
var convertArrayToString = function(input) {
  return input.join("");
};

//identify first vowel in a word - takes in array
var isFirstVowel = function (input) {
  //check and see if the first letter is a vowel
  if (vowels.includes(input[0])) {
    return input[0];
  } else {
    return false;
  }
};

var pigLatin = function(input) {
  input = cleanText(input);
  input = convertStringToArray(input);

  return isFirstVowel(input);
}

// User Interface Logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var input = $('#input').val();
    var result = pigLatin(input);

    $('#result').text(result);
  });
});
