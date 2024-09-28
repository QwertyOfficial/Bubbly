const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Toggle card background color in dark mode
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.toggle('dark-mode');
    });
});
