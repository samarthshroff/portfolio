// Core styles and functionality
// import './styles/main.css';
// import './styles/responsive.css';
// import './styles/portfolio.css';
//import { initializeNavigation } from './navigation';
import { setupAboutPage } from './about.js';
import { setupProfessionalProjects } from './featuredprojects.js';
//import { setupProfessionalProjects } from './projects/professionalprojects.js';
//import { setupPersonalProjects } from './projects/personalprojects.js';
//import { setupResumePage } from '/pages/resume';
//import { setupContactForm } from '/pages/contact';

// Page routing
//import { initializeRouter } from './router';

// Performance optimizations
//import { lazyLoadImages } from './utils/lazyload';
//import { preloadAssets } from './utils/preload';

// SEO optimizations 
//import { initializeSEO } from './seo/meta';
//import { generateSitemap } from './seo/sitemap';



console.log('index.js loaded'); // Debug message

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    setupProfessionalProjects();
    setupAboutPage();
    console.log('Setup functions called');
});