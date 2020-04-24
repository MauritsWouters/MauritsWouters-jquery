$(document).ready(function () {
  //alert("help");

  $(".tickets").on("click", function () {
    var valueTicket = $("input:radio:checked").val();
    var prijsTickets = valueTicket * 11.5;

    $('input[name="foodDrinks_name"]').on("click", function () {
      let foodDrinks_name = [];
      $.each($('input[name="foodDrinks_name"]:checked'), function () {
        foodDrinks_name.push($(this).val());

        selectedExtras = foodDrinks_name;

        //$("input:checkbox:checked").val();

        $("#betalen").on("click", function () {
          var prijs = 0;
          prijs = prijs + prijsTickets;

          selectedExtras.forEach(function (foodDrinks_name, index) {
            if (foodDrinks_name == "#popcorn") {
              prijs = prijs + 5;
            } else if (foodDrinks_name == "#cola") {
              prijs = prijs + 2.5;
            }
          });

          var totaal = parseFloat(prijsTickets) + parseFloat(foodDrinks_name);
          $("#prijsTickets").text("Tickets: " + prijsTickets + " euro");
          $("#prijsFoodDrinks").text(
            "Food & Drinks: " + foodDrinks_name + " euro"
          );
          $("#prijsTotaal").text("Food & Drinks: " + totaal + " euro");

          //alert("tickets" + prijsTickets);
          //alert("foodDrinks" + valueFoodDrinks);
        });
      });
    });
  });

  //einde code
});
