//Helps test to see if jquery is working so you don't manipulate the DOM by accident
$(document).ready(function(event) {
$("#tweet-text").on("input", function(event) {
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