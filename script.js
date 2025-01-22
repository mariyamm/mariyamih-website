function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('nav ul');
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
});

// Open Modal
function openPortfolioModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Close Modal
function closePortfolioModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}
    
// Function to set up a basic slider
function setupSlider(modalId) {
    const slider = document.querySelector(`#${modalId} .modal-slider`);
    const slides = slider.querySelectorAll('img');
    let currentIndex = 0;

    // Create navigation controls
    const prevButton = document.createElement('button');
    prevButton.textContent = '<';
    prevButton.classList.add('slider-prev');
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    nextButton.classList.add('slider-next');

    slider.appendChild(prevButton);
    slider.appendChild(nextButton);

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    // Navigate to the next slide
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Navigate to the previous slide
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Initialize by showing the first slide
    showSlide(currentIndex);
}

// Initialize sliders for all modals
document.querySelectorAll('.portfolio-modal').forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('portfolio-modal')) {
            modal.style.display = 'none'; // Close modal on background click
        }
    });

    // Set up the slider when opening the modal
    const modalId = modal.id;
    setupSlider(modalId);
});


    // Close modal when clicking outside the content area
    window.onclick = function(event) {
        var modals = document.querySelectorAll('.portfolio-modal');
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

    function changeLanguage() {
            const language = document.getElementById('language-dropdown').value;
           
            if (language === 'en') {
                window.location.href = 'index.html';
            } else if (language === 'bg') {
                window.location.href = 'bg.html';
            } else if (language === 'fr') {
                window.location.href = 'fr.html';

            // Add more language redirections here
        }
    }
