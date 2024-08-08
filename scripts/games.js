
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
  $('#title').text(myGame.title+"("+myGame.year+")-"+myGame.genre);
  $('#icon').attr("src", myGame.icon);
  $('#screenshot').attr("src", myGame.screenshot);
  //$('#infoWindow').css("background-color",myGame.bgColor);
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
