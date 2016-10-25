var playlist = new Playlist();

var settingSun = new Song("Setting Sun", "Chemical Brothers", "3:50");
var defiance = new Song("Dediance", "VNV Nation", "4:45");

var madmax = new Movie("Mad Max", 1984, "1:33:00");

playlist.add(settingSun);
playlist.add(defiance);
playlist.add(madmax);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function (){
	playlist.play();
	playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function (){
	playlist.next();
	playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function (){
	playlist.stop();
	playlist.renderInElement(playlistElement);
}