// Toggle Description
function toggleDescription(problemId) {
    const description = document.getElementById(`description-${problemId}`);
    const toggleBtn = document.getElementById(`toggle-btn-${problemId}`);
    if (description.style.display === "none" || !description.style.display) {
        description.style.display = "block";
        toggleBtn.textContent = "Read Less";
    } else {
        description.style.display = "none";
        toggleBtn.textContent = "Read More";
    }
}

// Toggle Solutions
function toggleSolutions(problemId) {
    const solutions = document.getElementById(`solutions-${problemId}`);
    solutions.style.display = solutions.style.display === "none" ? "block" : "none";
}

// Show Popup
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Close Popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Toggle Dropdown
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}