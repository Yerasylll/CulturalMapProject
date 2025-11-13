// Main JS (simplified for homepage)

$(document).ready(function() {
    initAOS();
    initCountersAnimation();
    initCountryCards();
    initSearch();
    initBackToTop();
    initSmoothScroll();
});

// AOS animations
function initAOS() {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 });
}

// Animated counters
function initCountersAnimation() {
    const counters = document.querySelectorAll('.counter');
    const animateCounter = counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };
        update();
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => observer.observe(counter));
}

/// Load Country Cards
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

// Search functionality
function initSearch() {
    const input = $('#searchInput');
    if (!input.length) return;

    input.on('keyup', function() {
        const term = $(this).val().toLowerCase().trim();
        $('.country-card').each(function() {
            const card = $(this);
            const id = card.data('country-id');
            const country = countriesData.find(c => c.id === id);
            if (!country) return;
            const text = [
                country.name,
                country.description,
                country.capital,
                country.language,
                ...country.traditions,
                ...country.cuisine,
                ...country.festivals
            ].join(' ').toLowerCase();
            card.closest('.col-md-6').toggle(text.includes(term) || term === '');
        });
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

// Back to top button
function initBackToTop() {
    const btn = $('#backToTop');
    $(window).scroll(() => $(this).scrollTop() > 300 ? btn.addClass('show') : btn.removeClass('show'));
    btn.on('click', () => $('html, body').animate({ scrollTop: 0 }, 600));
}

// Smooth scroll
function initSmoothScroll() {
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({ scrollTop: target.offset().top - 80 }, 600);
        }
    });
}
