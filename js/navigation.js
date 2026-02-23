const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const formButton = document.getElementById("form-button");
const backToTopBtn = document.getElementById("backToTop");

/* --- Mobile Menu Logic --- */
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault(); // Stop the page from redirecting

        // 1. Brief pause to show the user the "Loading" state
        formButton.disabled = true;
        formButton.innerText = "Sending...";

        const data = new FormData(event.target);

        // 2. Send the data to Formspree
        fetch(event.target.action, {
            method: contactForm.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            // 3. Another brief pause before showing result to feel like "processing"
            setTimeout(() => {
                if (response.ok) {
                    formStatus.style.display = "block";
                    formStatus.innerText = "Thanks! Your message has been sent successfully.";
                    formStatus.style.color = "#28a745"; // Success Green
                    contactForm.reset(); // Clear the form
                    formButton.innerText = "Sent!";
                } else {
                    formStatus.style.display = "block";
                    formStatus.innerText = "Oops! There was a problem. Please try again.";
                    formStatus.style.color = "#dc3545"; // Error Red
                    formButton.disabled = false;
                    formButton.innerText = "Send Message";
                }
            }, 800); // 800ms "Processing" pause
        }).catch(error => {
            formStatus.style.display = "block";
            formStatus.innerText = "Connection error. Please check your internet.";
            formButton.disabled = false;
        });
    });
}

window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section.page, section.hero-slider');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

/* --- Mobile Menu Logic --- */

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate closing from the window listener
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Close when clicking anywhere outside the menu
    window.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // --- Custom Dropdown Logic ---
    const projectSelect = document.getElementById('projectSelect');
    const hiddenInput = document.getElementById('hiddenProjectInput');

    if (projectSelect) {
        const trigger = projectSelect.querySelector('.custom-select-trigger');
        const options = projectSelect.querySelectorAll('.custom-option');

        // 1. Toggle Open/Close
        trigger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the window click listener from closing it immediately
            projectSelect.classList.toggle('open');
            console.log("Dropdown toggled"); // Useful for local debugging
        });

        // 2. Handle Option Selection
        options.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const val = this.getAttribute('data-value');
                const iconAndText = this.innerHTML;

                // Update the Trigger View
                trigger.querySelector('span').innerHTML = iconAndText;

                // Update the Hidden Input for Formspree
                hiddenInput.value = val;

                // Close the menu
                projectSelect.classList.remove('open');
            });
        });

        // 3. Close when clicking anywhere else on the page
        window.addEventListener('click', () => {
            projectSelect.classList.remove('open');
        });
    }
});

document.querySelectorAll('img').forEach(img => {
    img.onload = () => img.classList.add('loaded');
});

window.onscroll = function() {
    // Show button when user scrolls down 400px
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});