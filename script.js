// Efek animasi smooth saat klik tombol "Lihat Project"
document.querySelector(".btn").addEventListener("click", function () {
    window.scrollTo({
        top: document.querySelector("#projects").offsetTop - 20,
        behavior: "smooth"
    });
});

// Efek fade-in sederhana untuk semua section
const sections = document.querySelectorAll(".section");

function showSections() {
    sections.forEach(sec => {
        const secPos = sec.getBoundingClientRect().top;
        if (secPos < window.innerHeight - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", showSections);

// Set initial hidden style
sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "0.8s";
});
