var isBigEnough = function (word) {
  return word.length >= 3;
}

var newPhrase = function (phrase) {
  var words = phrase.split(" ");
  var newWords = words.filter(isBigEnough);
  newWords.reverse();
  return newWords.join(" ");
}

$(document).ready(function () {
  $("#input form").submit(function (event) {
    event.preventDefault();
    var inputPhrase = $("#phrase").val();
    $("#new-phrase").text(newPhrase(inputPhrase));
    $(".output").show();
  })
})