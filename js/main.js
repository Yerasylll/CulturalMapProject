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

// Load country cards
function initCountryCards() {
    const grid = $('#countriesGrid');
    if (!grid.length) return;
    grid.empty();

    countriesData.forEach(country => {
        const card = `
            <div class="col-md-6 col-lg-4" data-aos="fade-up">
                <div class="country-card" data-country-id="${country.id}">
                    <div style="overflow: hidden;">
                        <img src="${country.image}" alt="${country.name}" class="country-card-image">
                    </div>
                    <div class="country-card-body">
                        <div class="country-flag">${country.flag}</div>
                        <h3 class="country-name">${country.name}</h3>
                        <p class="country-description">${country.description}</p>
                        <div class="country-tags">
                            <span class="country-tag"><i class="fas fa-landmark me-1"></i>${country.capital}</span>
                            <span class="country-tag"><i class="fas fa-language me-1"></i>${country.language}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        grid.append(card);
    });
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
