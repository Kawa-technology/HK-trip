// Toggle transport options visibility
function showTransport(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
    }
}

// Smooth scroll to sections (if you add navigation later)
function scrollToDay(dayId) {
    const element = document.getElementById(dayId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add animation when elements come into view
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all activity cards
    const cards = document.querySelectorAll('.activity-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Add current time indicator
    updateCurrentActivity();
    setInterval(updateCurrentActivity, 60000); // Update every minute
});

// Highlight current activity based on time (for the actual trip dates)
function updateCurrentActivity() {
    const now = new Date();
    const tripStart = new Date('2026-12-05');
    const tripEnd = new Date('2026-12-07');
    
    // Only highlight if within trip dates
    if (now < tripStart || now > tripEnd) {
        return;
    }

    const currentTime = now.getHours() * 100 + now.getMinutes();
    const cards = document.querySelectorAll('.activity-card');
    
    cards.forEach(card => {
        const timeText = card.querySelector('.time').textContent;
        const [hours, minutes] = timeText.split(':').map(Number);
        const cardTime = hours * 100 + minutes;
        
        // Remove any existing highlight
        card.classList.remove('current-activity');
        
        // Check if this is the current activity (within 1 hour window)
        if (Math.abs(currentTime - cardTime) < 100) {
            card.classList.add('current-activity');
            card.style.background = '#fff8e1';
        }
    });
}

// Add print functionality
function printItinerary() {
    window.print();
}

// Export to calendar (basic ICS format)
function exportToCalendar() {
    // This would create an ICS file for calendar import
    console.log('Calendar export feature - to be implemented');
    alert('Calendar export coming soon!');
}

// Quick reference for HK transport
const transportInfo = {
    octopus: 'Get an Octopus Card for seamless travel on MTR, buses, trams, and ferries. Available at airport and MTR stations.',
    mtr: 'MTR runs 6am-1am. Download the MTR Mobile app for real-time info.',
    taxi: 'Taxis: Red (HK Island & Kowloon), Green (New Territories), Blue (Lantau). Always use meter.',
    ferry: 'Star Ferry is iconic and cheap. Runs every 6-12 minutes.',
    tips: [
        'Stand on the right on escalators',
        'No eating/drinking on MTR',
        'Keep Octopus card topped up',
        'Download Citymapper app for navigation'
    ]
};

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 1, 2, 3 to jump to days
    if (e.key >= '1' && e.key <= '3') {
        scrollToDay('day' + e.key);
    }
    
    // Press P to print
    if (e.key === 'p' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        printItinerary();
    }
});

// Add service worker for offline access (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you create a service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}
