$(document).ready(function () {
  $("input").keyup(function () {
    $("input").css("background-color", "pink");
  });

  $(".button").on("click", function () {
    var inputValue = $("#inputtext").val().length;
    alert(inputValue);
  });

  if (inputValue > 3) {
  } else {
    // $(".button").unbind("click");
    $(".input").on("unfocus").text("te veel tekens");
  }
});
