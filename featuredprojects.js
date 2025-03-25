const assetUrl = '/r2' || '';
export const projectsContent = {
    projects: [
        {
            title: "Project Name 1",
            description: "A $10M in annual revenue and reaching 2M monthly active users (MAU) game.",
            technologies: ["Unity |", "C# |", "RevenueCat |", "Firebase |", "Unity Gaming Services |", "Cognito"],
            image: `${assetUrl}/professionalprojects-wopp-main.png`,
            featured: true
        },
        {
            title: "Cricket Premier League",
            description: "Played a pivotal role in the development of a mobile cricket game that allows players to compete in a premier league, build their dream team, and challenge friends and family on the leaderboard.",
            technologies: ["C++ |", "Cocos2dx"],
            image: `${assetUrl}/professionalprojects-cpl-main.png`,
            featured: true
        },
        {
            title: "Nazara Cricket",
            description: "I was a key player in enhancing the gameplay experience of Nazara Cricket, a mobile cricket game featuring detailed player characters, huge collection of typical shots of individual players and real-time multiplayer. ",
            technologies: ["C++ |", "Cocos2dx"],
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
                    <p class="project-overline">Featured Project</p>
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-description">
                        <p>${project.description}</p>
                    </div>
                    <ul class="project-tech-list">
                        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
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