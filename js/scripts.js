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

var whereFirstVowel = function(input) {
  //loop over vowels aray for comparison
  for (var index = 0; index < vowels.length; index = index + 1) {
    //if input array includes the vowel at current iteration, return the index of that vowel
    if (input.includes(vowels[index])) {
      return input.indexOf(vowels[index]);
    }
  }
  return false;
};

var moveLeadingConsonants = function (input) {
  var index = whereFirstVowel(input);
  var toMove = input.splice(0, index);
  input.push(toMove);
  input.push('a', 'y');
  console.log(input);
  return input;
};

var pigLatin = function(input) {
  input = cleanText(input);
  input = convertStringToArray(input);

  if (isFirstVowel(input) && input.length === 1) {
    //add ay to the end of the word
    input.push('a', 'y');
  }
  if (isFirstVowel(input) && input.length >= 2) {
    //add way to the end of the word
    input.push('w', 'a', 'y');
  }



  input = convertArrayToString(input);
  return moveLeadingConsonants(input);
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
