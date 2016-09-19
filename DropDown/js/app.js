//Problem: Menu does not fit in Mobile devices

//Hide Text links and Swap them with a Hamburger menu

// Create Select & Append to Menu

var $select = $("<select></select>");
$("#menu").append($select);

// Create options in Select

//cycle over menu Links
$("#menu a").each(function() {
  var $anchor = $(this);
  
  //create an option
  var $option = $("<option></option>");
  
  
  //deal with selected if current page
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  };
  
  //Add href value
  $option.val($anchor.attr("href"));
  
  //option text is the href
  $option.text($anchor.text());

  //append option
  $select.append($option);
  

});

$select.change(function(){
  window.location = $select.val();
  
});

