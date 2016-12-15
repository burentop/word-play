var newPhrase = function (phrase) {
  var words = phrase.split(" ");
  var newWords = [];
  words.forEach(function (word) {
    if (word.length >= 3) {
      newWords.push(word);
    }
  });
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