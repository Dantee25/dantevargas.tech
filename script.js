document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to DV.tech Portfolio!");

    // Change project section border dynamically
    const projectsSection = document.querySelector('#projects');
    projectsSection.style.border = '2px solid #333';

    // Add hover effect to links via JS
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.onmouseover = () => link.style.opacity = '0.8';
        link.onmouseout = () => link.style.opacity = '1';
    });
});