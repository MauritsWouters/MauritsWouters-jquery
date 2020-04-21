$("input").on("click", function () {
  var inputValue = $("input").val();
  alert(inputValue);
  $("#result").text("Waarde ingegeven is: " + inputValue);
});
