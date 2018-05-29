$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-showing").toggle();
    $(".initially-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $(".initially-showing2").toggle();
    $(".initially-hidden2").toggle();
  });
  $(".clickable3").click(function() {
    $(".initially-hidden3").slideToggle();
  });


  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
