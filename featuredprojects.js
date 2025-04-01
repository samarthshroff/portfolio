const assetUrl = '/r2' || '';
//const assetUrl = './static-assets';

// Add the techColors object for consistent styling
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

export const projectsContent = {
    projects: [
        {
            title: "World of Peppa Pig",
            description: "A $10M in annual revenue and reaching 2M monthly active users (MAU) game.",
            technologies: ["Unity ", "C# ", "RevenueCat ", "Firebase ", "Unity Gaming Services ", "Cognito"],
            image: `${assetUrl}/professionalprojects-wopp-main.png`,
            featured: true
        },
        {
            title: "Cricket Premier League",
            description: "Played a pivotal role in the development of a mobile cricket game that allows players to compete in a premier league, build their dream team, and challenge friends and family on the leaderboard.",
            technologies: ["C++ ", "Cocos2dx"],
            image: `${assetUrl}/professionalprojects-cpl-main.png`,
            featured: true
        },
        {
            title: "Nazara Cricket",
            description: "I was a key player in enhancing the gameplay experience of Nazara Cricket, a mobile cricket game featuring detailed player characters, huge collection of typical shots of individual players and real-time multiplayer. ",
            technologies: ["C++ ", "Cocos2dx"],
            image: `${assetUrl}/professionalprojects-nc-main.png`,
            featured: true
        }
    ]
};

export const setupProfessionalProjects = () => {
    const createProjectCard = (project, index) => {
        const isEven = index % 2 === 0;
        
        return `
            <div class="featured-project-card">
                <div class="project-content" style="${isEven ? '' : 'order: 2;'}">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-description">
                        <p>${project.description}</p>
                    </div>
                    <div class="project-tech-list">
                        ${project.technologies.map(tech => {
                            // Trim any whitespace when looking up colors
                            const bgColor = techColors[tech.trim()] || techColors.default;
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
                <div class="featured-project-image" style="${isEven ? 'order: 2;' : ''}">
                    <img src="${project.image}" alt="${project.title}">
                </div>
            </div>
        `;
    };

    const projectsContainer = document.querySelector('.projects-grid');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projectsContent.projects
        .map((project, index) => createProjectCard(project, index))
        .join('');

    // Add "All Projects" button with the same style as CTA button, without the arrow
    projectsContainer.insertAdjacentHTML('afterend', `
        <div class="all-projects-button-container">
            <a href="/projects.html" class="cta-button">All Projects</a>
        </div>
    `);
};