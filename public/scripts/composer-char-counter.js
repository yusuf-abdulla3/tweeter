//Helps test to see if jquery is working so you don't manipulate the DOM by accident
$(document).ready(function() {
  console.log("testing testing")
})

$(".new-tweet #tweet-text").on("input", function(event) {
  const charCount = 140 - $(this).val().length;
  if (charCount < 0) {
    $(this).
  }
});