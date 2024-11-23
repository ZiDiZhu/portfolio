
var currentGame;
var width = window.innerWidth;
var height = window.innerHeight;

function movePreview(event){
  //$('#preview').attr("src",myGame.screenshot);
  
  console.log(width);
  var windowWidth = $('#infowindow').width();

  if (event.clientX> width/2){
    $('#infoWindow').css("left",event.clientX-windowWidth-5);
  }else{
    $('#infoWindow').css("left",event.clientX+5);
  }
  if (event.clientY> height/2){
    $('#infoWindow').css("top",event.clientY-$('#infoWindow').height()-5);
  }else{
    $('#infoWindow').css("top",event.clientY+5);
  }
}

function closePreview(){
  $('#preview').attr("src","");
}

//opens information window
function openWindow(myGame){
  console.log(myGame.title);
  showThing('#infoWindow');
  $('#iframePlayer').css("display", "none");
  $('#screenshot').css("display", "block");
  $('#title').text(myGame.title+"("+myGame.year+")-"+myGame.genre);
  $('#icon').attr("src", myGame.icon);
  $('#screenshot').attr("src", myGame.screenshot);
  //$('#infoWindow').css("background-color",myGame.bgColor);
  $('#description').text(myGame.description);
  $('#tools').text("made with: "+ myGame.tool);
  if (myGame.videolink && myGame.videolink.trim() !== "") {
    $('#videobutton').css("display", "block"); // Show the video button
  } else {
    $('#videobutton').css("display", "none"); // Hide the video button
  }


  currentGame = myGame;
}


//currently only used for game info window, but probably reusable.
function showThing(thing){
  $(thing).css("display","inline-block");
}

function hideThing(thing){
  $(thing).css("display","none");
}

function openLink() {
  window.open(currentGame.link);
}

function openVideoLink(){
  //window.open(currentGame.videolink);
  $('#screenshot').css("display", "none");
  setYouTubeEmbed(currentGame.videolink);
  $('#iframePlayer').css("display", "block")[0].load();
}

function setYouTubeEmbed(videoLink) {
  const iframePlayer = document.getElementById('iframePlayer');

  if (videoLink && videoLink.trim() !== "") {
    const videoID = extractYouTubeID(videoLink);
    if (videoID) {
      iframePlayer.src = `https://www.youtube.com/embed/${videoID}`;
      iframePlayer.style.display = "block"; // Show the iframe
    } else {
      console.error("Invalid YouTube link.");
    }
  } else {
    console.error("No video link provided.");
    iframePlayer.style.display = "none"; // Hide the iframe
  }
}

// Helper function to extract the YouTube video ID
function extractYouTubeID(url) {
  const regExp = /(?:youtube\.com.*(?:\/|v=|vi=|u\/\w\/|embed\/)|youtu\.be\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
}