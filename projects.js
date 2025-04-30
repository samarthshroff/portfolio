import { setupProfessionalProjects } from './professionalprojects.js';
import { setupPersonalProjects } from './personalprojects.js';

document.addEventListener('DOMContentLoaded', () => {
    setupProfessionalProjects();
    setupPersonalProjects();

    // Add hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
}); 