
var currentGame;

function openWindow(myGame){
  console.log(myGame.title);
  showThing('#infoWindow');
  $('#title').text(myGame.title);
  $('#year').text(myGame.year);
  $('#genre').text(myGame.genre);
  $('#infoWindow').css("background-color",myGame.bgColor);
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
