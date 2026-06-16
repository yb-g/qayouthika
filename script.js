document.addEventListener('DOMContentLoaded', () => {

    // Cache DOM elements
    const elements = {
        mobileMenuBtn: document.getElementById('mobile-menu'),
        navMenu: document.querySelector('.nav-menu'),
        navLinks: document.querySelectorAll('.nav-link'),
        navbar: document.getElementById('navbar'),
        counters: document.querySelectorAll('.counter'),
        readMoreBtns: document.querySelectorAll('.read-more-btn'),
        form: document.getElementById('volunteerForm')
    };

    // Mobile Menu Toggle
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', () => {
            elements.navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    if (elements.navLinks) {
        elements.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                elements.navMenu.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (elements.navMenu && elements.navMenu.classList.contains('active') && !e.target.closest('.nav-menu') && !e.target.closest('#mobile-menu')) {
            elements.navMenu.classList.remove('active');
        }
    });

    // Navbar Scroll Effect with debouncing
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 50) {
                elements.navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                elements.navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
            } else {
                elements.navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                elements.navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }, 10);
    });

    // Smooth Scrolling for Anchor Links with dynamic navbar height
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = elements.navbar ? elements.navbar.offsetHeight : 80;
                window.scrollTo({
                    top: targetElement.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Counter Animation
    const startCounters = () => {
        elements.counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(startCounters, 30);
            } else {
                counter.innerText = target;
            }
        });
    }

    let countersStarted = false;
    window.addEventListener('scroll', () => {
        const impactSection = document.getElementById('impact');
        if (!impactSection) return;

        const sectionPos = impactSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos && !countersStarted) {
            startCounters();
            countersStarted = true;
        }
    });

    // Read More Expanders
    elements.readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const content = this.nextElementSibling;

            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                this.textContent = 'Read More';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                this.style.display = 'none';

                setTimeout(() => {
                    content.classList.add('expanded');
                    content.style.maxHeight = 'unset';
                }, 50);
            }
        });
    });

    // Auto-resize textarea as user types
    const textarea = document.getElementById('motivation');
    if (textarea) {
        const resizeTextarea = () => {
            textarea.style.height = 'auto';
            textarea.style.height = Math.min(textarea.scrollHeight, 500) + 'px';
        };
        textarea.addEventListener('input', resizeTextarea);
    }

    // Input Sanitization Helper
    const sanitizeInput = (input) => {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return input.replace(/[&<>"']/g, m => map[m]);
    };

    // Form Handling
    if (elements.form) {
        elements.form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('emailAddr').value.trim();
            const phone = document.getElementById('phoneNum').value.trim();
            const motivation = document.getElementById('motivation').value.trim();
            const msgEl = document.getElementById('formMessage');

            // Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !phone || !motivation) {
                msgEl.textContent = 'Please fill out all fields.';
                msgEl.className = 'form-message error-text';
                return;
            }

            if (!emailRegex.test(email)) {
                msgEl.textContent = 'Please enter a valid email address.';
                msgEl.className = 'form-message error-text';
                return;
            }

            if (phone.length !== 10 || isNaN(phone)) {
                msgEl.textContent = 'Phone number must be exactly 10 digits.';
                msgEl.className = 'form-message error-text';
                return;
            }

            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            // Sanitize inputs before processing
            const sanitizedData = {
                name: sanitizeInput(name),
                email: sanitizeInput(email),
                phone: sanitizeInput(phone),
                motivation: sanitizeInput(motivation)
            };

            // Simulate form submission
            setTimeout(() => {
                msgEl.textContent = 'Application submitted successfully! We will contact you soon.';
                msgEl.className = 'form-message success-text';
                elements.form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Log sanitized data (in production, this would be sent to server)
                console.log('Form submitted with data:', sanitizedData);
            }, 1000);
        });
    }

    // Update year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});