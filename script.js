function openSkill(id) {
    const allDetails = document.querySelectorAll('.skill-detail');

    // Sembunyikan semua
    allDetails.forEach(detail => {
        detail.style.display = "none";
    });

    // Tampilkan yang dipilih
    const selected = document.getElementById(id);
    if (selected) {
        selected.style.display = "block";
        window.location.href = "#detail"; // auto scroll
    }
}
