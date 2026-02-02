// EmailJS Configuration
// Sign up at https://www.emailjs.com/ to get your credentials
// Replace these placeholders with your EmailJS credentials:
const EMAILJS_SERVICE_ID = 'service_rcvsix5';       // e.g., 'service_xxxxx'
const EMAILJS_TEMPLATE_ID = 'template_d2jp0yb';     // e.g., 'template_xxxxx'
const EMAILJS_PUBLIC_KEY = 'LzjYnWzywI3QCAFNS';       // e.g., 'abcdef1234567'

// Initialize form immediately and wait for EmailJS
const contactForm = document.getElementById('contact-form');
const contactFeedback = document.getElementById('contact-feedback');
const contactSubmit = document.getElementById('contact-submit');

if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
}

function handleContactSubmit(e) {
    e.preventDefault();
    console.log('Form submission prevented and handled by JS');
    
    contactFeedback.textContent = '';
    contactSubmit.disabled = true;
    contactSubmit.textContent = 'Sending...';

    // Initialize EmailJS if not already done
    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY && !EMAILJS_PUBLIC_KEY.includes('YOUR_PUBLIC_KEY')) {
        try {
            emailjs.init(EMAILJS_PUBLIC_KEY);
        } catch (err) {
            console.log('EmailJS already initialized');
        }
    }

    // Check if EmailJS is available
    if (typeof emailjs === 'undefined' || !emailjs.send) {
        contactFeedback.className = 'text-red-400';
        contactFeedback.textContent = 'Error: EmailJS library not loaded. Please refresh the page.';
        contactSubmit.disabled = false;
        contactSubmit.textContent = 'Send Message';
        return;
    }

    // Check if EmailJS is configured
    if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY.includes('YOUR_PUBLIC_KEY') ||
        !EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID.includes('YOUR_SERVICE_ID') ||
        !EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID.includes('YOUR_TEMPLATE_ID')) {
        contactFeedback.className = 'text-red-400';
        contactFeedback.textContent = 'Error: EmailJS not configured. Please update credentials in script.js.';
        contactSubmit.disabled = false;
        contactSubmit.textContent = 'Send Message';
        return;
    }

    const templateParams = {
        from_name: document.getElementById('contact-name').value,
        from_email: document.getElementById('contact-email').value,
        message: document.getElementById('contact-message').value,
        to_email: 'syedhafeez957@gmail.com'
    };

    console.log('Sending message:', templateParams);

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log('Success! Email ID:', response.id);
            contactFeedback.className = 'text-green-400';
            contactFeedback.textContent = 'Message sent — thank you!';
            contactForm.reset();
            contactSubmit.disabled = false;
            contactSubmit.textContent = 'Send Message';
        })
        .catch(function(err) {
            console.error('EmailJS Error:', err);
            contactFeedback.className = 'text-red-400';
            contactFeedback.textContent = 'Error sending message. Check console for details.';
            contactSubmit.disabled = false;
            contactSubmit.textContent = 'Send Message';
        });
}

// Initialize EmailJS in background
if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY && !EMAILJS_PUBLIC_KEY.includes('YOUR_PUBLIC_KEY')) {
    try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('EmailJS initialized on page load');
    } catch (err) {
        console.log('EmailJS init:', err);
    }
};

function hide() {
    const menu = document.getElementById('nav-bar');
    menu.classList.toggle('hidden');
    document.body.classList.toggle('menu-open');
}

// Resume Download Handler
document.getElementById('resumeBtn').addEventListener('click', function() {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = './Assets/HAFEEZULLA.pdf'; // Path to your CV file
    link.download = 'Hafeez_Ulla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Hire Me Navigation Handler
document.getElementById('hireMeBtn').addEventListener('click', function() {
    window.location.href = './hire.html';
});
 
 