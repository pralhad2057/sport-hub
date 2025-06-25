
// Simple script for mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Add scroll animations to cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, { threshold: 0.1 });

// A simple fade-in animation using Tailwind (you would define this in your tailwind.config.js)
// For this demo, we'll just add a class and you can imagine the animation.
// Or we can add it via a style tag for demonstration
const style = document.createElement('style');
style.innerHTML = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.5s ease-out forwards;
            }
        `;
document.head.appendChild(style);

const cards = document.querySelectorAll('.card-hover');
cards.forEach(card => {
    card.style.opacity = '0'; // Start transparent
    observer.observe(card);
});
