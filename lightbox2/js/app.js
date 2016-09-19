//create lightbox
var $overlay =  $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


//append overlay and caption
$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);



// capture click on image link

$("#imageGallery a").click(function(event) {
   event.preventDefault();                 
   var imageLocation= $(this).attr("href");

  //get image location
  $image.attr("src", imageLocation);
  
   //show overlay  
   $overlay.show();

   // add alt caption 
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});


//hide overlay onclick
$overlay.click(function(){
  $overlay.hide();
});