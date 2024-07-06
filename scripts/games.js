
var currentGame;

function movePreview(event){
  //$('#preview').attr("src",myGame.screenshot);

  var width = window.innerWidth;

  var windowWidth = $('#infowindow').width;
  console.log(width);
  

  if (event.clientX + windowWidth > width){
    $('#infoWindow').css("left",event.clientY-windowWidth);
  }

  $('#infoWindow').css("top",event.clientY-50);
  $('#infoWindow').css("left",event.clientX);
}

function closePreview(){
  $('#preview').attr("src","");
}

//opens information window
function openWindow(myGame){
  console.log(myGame.title);
  showThing('#infoWindow');
  $('#title').text(myGame.title+"("+myGame.year+")-"+myGame.genre);
  $('#icon').attr("src", myGame.icon);
  $('#screenshot').attr("src", myGame.screenshot);
  $('#infoWindow').css("background-color",myGame.bgColor);
  $('#description').text(myGame.description);
  $('#tools').text("made with: "+ myGame.tool);
  currentGame = myGame;
  console.log(currentGame.tags);
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
