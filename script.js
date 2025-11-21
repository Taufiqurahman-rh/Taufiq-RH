const words = [
    "Cybersecurity Enthusiast",
    "Ethical Hacker Beginner",
    "Networking",
    "CTF Player"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    const typing = document.getElementById("typing");

    if (!isDeleting) {
        current = words[i].slice(0, j++);
    } else {
        current = words[i].slice(0, j--);
    }

    typing.textContent = current;

    let speed = isDeleting ? 60 : 90;

    if (j === words[i].length + 1) {
        isDeleting = true;
        speed = 1200;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, speed);
}

type();
