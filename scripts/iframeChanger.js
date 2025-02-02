let currentlyOpenedFolder = null;

function changeIframeContent(page, clickedElement) {
    document.getElementById('contentIframe').src = page;

    if (!clickedElement) return;

    // Close previously opened folder
    if (currentlyOpenedFolder) {
        currentlyOpenedFolder.classList.remove('open');
        if(clickedElement===currentlyOpenedFolder){
            currentlyOpenedFolder = null;
            changeIframeContent('main.html',null);
            return;
        }
    }

    // Open the clicked folder
    if (clickedElement.classList.contains('folder')) {
        clickedElement.classList.add('open');
        currentlyOpenedFolder = clickedElement;
    }
}
