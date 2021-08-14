// This counts the amount of characters being used and inputs the amount into the counter, to show the user how many characters they have remaining. 
// If the user is within the limit of characters, the font colour is black, and if they go over the limit it turns red.
 
$(document).ready(function (event) {
  $("#tweet-text").on("input", function (event) {
    const maxChars = 140;
    const charCount = maxChars - $(this).val().length;
    const counter = $(this).siblings("#submit-tweet").children(".counter");
    counter.html(charCount);
    if (charCount > 0) {
      counter.css("color", "black");
    } else {
      counter.css("color", "red");
    }
  });
});
