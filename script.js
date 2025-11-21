document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("muncul");
        }
    });
});

document.querySelectorAll(".skill-card").forEach(el => observer.observe(el));
document.querySelectorAll(".hero, .contact").forEach(el => observer.observe(el));
