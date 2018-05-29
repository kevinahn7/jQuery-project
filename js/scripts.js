$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-showing").toggle();
    $(".initially-hidden").toggle();
  });
});
$(document).ready(function() {
  $(".clickable2").click(function() {
    $(".initially-showing2").toggle();
    $(".initially-hidden2").toggle();
  });
});
$(document).ready(function() {
  $(".clickable3").click(function() {
    $(".initially-hidden3").slideToggle();
  });
});
