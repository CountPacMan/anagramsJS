function findAnagrams(input_word, input_array) {
  var input_word_sorted = input_word.split("").sort().join("").toLowerCase();
  var matches = [];
  input_array.forEach(function(word) {
    if (word.split("").sort().join("").toLowerCase() === input_word_sorted) {
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
