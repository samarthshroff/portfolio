const assetUrl = '/r2' || '';
//const assetUrl = './static-assets';
export const personalProjectsContent = {
    projects: [
        {
            title: "Vampire Survivor-style project (Currently developing)",
            description: `
                <p>Currently developing a Vampire Survivor-style rogue like shooter game using C++. This demonstrates:</p>
                <ul>                    
                    <li><strong>Prototype design pattern</strong> for spawning Enemies.</li>
                    <li><strong>Data-Driven</strong> Enemies information with the use of <strong>Data Table</strong>.</li>
                    <li><strong>Data-Driven</strong> Weapons information with the use of <strong>Data Asset</strong>.</li>
                    <li><strong>Behavior Tree</strong> for enemies (looking at, chasing and attacking player).</li>
                    <li><strong>Python Script</strong> for generating AttributeSet header and cpp file for each weapon that is child of "Weapon.Hero" Gameplay Tag.</li>
                    <li><strong>Gameplay Ability System (GAS)</strong> for weapons, pick-ups, passive items and power-ups.</li>
                    <li>Pause Menu shows Hero's Attributes.</li>                    
                    <li>Camera Follows the character.</li>                
                    <li>Enhanced Input System for moving player to the position of mouse clicks and mouse button hold.</li>
                    <li>Character animations: Idle, BlendSpace for Walk and Run based on speed.</li>
                    <li>Character and Animation imported from Mixamo.</li>              
                </ul>
                <p>To-do:</p>
                <ul>                    
                    <li>Niagara Effects, Health and UI widgets.</li>
                </ul>
            `,
            technologies: ["Unreal 5.5", "C++", "Python"],
            image: `${assetUrl}/personalprojects-vsc-splash.png`,
            githubLink: "https://github.com/samarthshroff/VampireSurvivorClone",
            mediaItems: [
                { type: 'image', src: `${assetUrl}/personalprojects-vsc-splash.png` },
                { type: 'image', src: `${assetUrl}/personalprojects-vsc-1.png` }//,
                //{ type: 'video', src: `${assetUrl}/personalprojects-vsc-vid` }
            ]
        },
        {
            title: "Boid Simulation",
            description:`
                <p>A real time simulation of flocking behavior, using the Boids algorithm. At present it demonstrates forward collision detection with world statics. This project demonstrates:</p>
                <ul>
                    <li>Implementation of boids using various methods.
                        <ul>
                            <li>Neighborhood Grid Data Structure: A spatial partitioning technique used to efficiently find nearby boids in a flocking simulation. Instead of checking every boid against every other boid (O(n²) complexity), we divide the simulation space into a grid of cells and only check nearby cells, reducing computational overhead. </li>
                            <li>QuadTree: A hierarchical spatial partitioning data structure that helps efficiently organize and search for nearby boids in a 2D space. Instead of using a fixed grid (Neighborhood Grid), a Quadtree dynamically subdivides the space into smaller regions where boids are densely packed, reducing unnecessary checks.</li>
                            <li>OctTree: A 3D version of a Quadtree, used to efficiently partition three-dimensional space for boid simulations in 3D. It helps in fast neighbor searches by reducing the number of boids checked when applying flocking behaviors like alignment, cohesion, and separation.</li>
                            <li>Simple nested loop: This brute-force approach has O(n²) complexity, meaning it scales poorly for large numbers of boids.</li>
                        </ul>
                    </li>
                </ul>
                <p>Improvements:</p>
                <ul>
                    <li>To use Octree once again to reduce the time complexity introduced by nested loops.</li>
                    <li>Use Sphere Cast instead of line cast to properly detect world statics (in case of corners).</li>
                    <li>Use Sphere Cast for right, left and up,down world static collisions as well.</li>
                </ul>
            `,
            technologies: ["Unreal 4.27", "C++", "Blueprints"],
            image: `${assetUrl}/personalprojects-fbue4-splash.jpg`,
            githubLink: "https://github.com/samarthshroff/FlockingBehaviorUnreal", // Add GitHub link here
            mediaItems: [
                { type: 'image', src: `${assetUrl}/personalprojects-fbue4-splash.jpg` },
                { type: 'video', src: `${assetUrl}/personalprojects-fbue4-vid` }
            ]
        },
        {
            title: "Freecell",
            description: `
                <p>A simple freecell core game demo in python.</p>
                <ul>
                    <li>Feature 1: Description of feature 1</li>
                    <li>Feature 2: Description of feature 2</li>
                    <li>Feature 3: Description of feature 3</li>
                </ul>
                <p>Improvements:</p>
                <ul>
                    <li>Add double click prediction for moving the cards to either free cells or home cells.</li>
                    <li>Add hints and undo.</li>
                    <li>Add UI, timer and game win/over condition.</li>
                </ul>
            `,
            technologies: ["Python", "PyGame"],
            image: `${assetUrl}/personalprojects-fc-splash.png`,
            githubLink: "https://github.com/samarthshroff/FreeCell",
            mediaItems: [
                { type: 'image', src: `${assetUrl}/personalprojects-fc-splash.png` },
                { type: 'video', src: `${assetUrl}/personalprojects-fc-vid` }
            ]
        },
        {
            title: "Third Person Shooter",
            description: `
                <p>A third person shooter prototype using C++. This demonstrates:</p>
                <ul>
                    <li>Character animations: Idle, BlendSpace for Walk and Run, Jump, Strafe run and walk based on speed and direction.</li>
                    <li>A Data driven (using Data table) weapon system using <strong>Flyweight design pattern</strong> for switching between weapons based on key press (1,2 and 3)</li>
                    <li>Editor Tools in Python for:</li>
                    <ul><li>Creating GameplayTags of all Skeletal and Static Meshes based on user provided directory. This is used for weapons, Ammunition and Accessories; each in separate ini files based on the directory name.</li>
                    <li>Recreating DataTable from csv files found in a predefined directory during each editor launch as there is a known issue in UE5 that corrupts the data tables.</li></ul>
                    <li>Camera movement: 
                        <ul>
                            <li>Player can see the Character front when in idle state by moving the mouse.</li> 
                            <li>When character is walking or running then moving the mouse makes the character look in that direction</li>
                        </ul>
                    </li>
                    <li>Using Enhanced Input System and detecting the keys pressed for switching weapons.</li>
                    <li>Character and Animation imported from Mixamo.</li>
                </ul>
                <p>To-do:</p>
                <ul>
                    <li>Shoot projectiles from projectile emitter weapons.</li>
                    <li>Change character animation based on selected weapon.</li>
                    <li>Add Enemies.</li>
                    <li>Use Behavior Tree for Enemies.</li>
                    <li>Niagara Effects, Health and UI widgets.</li>
                    <li>Animation Montage for shooting, reloading.</li>
                    <li>May use the Animations from AnimStarterPack with Mixamo character using IK Retargeter</li>
                </ul>
            `,
            technologies: ["Unreal 5.5", "C++", "Python"],
            image: `${assetUrl}/personalprojects-tps-splash.jpg`,
            githubLink: "https://github.com/samarthshroff/ThirdPersonShooter",
            mediaItems: [
                { type: 'image', src: `${assetUrl}/personalprojects-tps-splash.jpg` },
                { type: 'image', src: `${assetUrl}/personalprojects-tps-1.png` },
                { type: 'video', src: `${assetUrl}/personalprojects-tps-vid` },
                { type: 'video', src: `${assetUrl}/personalprojects-tps-vid1` }
            ]
        }
    ]
};

