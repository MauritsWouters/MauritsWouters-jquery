$(document).ready(function () {
  // Your Code here

  $("#btn-hello").on("click", function () {
    alert("Hello");
  });

  /*$("input:submit").on("click", function () {
    if ($("input:submit").val(" ")) {
      alert("Empty");
    }
  });*/

  $("input:submit").click(function () {
    if ($("#firstname").val() == "") {
      $("#firstname").css("border", "5px solid red");
      alert("niet submitten");
    } else if ($("#lastname").val() == "") {
      $("#lastname").css("border", "5px solid red");
      alert("niet submitten");
    } else {
      alert("bedankt voor het invullen");
    }
  });

  /*$( "#target" ).click(function() {
        $('#editor-area').val('');
      });*/
}); // End of document.ready functie.
