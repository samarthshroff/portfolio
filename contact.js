export const setupContactForm = () => {
    // Initialize contact form functionality
    const contactForm = document.querySelector('.contact-form');
    
    // Add contact form specific functionality
    // For example: form validation, submission handling, etc.

    document.getElementById('contact-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch(event.target.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            event.target.reset(); // Reset the form
        } else {
            alert('Failed to send message.');
        }
    });
}; 