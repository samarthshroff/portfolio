const assetUrl = '/api/assets' || '';
export const aboutContent = {
    title: "About Me",
    mainImage: {
        src: `${assetUrl}/profileimage.jpg`, // Update with your image path
        alt: "Samarth Shroff"
    },
    paragraphs: [
        "Experienced Game Developer specializing in gameplay programming, optimization, and game AI. Leading mobile game projects, with a passion for efficient design patterns and high-performance gameplay mechanics."
    ],
    skills: [
        "Unity",
        "Unreal Engine",
        "C#",
        "C++",
        "Python"        
    ],
    footerBio: "Game Developer passionate about creating immersive experiences."
};

export const setupAboutPage = () => {
    console.log('Setting up about page'); // Debug message

    const aboutSection = document.getElementById('about');
    console.log('About section element:', aboutSection); // Debug message

    if (!aboutSection) {
        console.log('About section not found!'); // Debug message
        return;
    }

    aboutSection.innerHTML = `
        <h2 class="section-title">
            ${aboutContent.title}
        </h2>
        <div class="about-content">
            <div class="about-text">
                ${aboutContent.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
                <ul class="skills-list">
                    ${aboutContent.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
            <div class="about-image">
                <div class="wrapper">
                    <img src="${aboutContent.mainImage.src}" alt="${aboutContent.mainImage.alt}">
                </div>
            </div>
        </div>
    `;

    // Update footer about section
    const footerAbout = document.querySelector('.footer-about');
    if (footerAbout) {
        //footerAbout.innerHTML = `
        //    <h3>About Me</h3>
        //    <p>${aboutContent.footerBio}</p>
        //`;
    }
};