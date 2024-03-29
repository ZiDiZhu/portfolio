
var currentGame;

function showPreview(myGame,event){
  currentGame=myGame;
  console.log(myGame.title);
  $('#preview').attr("src",myGame.screenshot);

  $('#preview').css("top",event.clientY+5);
  //$('#preview').css("left",event.clientX+5);

}

function closePreview(){
  $('#preview').attr("src","");
}

//opens information window
function openWindow(myGame){
  console.log(myGame.title);
  showThing('#infoWindow');
  $('#title').text(myGame.title);
  $('#icon').attr("src", myGame.icon);
  $('#screenshot').attr("src", myGame.screenshot);
  $('#year').text(myGame.year);
  $('#genre').text(myGame.genre);
  $('#infoWindow').css("background-color",myGame.bgColor);
  $('#description').text(myGame.description);
  $('#tools').text("made with: "+ myGame.tool);
  $('#controls').text("controls: "+ myGame.controls);
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
