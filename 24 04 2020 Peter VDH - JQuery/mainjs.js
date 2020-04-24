$(document).ready(function () {
  //alert("help");

  $(".tickets").on("click", function () {
    var valueTicket = $("input:radio:checked").val();
    var prijsTickets = valueTicket * 11.5;

    $(".foodDrinks").on("click", function () {
      var valueFoodDrinks = $("input:checkbox:checked").val();

      $("#betalen").on("click", function () {
        $("#item").text(prijsTickets);
        $("#prijs").text(valueFoodDrinks);

        //alert("tickets" + prijsTickets);
        //alert("foodDrinks" + valueFoodDrinks);
      });
    });
  });

  //einde code
});
