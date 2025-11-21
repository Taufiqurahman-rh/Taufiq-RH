// Efek glow saat hover pada nama
const name = document.querySelector('.name');

name.addEventListener('mouseover', () => {
    name.style.textShadow = "0 0 25px #00eaff";
});

name.addEventListener('mouseout', () => {
    name.style.textShadow = "none";
});
