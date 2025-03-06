// Toggle menu hamburger
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    function toggleMenu() {
        menu.classList.toggle("active");
    }

    // Event untuk klik di semua perangkat
    hamburger.addEventListener("click", toggleMenu);
    
    // Tambahkan event khusus untuk iOS (Safari)
    hamburger.addEventListener("touchstart", function (event) {
        event.preventDefault(); // Mencegah glitch di Safari
        toggleMenu();
    });
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animasi fade-in saat scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});
