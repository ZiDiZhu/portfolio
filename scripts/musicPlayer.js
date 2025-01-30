
var currentAlbumName = null;

function loadAlbum(albumName, albumCover, songs, item) {

    if(currentAlbumName!=albumName){
        // Show player
        document.getElementById('player').style.display = 'block';
        // Update album info
        document.getElementById('albumTitle').innerText = albumName;
        document.getElementById('albumTitle').style.color = getRandomColor();
        // Load songs
        const songsContainer = document.getElementById('songs');
        songsContainer.innerHTML = ''; // Clear previous songs
        songs.forEach((song, index) => {
            const songDiv = document.createElement('div');
            songDiv.className = 'song';
            songDiv.onclick = () => loadSong(song,songDiv);
            songDiv.innerHTML = `<div class="song-name">${song.name}</div>`;
            songsContainer.appendChild(songDiv);
            songDiv.style.color= getRandomColor();
        });
        currentAlbumName = albumName;
        var albums = document.getElementsByClassName('album');
        for(var i=0; i<albums.length; i++){
            albums[i].style.border = 'none';
        }
        item.style.border = '5px dotted';
    }else {
        clearSongs();
        currentAlbumName = null;
    }
}

function clearSongs(){
    document.getElementById('player').style.display = 'none';
    document.getElementById('songs').innerHTML = '';
    var albums = document.getElementsByClassName('album');
    for(var i=0; i<albums.length; i++){
        albums[i].style.border = 'none';
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function loadSong(song,item) {
    // Update audio source
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    audioSource.src = song.src;
    audioPlayer.load(); // Reload the audio element
    audioPlayer.play();
    document.getElementById("song-title").innerText= currentAlbumName+" - "+ song.name;
    document.getElementById("song-title").style.color=item.style.color;
    // Fetch and display lyrics from the txt file
    const lyricsDiv = document.getElementById('lyrics');
    if(song.lyricsFile){
        fetch(song.lyricsFile)
            .then(response => response.text())
            .then(text => {
                lyricsDiv.innerText = text;
            })
            .catch(error => {
                lyricsDiv.innerText = "Lyrics not available.";
            });
    }

}