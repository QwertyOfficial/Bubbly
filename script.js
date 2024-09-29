const toggleButton = document.getElementById('toggle-button');

function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    
    // Toggle card backgrounds based on the mode
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.toggle('light-mode');
    });
}

// Set the default mode to dark
document.body.classList.add('dark-mode');

// Function to detect mobile devices
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Move shapes based on device type
function adjustShapes() {
    if (isMobileDevice()) {
        const leftShape = document.querySelector('.left-shape');
        const rightShape = document.querySelector('.right-shape');
        leftShape.style.position = 'fixed';
        leftShape.style.top = '0';
        leftShape.style.left = '0';
        rightShape.style.position = 'fixed';
        rightShape.style.bottom = '0';
        rightShape.style.right = '0';
    }
}

// Add event listener to the toggle button
toggleButton.addEventListener('click', toggleDarkMode);

// Call function to adjust shapes on load
adjustShapes();
