$(document).ready(function() {


 $('form').submit(function (evt) {
      evt.preventDefault();
      var $searchTerm = $('#search'); 
      var $submitButton = $('#submit');
      
      $searchTerm.prop("disabled", true);
      $submitButton.attr("disabled", true).val("searching....");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $searchTerm.val();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $searchTerm.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Seacrh");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready