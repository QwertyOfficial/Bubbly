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

toggleButton.addEventListener('click', toggleDarkMode);
