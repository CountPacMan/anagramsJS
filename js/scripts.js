function findAnagrams(input_word, input_array) {
  var input_word_sorted = input_word.toLowerCase().split("");
  var matches = [];
  input_array.forEach(function(word) {
    var word_sorted = word.toLowerCase().split("");

    var overlap_array = input_word_sorted.filter(function(element) {
      return word_sorted.indexOf(element) != -1;
    });

    if (overlap_array.length === input_word.length) {
      matches.push(word);
    }
  });

  return matches;
}


jQuery(document).ready(function() {
  $("#word").focus();
  $("#anagram").submit(function(event) {

    var word = $("#word").val();
    var list_of_words = $("#array").val().split(" ");

    var matches = findAnagrams(word, list_of_words);

    if (matches.length === 0)
    {
      $("#nomatches").show()
      $("#result").hide();
    } else {
      $("#matches").text(matches.join(", "));
      $("#result").show();
      $("#nomatches").hide();
    }

    event.preventDefault();
  });
});
