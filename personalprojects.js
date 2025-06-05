const assetUrl = '/r2' || '';
//const assetUrl = './static-assets';
export const personalProjectsContent = {
    projects: [
        {
            title: "Sentinel's Scourge (Currently developing)",
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
            image: `${assetUrl}/personalprojects-vsc-splash.jpg`,
            githubLink: "https://github.com/samarthshroff/VampireSurvivorClone",
            mediaItems: [
                { type: 'image', src: `${assetUrl}/personalprojects-vsc-splash.jpg` },
                { type: 'image', src: `${assetUrl}/personalprojects-vsc-1.png` }//,
                //{ type: 'video', src: `${assetUrl}/personalprojects-vsc-vid` }
            ]
        },
        {
            title: "ClimbForge",
            description: `
                <p>
                    <strong>ClimbForge</strong> is an advanced Unreal Engine climbing movement system, inspired by the fluid traversal mechanics seen in <em>The Legend of Zelda</em> series (though not an exact replica).
                    Designed for extensibility and as a technical showcase, this release highlights the following key Unreal Engine integrations and vector math features:
                </p>
                <h2>Unreal Engine Features</h2>
                <ul>
                    <li>
                    <strong>Custom Movement Modes:</strong>
                    Implements a custom climbing movement mode through UE’s extensible movement system (<code>MOVE_Custom</code>, <code>MOVE_Climbing</code>), including smooth transitions between walking, climbing, vaulting, and falling.
                    </li>
                    <li>
                    <strong>Component-Based Design:</strong>
                    Utilizes custom components (<code>UClimbForgeMovementComponent</code>, <code>UMotionWarpingComponent</code>) for modularity and maintainability.
                    </li>
                    <li>
                    <strong>Blueprint &amp; C++ Hybrid:</strong>
                    Core climbing logic is written in C++ for optimal performance, exposed to Blueprints for designer-friendly tuning and animation montage integration.
                    </li>
                    <li>
                    <strong>Enhanced Input System:</strong>
                    Full support for Unreal’s Enhanced Input system, with context-based input mappings for climbing, hopping, and movement actions.
                    </li>
                    <li>
                    <strong>Animation Integration:</strong>
                    Custom <code>UCharacterAnimInstance</code> class synchronizes animation states (GroundSpeed, AirSpeed, ClimbVelocity) with real-time physics and climbing state.
                    </li>
                    <li>
                    <strong>AnimMontage Integration:</strong>
                    Plays context-sensitive animation montages (e.g., climb, vault, hop) using Unreal’s animation system, with root motion support and event-driven state transitions.
                    </li>
                    <li>
                    <strong>Motion Warping:</strong>
                    Employs Unreal’s Motion Warping component to dynamically adjust character position and orientation during complex traversal animations.
                    </li>
                    <li>
                    <strong>Trace &amp; Collision Systems:</strong>
                    Advanced use of line and capsule traces to detect climbable surfaces, ledges, and vault opportunities, configurable via Blueprint-exposed properties.
                    </li>
                    <li>
                    <strong>Trace Utilities:</strong>
                    Implements capsule and line traces (<code>SweepMultiByChannel</code>, <code>LineTraceSingleByChannel</code>) for precise environment interaction, using Unreal’s collision and debug drawing systems.
                    </li>
                    <li>
                    <strong>Physics &amp; Root Motion:</strong>
                    Constrained root motion velocity and customized acceleration/deceleration for realistic climbing feel.
                    </li>
                </ul>

                <h2>Vector Math Highlights</h2>
                <ul>
                    <li>
                    <strong>Surface Normal and Direction Calculation:</strong>
                    Extensively uses <code>FVector</code>, dot/cross products, and angle calculations to align the character with climbable surfaces and determine climb direction.
                    </li>
                    <li>
                    <strong>Climbable Angle Detection:</strong>
                    Determines climbability via dot product and angle threshold (<code>theta = acos(a·b/|a||b|)</code>), ensuring only surfaces within a configurable angle can be climbed.
                    </li>
                    <li>
                    <strong>Directional Hopping:</strong>
                    Determines hop direction and eligibility via vector dot products between input and local axes, supporting up, down, left, and right hops.
                    </li>
                    <li>
                    <strong>Ledge &amp; Floor Detection:</strong>
                    Uses vector-based logic to identify ledges and floors, enabling context-aware transitions between climbing, vaulting, and walking.
                    </li>
                    <li>
                    <strong>Input-Driven Movement Vectors:</strong>
                    Translates 2D input vectors into 3D world-space movement using rotation matrices and axis projections.
                    </li>
                    <li>
                    <strong>Dynamic Climbing Velocity:</strong>
                    Handles rotation and projection of velocity vectors to ensure movement is always aligned with the climbing surface, including “unrotating” velocity using quaternions (<code>UKismetMathLibrary::Quat_UnrotateVector</code>).
                    </li>
                    <li>
                    <strong>Trace Calculations:</strong>
                    All traces (for climb, ledge, vault, etc.) are positionally offset and use vector math for direction, length, and surface normal evaluation.
                    </li>
                </ul>
            `,
            technologies: ["Unreal 5.5", "C++", "Blueprints"],
            image: `${assetUrl}/personalprojects-cf-splash.jpg`,
            githubLink: "https://github.com/samarthshroff/ClimbForge",
            mediaItems: [
                { type: 'image', src: `${assetUrl}/personalprojects-cf-splash.jpg` },
                { type: 'video', src: `${assetUrl}/personalprojects-cf-vid` }//,
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
                <p><strong>Interactive FreeCell Solitaire:</strong> Playable version of the classic FreeCell game with drag-and-drop controls.</p>
                <ul>
                    <li><strong>Python &amp; Pygame:</strong> Built using the <code>pygame</code> library for window management, graphics rendering, and event handling.</li>
                    <li><strong>Splash Screen:</strong> Shows a custom splash screen on startup for a polished look.</li>
                    <li><strong>Mouse-Driven Card Movement:</strong> Click and drag cards between free cells, home cells, and cascade piles using intuitive mouse controls.</li>
                    <li><strong>Rule-Based Card Placement:</strong> Enforces FreeCell rules for valid card moves (rank/suit checks, legal placements).</li>
                    <li><strong>Dynamic UI Layout:</strong> Board positions for free cells, home cells, and cascades are generated programmatically.</li>
                    <li><strong>Object-Oriented Design:</strong> Modular code with clear classes for cards, game logic, and UI rendering.</li>
                    <li><strong>Custom Card Graphics:</strong> Loads and displays PNG card images dynamically.</li>
                    <li><strong>Enumerations &amp; Dataclasses:</strong> Uses Python <code>enum</code> and <code>dataclass</code> for clean card and move representations.</li>
                    </ul>

                    <h3>Python Techniques Highlighted</h3>
                    <ul>
                    <li><strong>OOP Principles:</strong> Classes structure the game logic and GUI components.</li>
                    <li><strong>Enums &amp; Dataclasses:</strong> For precise card properties and move handling.</li>
                    <li><strong>Event-driven Programming:</strong> Handles user inputs via Pygame’s event queue.</li>
                    <li><strong>Real-time Rendering:</strong> Game loop with smooth redrawing and timing.</li>
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