const techColors = {
    // Game Development - Blue shades
    "Unity": "#E1F0FF",
    "Unity Gaming Services": "#E1F0FF",
    "Unreal": "#E1F0FF",
    "Blueprints": "#E1F0FF",
    
    // Programming Languages - Pink/Red shades
    "C#": "#FFE1E8",
    "C++": "#FFE1E8",
    "Python": "#FFE1E8",
    "Objective-C": "#FFE1E8",
    
    // Services & SDKs - Green shades
    "RevenueCat": "#E8F5E9",
    "Firebase": "#E8F5E9",
    "Cognito": "#E8F5E9",
    
    // Frameworks - Purple shades
    "Cocos2dx": "#F3E5F5",
    
    // Default color for any unlisted technology
    "default": "#F5F5F5"
};

export const setupPersonalProjects = () => {
    const createProjectCard = (project) => {
        const card = document.createElement('div');
        card.classList.add('project-card-new'); // Use the new class

    card.innerHTML = `
        <div class="project-image-new">
            <img src="${project.image}" alt="${project.title}" />
        </div>
        <div class="project-content-new">
            <h3 class="project-title-new">${project.title}</h3>
            <div class="project-tech-list-new">
                ${project.technologies.map(tech => {
                    const bgColor = techColors[tech] || '#f0f0f0';
                    return `<span style="
                        background-color: ${bgColor}; 
                        color: #333;
                        padding: 4px 12px;
                        border-radius: 20px;
                        font-size: 0.85rem;
                        display: inline-block;
                        margin: 2px;
                    ">${tech}</span>`;
                }).join('')}
            </div>
        </div>
    `;
        
        card.onclick = () => openPersonalProjectModal(project.title, project.description, project.mediaItems, project.githubLink);
        return card;
    };

    const projectsContainer = document.querySelector('.personalprojects .projects-grid');
    if (!projectsContainer) return;

    // Loop through the projects array
    personalProjectsContent.projects.forEach((project) => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
};

// Modal functionality for personal projects
window.openPersonalProjectModal = (title, description, mediaItems, githubLink) => {
    const modal = document.createElement('div');
    modal.classList.add('project-details-modal');
    
    // Create carousel navigation buttons
    const carouselNav = `
        <button class="carousel-control prev" onclick="moveCarousel(-1)">&#10094;</button>
        <button class="carousel-control next" onclick="moveCarousel(1)">&#10095;</button>
    `;
    
    // Create indicators for the carousel
    const indicators = `
        <div class="carousel-indicators">
            ${mediaItems.map((_, index) => 
                `<span class="indicator ${index === 0 ? 'active' : ''}" 
                  onclick="jumpToSlide(${index})"></span>`
            ).join('')}
        </div>
    `;
    
    // Add GitHub link before description
    const githubButton = githubLink ? 
        `<div class="github-link-container">
            <a href="${githubLink}" target="_blank" class="github-link">
                View on GitHub
            </a>
        </div>` : '';
    
    modal.innerHTML = `
        <div class="details-modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2>${title}</h2>
            <div class="media-section">
                ${carouselNav}
                <div class="carousel">                    
                    <div class="carousel-inner">
                        ${mediaItems.map((item, index) => `
                            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                ${item.type === 'video' ? 
                                    `<video ${index === 0 ? 'autoplay' : ''} controls muted>
                                        <source src="${item.src}.mp4" type="video/mp4">
                                        <source src="${item.src}.mov" type="video/quicktime">
                                        Your browser does not support the video tag.
                                    </video>` : 
                                    `<img src="${item.src}" alt="${title}" />`}
                            </div>
                        `).join('')}
                    </div>                    
                </div>
                ${indicators}
            </div>
            ${githubButton}
            <div class="description-section">
                <div>${description}</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Initialize the carousel
    initCarousel(mediaItems.length);
    
    // Initialize global variables for carousel tracking
    window.totalSlides = mediaItems.length;
    window.currentSlide = 0;
    window.isDragging = false;
    window.startX = null;
    window.startScrollLeft = null;
    
    // Play the video on the first slide if it's a video
    const firstSlideVideo = modal.querySelector('.carousel-item.active video');
    if (firstSlideVideo) {
        // Need to add a slight delay to make sure the video is loaded properly
        setTimeout(() => {
            firstSlideVideo.play().catch(e => console.log("Initial autoplay prevented:", e));
        }, 100);
    }
    
    // Add touch and swipe event listeners
    const carouselInner = modal.querySelector('.carousel-inner');
    
    // Mouse events for desktop
    carouselInner.addEventListener('mousedown', (e) => {
        window.isDragging = true;
        window.startX = e.pageX;
        window.startScrollLeft = carouselInner.scrollLeft;
        carouselInner.style.cursor = 'grabbing';
    });
    
    carouselInner.addEventListener('mousemove', (e) => {
        if (!window.isDragging) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - window.startX) * 2; // Multiply by 2 for faster scrolling
        carouselInner.scrollLeft = window.startScrollLeft - walk;
    });
    
    carouselInner.addEventListener('mouseup', window.finishDrag);
    carouselInner.addEventListener('mouseleave', window.finishDrag);
    
    // Touch events for mobile
    carouselInner.addEventListener('touchstart', (e) => {
        window.isDragging = true;
        window.startX = e.touches[0].clientX;
        window.startScrollLeft = carouselInner.scrollLeft;
    });
    
    carouselInner.addEventListener('touchmove', (e) => {
        if (!window.isDragging) return;
        const x = e.touches[0].clientX;
        const walk = (x - window.startX) * 2;
        carouselInner.scrollLeft = window.startScrollLeft - walk;
    });
    
    carouselInner.addEventListener('touchend', window.finishDrag);
};

// Note: The following functions are shared with professionalprojects.js
// and are already defined in the global scope:
// moveCarousel, jumpToSlide, initCarousel, closeModal, finishDrag