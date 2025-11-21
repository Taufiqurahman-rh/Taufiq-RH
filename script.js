function openSkill(id) {
    const allDetails = document.querySelectorAll('.skill-detail');

    allDetails.forEach(detail => {
        detail.style.display = "none";
    });
    
    const selected = document.getElementById(id);
    if (selected) {
        selected.style.display = "block";
        window.location.href = "#detail"; // auto scroll
    }
}

