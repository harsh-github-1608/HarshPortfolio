// Particles.js Configuration
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js config loaded');
});

// Dynamic Role Update
document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Web Developer", "Python Developer", "Professional Coder"];
    let roleIndex = 0;
    const dynamicRoleElement = document.getElementById("dynamic-role");

    const updateRole = () => {
        dynamicRoleElement.style.opacity = 0; // Fade out

        setTimeout(() => {
            dynamicRoleElement.textContent = roles[roleIndex];
            dynamicRoleElement.style.opacity = 1; // Fade in
            roleIndex = (roleIndex + 1) % roles.length; // Loop through roles
        }, 500); // Fade transition duration
    };

    setInterval(updateRole, 2000); // Update every 2 seconds
});

// About Section Data and Dynamic Cards
document.addEventListener("DOMContentLoaded", () => {
    const aboutData = [
        {
            title: "Education",
            content: "Graduated from Durham College with a diploma in Computer Programming. Specialized in full-stack development.",
            icon: "fa-graduation-cap",
        },
        {
            title: "Experience",
            content: "Worked as a Software Developer Intern at COD SOFT and Python Developer at AARROWZ INC.",
            icon: "fa-briefcase",
        },
        {
            title: "Skills",
            content: "Proficient in HTML, CSS, JavaScript, React, Python, Flask, and Git.",
            icon: "fa-code",
        },
    ];

    const aboutCardsContainer = document.getElementById("about-cards");

    aboutData.forEach((item) => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";

        // Template for card content
        card.innerHTML = `
            <div class="card shadow-sm border-0">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas ${item.icon} fa-3x" style="color: #00bcd4;"></i>
                    </div>
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.content}</p>
                </div>
            </div>
        `;
        aboutCardsContainer.appendChild(card);
    });
});

// Show Modal Function
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block'; // Show the modal
    } else {
        console.error(`Modal with ID "${modalId}" not found.`);
    }
}

// Close Modal Function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none'; // Hide the modal
    } else {
        console.error(`Modal with ID "${modalId}" not found.`);
    }
}
