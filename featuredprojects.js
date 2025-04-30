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

// Add project details for modals
window.projectDetails = {
    "World of Peppa Pig": {
        description: `
            <p>An app generating $10M in annual revenue and 2M monthly active users (MAU). My contributions are mainly towards Game Development, Platform SDK Development and Revenue Optimization:</p>
            <ul>
                <li>Revenue & Conversion Enhancement: Increased yearly revenue by $500K and conversion rates by 20% through the development and implementation of a localized paywall and purchase system.</li>
                <li>Maintenance Reduction: Decreased project maintenance complexity by 40% through the implementation of a forced update system.</li>
                <li>User Engagement Improvement: Boosted user engagement by 30% through the integration of comprehensive analytics services.</li>
                <li>Performance Optimization: Optimized app performance using Firebase Remote Config for A/B testing and real-time updates. Further enhanced user experience and reduced app size by designing an asset delivery system utilizing Unity Addressables.</li>
                <li>Development Efficiency: Reduced development and integration time by creating and implementing custom Editor tools using C# and Unity API.</li>
                <li>Agile Development & Integrations: Led SCRUM-based regular releases, automation initiatives, and platform SDK integrations.</li>                    
            </ul>
        `,
        mediaItems: [
            { type: 'image', src: `${assetUrl}/professionalprojects-wopp-main.png` },
            { type: 'video', src: `${assetUrl}/professionalprojects-wopp-vid1` },
            { type: 'image', src: `${assetUrl}/professionalprojects-wopp-1.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-wopp-2.png` },
            { type: 'video', src: `${assetUrl}/professionalprojects-wopp-vid2` },
            { type: 'video', src: `${assetUrl}/professionalprojects-wopp-vid3` },                
            { type: 'image', src: `${assetUrl}/professionalprojects-wopp-3.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-wopp-4.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-wopp-5.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-wopp-6.png` }
        ]
    },
    "Cricket Premier League": {
        description: `
            <p>Played a pivotal role in the development of a mobile cricket game that allows players to compete in a premier league, build their dream team, and challenge friends and family on the leaderboard.</p>
            <ul>
                <li>Programming the entire client-side logic for core game systems, including the score system and leaderboard functionality, using cocos2dx 3.9.</li>
                <li>Contributing to a game that achieved notable success on the Google Play Store, ranking #3 in 'Top Free' and #1 in 'Top New Free' on May 10, 2016.</li>
            </ul>
        `,
        mediaItems: [
            { type: 'image', src: `${assetUrl}/professionalprojects-cpl-main.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-cpl-2.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-cpl-3.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-cpl-4.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-cpl-5.png` }
        ]
    },
    "Nazara Cricket": {
        description: `
            <p>Crucial role in enhancing the gameplay experience of Nazara Cricket, a mobile cricket game featuring detailed player characters, huge collection of typical shots of individual players and real-time multiplayer. </p>
            <ul>
                <li>Developing and integrating ad network modules for effective monetization.</li>
                <li>Implementing new game logic to refine gameplay mechanics, improving player engagement and overall game flow.</li>
                <li>Worked to ensure high performance and stability within the multiplayer environment.</li>
            </ul>
        `,
        mediaItems: [
            { type: 'image', src: `${assetUrl}/professionalprojects-nc-main.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-nc-2.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-nc-3.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-nc-4.png` },
            { type: 'image', src: `${assetUrl}/professionalprojects-nc-5.png` }
        ]
    }
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

// Add modal functionality
window.openModal = (title, description, mediaItems) => {
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
    
    modal.innerHTML = `
        <div class="details-modal-content">
            <span class="close-modal">&times;</span>
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
            <div class="description-section">
                ${description}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add the event listener for close button AFTER appending to the DOM
    const closeButton = modal.querySelector('.close-modal');
    closeButton.addEventListener('click', closeModal);
    
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
        const walk = (x - window.startX) * 2;
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

// Add carousel functions to window object
window.moveCarousel = (direction) => {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const totalItems = items.length;
    
    // Pause any currently playing videos
    const currentVideo = items[currentSlide].querySelector('video');
    if (currentVideo) {
        currentVideo.pause();
    }
    
    // Remove all active, prev, and next classes first
    items.forEach(item => {
        item.classList.remove('active', 'prev', 'next');
    });
    indicators[currentSlide].classList.remove('active');
    
    // Update current slide index with circular logic
    currentSlide = (currentSlide + direction + window.totalSlides) % window.totalSlides;
    
    // Add active class to current slide
    items[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Autoplay video if the current slide contains one
    const newVideo = items[currentSlide].querySelector('video');
    if (newVideo) {
        newVideo.currentTime = 0;
        newVideo.play().catch(e => console.log("Autoplay prevented:", e));
    }
    
    // Add prev class to the item before current
    const prevIndex = (currentSlide - 1 + totalItems) % totalItems;
    items[prevIndex].classList.add('prev');
    
    // Add next class to the item after current
    const nextIndex = (currentSlide + 1) % totalItems;
    items[nextIndex].classList.add('next');
    
    // Smooth scroll to the current slide
    items[currentSlide].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
};

window.jumpToSlide = (index) => {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const totalItems = items.length;
    
    // Pause any currently playing videos
    const currentVideo = items[currentSlide].querySelector('video');
    if (currentVideo) {
        currentVideo.pause();
    }
    
    // Remove all active, prev, and next classes
    items.forEach(item => {
        item.classList.remove('active', 'prev', 'next');
    });
    indicators[currentSlide].classList.remove('active');
    
    // Set current slide to the requested index
    currentSlide = index;
    
    // Add active class to new current slide
    items[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Autoplay video if the current slide contains one
    const newVideo = items[currentSlide].querySelector('video');
    if (newVideo) {
        newVideo.currentTime = 0;
        newVideo.play().catch(e => console.log("Autoplay prevented:", e));
    }
    
    // Add prev class to the item before current
    const prevIndex = (currentSlide - 1 + totalItems) % totalItems;
    items[prevIndex].classList.add('prev');
    
    // Add next class to the item after current
    const nextIndex = (currentSlide + 1) % totalItems;
    items[nextIndex].classList.add('next');
    
    // Smooth scroll to the current slide
    items[currentSlide].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
};

window.initCarousel = (totalSlides) => {
    const items = document.querySelectorAll('.carousel-item');
    
    items.forEach((item, index) => {
        item.style.display = 'block';
        
        if (index === 0) {
            item.classList.add('active');
        }
    });
    
    const carousel = document.querySelector('.carousel-inner');
    if (carousel) {
        carousel.style.width = `${totalSlides * 100}%`;
        
        items.forEach(item => {
            item.style.width = `${100 / totalSlides}%`;
        });
    }
};

window.finishDrag = function() {
    const carouselInner = document.querySelector('.carousel-inner');
    if (!window.isDragging) return;
    
    window.isDragging = false;
    carouselInner.style.cursor = 'grab';
    
    const endX = event.pageX || (event.changedTouches && event.changedTouches[0].clientX);
    const startX = window.startX;
    const threshold = 50;
    
    if (startX && endX && Math.abs(startX - endX) > threshold) {
        if (startX > endX) {
            moveCarousel(1);
        } else {
            moveCarousel(-1);
        }
    }
};

window.closeModal = () => {
    const modal = document.querySelector('.project-details-modal');
    if (modal) {
        const videos = modal.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
        });
        modal.remove();
        // Don't modify the URL or history state
    }
};

export const setupProfessionalProjects = () => {
    const createProjectCard = (project, index) => {
        const isEven = index % 2 === 0;
        
        return `
            <div class="featured-project-card" style="cursor: pointer;" onclick="openModal('${project.title}', projectDetails['${project.title}'].description, projectDetails['${project.title}'].mediaItems)">
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