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
  $("#title-case").submit(function(event) {




    event.preventDefault();
  });
});
