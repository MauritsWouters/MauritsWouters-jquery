$("li")
  .on("click", function () {
    $(this).css("text-decoration", "line-through");
  })
  .on("dblclick", function () {
    $(this).fadeOut("slow");
  });
