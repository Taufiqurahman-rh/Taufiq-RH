// ============================
//  Smooth Scroll Animation
// ============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// ============================
//  Navbar shadow ketika scroll
// ============================
window.addEventListener('scroll', () => {
    const header = document.querySelector(".hero");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ============================
//  Console message
// ============================
console.log("Portfolio Taufiqurahman Loaded Successfully!");
