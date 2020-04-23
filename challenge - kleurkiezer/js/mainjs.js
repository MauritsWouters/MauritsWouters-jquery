$(document).ready(function () {
  console.log("ready!");

  $("button").on("click", function () {
    //alert("click");

    var radioValue = $("#achtergrond:checked").val();
    if (radioValue) {
      $(".achtergrond_tekst").css("background-color", "blue");
    }

    var radioValue = $("#voorgrond:checked").val();
    if (radioValue) {
      $(".achtergrond_tekst").css("color", "red");
    }
  });
});
