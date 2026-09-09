// Update all clocks
function updateClocks() {
    const now = new Date();

    // Update local time
    const localHours = String(now.getHours()).padStart(2, '0');
    const localMinutes = String(now.getMinutes()).padStart(2, '0');
    const localSeconds = String(now.getSeconds()).padStart(2, '0');
    
    document.querySelector('.local-display').textContent = 
        `${localHours}:${localMinutes}:${localSeconds}`;
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.querySelector('.local-date').textContent = 
        now.toLocaleDateString('en-US', options);

    // Update timezone clocks
    const clockCards = document.querySelectorAll('.clock-card');
    clockCards.forEach(card => {
        const timezone = card.getAttribute('data-timezone');
        const timeDisplay = card.querySelector('.time');
        
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                timeZone: timezone
            });
            
            const time = formatter.format(now);
            timeDisplay.textContent = time;
        } catch (e) {
            timeDisplay.textContent = 'Error';
        }
    });
}

// Update every second
setInterval(updateClocks, 1000);

// Initial update
updateClock();