//Helps test to see if jquery is working so you don't manipulate the DOM by accident
// $(document).ready(function() {
//   console.log("testing testing")
// })

$(".new-tweet textarea").on("input", "input:text", function(event) {
  console.log(this.event);
});