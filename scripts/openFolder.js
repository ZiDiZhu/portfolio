let currentlyOpenedFolder = null;
function changeIframeContent(page,clickedElement) {
    document.getElementById('contentIframe').src = page;

    // Close the previously opened folder, if any
    if (currentlyOpenedFolder) {
    currentlyOpenedFolder.querySelector('img:nth-child(1)').style.display = 'inline-block';
    currentlyOpenedFolder.querySelector('img:nth-child(2)').style.display = 'none';
    }

    // Open the clicked folder
    const firstImg = clickedElement.querySelector('img:nth-child(1)');
    const secondImg = clickedElement.querySelector('img:nth-child(2)');
    firstImg.style.display = 'none';
    secondImg.style.display = 'inline-block';

    // Set the clicked folder as the currently opened one
    currentlyOpenedFolder = clickedElement;
}