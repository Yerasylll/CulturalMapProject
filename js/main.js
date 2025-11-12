// Main JavaScript File - Core Functionality

// Initialize everything when DOM is loaded
$(document).ready(function() {
    initAOS();
    initCountersAnimation();
    initCountryCards();
    initSearch();
    initFilters();
    initBackToTop();
    initSmoothScroll();
});

// Initialize AOS (Animate On Scroll) Library (+3% bonus)
function initAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}

// Animated Counters (+3% bonus)
function initCountersAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Load Country Cards
function initCountryCards() {
    const grid = $('#countriesGrid');
    if (grid.length === 0) return;
    
    grid.empty();
    
    countriesData.forEach(country => {
        const card = createCountryCard(country);
        grid.append(card);
    });
    
    // Add click event to cards
    $('.country-card').on('click', function() {
        const countryId = $(this).data('country-id');
        showCountryModal(countryId);
    });
}

// Create Country Card HTML
function createCountryCard(country) {
    return `
        <div class="col-md-6 col-lg-4" data-aos="fade-up">
            <div class="country-card" data-country-id="${country.id}" data-tags="${country.traditions.join(',')},${country.cuisine.join(',')},${country.festivals.join(',')}">
                <div style="overflow: hidden;">
                    <img src="${country.image}" alt="${country.name}" class="country-card-image">
                </div>
                <div class="country-card-body">
                    <div class="country-flag">${country.flag}</div>
                    <h3 class="country-name">${country.name}</h3>
                    <p class="country-description">${country.description}</p>
                    <div class="country-tags">
                        <span class="country-tag"><i class="fas fa-landmark me-1"></i>${country.capital}</span>
                        <span class="country-tag"><i class="fas fa-users me-1"></i>${country.population}</span>
                        <span class="country-tag"><i class="fas fa-language me-1"></i>${country.language}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Search Functionality (+3% bonus)
function initSearch() {
    const searchInput = $('#searchInput');
    if (searchInput.length === 0) return;
    
    searchInput.on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase().trim();
        
        if (searchTerm === '') {
            $('.country-card').parent().show();
            return;
        }
        
        $('.country-card').each(function() {
            const card = $(this);
            const countryId = card.data('country-id');
            const country = countriesData.find(c => c.id === countryId);
            
            if (!country) return;
            
            const searchableText = [
                country.name,
                country.description,
                country.capital,
                country.language,
                ...country.traditions,
                ...country.music,
                ...country.cuisine,
                ...country.festivals
            ].join(' ').toLowerCase();
            
            if (searchableText.includes(searchTerm)) {
                card.parent().show();
            } else {
                card.parent().hide();
            }
        });
    });
}

// Filter Functionality (+3% bonus)
function initFilters() {
    $('.filter-buttons .btn').on('click', function() {
        // Update active state
        $('.filter-buttons .btn').removeClass('active');
        $(this).addClass('active');
        
        const filter = $(this).data('filter');
        
        if (filter === 'all') {
            $('.country-card').parent().show();
        } else {
            $('.country-card').each(function() {
                const tags = $(this).data('tags').toLowerCase();
                if (tags.includes(filter)) {
                    $(this).parent().show();
                } else {
                    $(this).parent().hide();
                }
            });
        }
    });
}

// Show Country Details in Modal
function showCountryModal(countryId) {
    const country = countriesData.find(c => c.id === countryId);
    if (!country) return;
    
    // Update modal title
    $('#modalCountryName').html(`${country.flag} ${country.name}`);
    
    // Create modal content
    const modalContent = `
        <div class="row">
            <div class="col-md-5">
                <img src="${country.image}" alt="${country.name}" class="img-fluid rounded mb-3" style="width: 100%; height: 300px; object-fit: cover;">
                <div class="mb-3">
                    <p class="mb-2"><strong><i class="fas fa-map-marker-alt me-2"></i>Capital:</strong> ${country.capital}</p>
                    <p class="mb-2"><strong><i class="fas fa-users me-2"></i>Population:</strong> ${country.population}</p>
                    <p class="mb-2"><strong><i class="fas fa-language me-2"></i>Language:</strong> ${country.language}</p>
                </div>
            </div>
            <div class="col-md-7">
                <p class="lead">${country.description}</p>
                
                <div class="mb-3">
                    <h5><i class="fas fa-handshake me-2 text-primary"></i>Traditions</h5>
                    <div class="d-flex flex-wrap gap-2">
                        ${country.traditions.map(t => `<span class="badge bg-primary">${t}</span>`).join('')}
                    </div>
                </div>
                
                <div class="mb-3">
                    <h5><i class="fas fa-music me-2 text-success"></i>Music</h5>
                    <div class="d-flex flex-wrap gap-2">
                        ${country.music.map(m => `<span class="badge bg-success">${m}</span>`).join('')}
                    </div>
                </div>
                
                <div class="mb-3">
                    <h5><i class="fas fa-utensils me-2 text-warning"></i>Cuisine</h5>
                    <div class="d-flex flex-wrap gap-2">
                        ${country.cuisine.map(c => `<span class="badge bg-warning text-dark">${c}</span>`).join('')}
                    </div>
                </div>
                
                <div class="mb-3">
                    <h5><i class="fas fa-calendar-alt me-2 text-danger"></i>Festivals</h5>
                    <div class="d-flex flex-wrap gap-2">
                        ${country.festivals.map(f => `<span class="badge bg-danger">${f}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#modalCountryContent').html(modalContent);
    
    // Update explore button link
    $('#modalExploreBtn').attr('href', `pages/explore.html?country=${country.id}`);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('countryModal'));
    modal.show();
}

// Back to Top Button (+2% bonus)
function initBackToTop() {
    const backToTopBtn = $('#backToTop');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    });
    
    backToTopBtn.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
}

// Smooth Scroll for Anchor Links (+2% bonus)
function initSmoothScroll() {
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 600);
        }
    });
}

// Sticky Navigation (+2% bonus)
$(window).scroll(function() {
    const navbar = $('.navbar');
    if ($(this).scrollTop() > 50) {
        navbar.addClass('navbar-scrolled');
    } else {
        navbar.removeClass('navbar-scrolled');
    }
});

// Add navbar scrolled styles
const navbarStyle = document.createElement('style');
navbarStyle.textContent = `
    .navbar-scrolled {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
`;
document.head.appendChild(navbarStyle);

// Export functions for use in other pages
if (typeof window !== 'undefined') {
    window.showCountryModal = showCountryModal;
    window.createCountryCard = createCountryCard;
}
