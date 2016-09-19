var color =$(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When Color is clicked

$(".controls").on("click", "li", (function() {
	//deselect current color
	$(this).siblings().removeClass("selected");
	
	//select clicked color
	$(this).addClass("selected");
	
	//Store Color
	color =$(this).css("background-color");
	
}));


//when new color clicked, show color select

$("#revealColorSelect").click(function() {
	changeColor();
	$("#colorSelect").toggle();
		//hide select when added
});

	
//Update color span when sliders moved
function changeColor() {
	var r = $("#red").val();
	var b = $("#blue").val();
	var g = $("#green").val();
	$("#newColor").css("background-color", "rgb("+ r +", "+ g +", "+ b +")");
	
}

$("input[type=range]").change(changeColor);
 
//Append color to controls, select new color
$("#addNewColor").click(function() {
	var $newColor =	$("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	$newColor.click();
});
//on Mouse events, draw lines with selected color

$canvas.mousedown(function(e) {
	lastEvent =  e;
	mouseDown = true;
	
}).mousemove(function(e) {
	if(mouseDown) { context.beginPath();
	context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
	context.lineTo(e.offsetX, e.offsetY);
	context.strokeStyle = color;
	context.stroke();
	lastEvent = e;}
}).mouseup(function() {
	mouseDown = false;
}).mouseleave(function() {
	$canvas.mouseup();
});


