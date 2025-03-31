const assetUrl = '/r2' || '';
//const assetUrl = './static-assets';
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
    footerBio: "Game Developer passionate about creating immersive experiences.",
    certifications: [
        {
            title: "Unity Certified",
            subtitle: "Unity Certified Professional: Programmer.",
            date: "Est. June 2024",
            image: `${assetUrl}/unity-badge.png`,
            url:"https://www.credly.com/badges/e9576501-9901-4b00-9f3b-15a25c2c07d8/public_url"
        },
        {
            title: "Game Production",
            subtitle: "Game Production course taught by Andy Johnson and delivered through ELVTR.",
            date: "Est. October 2021",
            image: `${assetUrl}/elvtr-badge.png`,
            url:"https://elvtr.com/certificate/7bd54fab271ad7d7a68eafed038692ef/"
        },
        {
            title: "Certified Java Programmer",
            subtitle: "Sun Certified Programmer for Java 2 Platform",
            date: "Est. October 2009",
            image: `${assetUrl}/java-badge.png`,
            url: null
        }
    ]
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
        <div class="certifications-section">
            <h2 class="section-title">Certificates & Courses</h2>
            <div class="certifications-grid">
                ${aboutContent.certifications.map(cert => `
                    ${cert.url ? `<a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="certification-link">` : '<div>'}
                        <div class="certification-card">
                            <div class="certification-image">
                                <img src="${cert.image}" alt="${cert.title}">
                            </div>
                            <div class="certification-content">
                                <h3>${cert.title}</h3>
                                <p class="certification-subtitle">${cert.subtitle}</p>
                                <p class="certification-date">${cert.date}</p>
                            </div>
                        </div>
                    ${cert.url ? '</a>' : '</div>'}
                `).join('')}
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