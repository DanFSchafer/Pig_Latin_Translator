// business logic
var vowels = ["a", "e", "i", "o", "u"];

var firstVowel;

// user-interface logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var word = $("input#english").val();

    var indexOfVowels = vowels.map(function(vowel) {
      return word.indexOf(vowel)
      });

    indexOfVowels.forEach(function(iov) {
      if(iov === 0) {
        return firstVowel === true;
      }
    });

    if(firstVowel === true) {
      var finalWord = word.concat("ay");
    }

    $("#result").show();
    $(".translation").text(finalWord);

  });
});
