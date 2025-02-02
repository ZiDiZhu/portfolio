let currentlyOpenedFolder = null;

function changeIframeContent(page, clickedElement) {
    document.getElementById('contentIframe').src = page;

    if (!clickedElement) return;

    // Close previously opened folder
    if (currentlyOpenedFolder) {
        currentlyOpenedFolder.classList.remove('open');
    }

    // Open the clicked folder
    if (clickedElement.classList.contains('folder')) {
        clickedElement.classList.add('open');
        currentlyOpenedFolder = clickedElement;
    }
}
