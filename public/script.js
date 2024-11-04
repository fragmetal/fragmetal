// Function to update the iframe with the entered URL using corsproxy.io
function openWebsite(event) {
    event.preventDefault(); // Prevent form submission
    const urlInput = document.getElementById('urlInput');
    const webFrame = document.getElementById('webFrame');
    if (urlInput && webFrame) {
        let url = urlInput.value;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'http://' + url; // Add http if not present
        }
        // Use corsproxy.io to proxy the request
        webFrame.src = `https://corsproxy.io/?${encodeURIComponent(url)}`;
    }
}

// Add an event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const urlForm = document.getElementById('urlForm');
    if (urlForm) {
        urlForm.addEventListener('submit', openWebsite);
    }
});
