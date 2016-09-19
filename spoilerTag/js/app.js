//hide spoilers 
$(".spoiler span").hide();

//reveal onclick
$(".spoiler").append("<button>Reveal Spoiler!</button>");

$("button").click(function() {
  $(this).prev().show();
  $(this).remove();
});