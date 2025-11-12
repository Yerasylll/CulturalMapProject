
$(document).ready(function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    loadExploreCountries();
    loadGallery();
    initExploreSearch();
    initCategoryFilters();
    initBackToTop();
});

function loadExploreCountries() {
    const grid = $('#exploreGrid');
    grid.empty();
    
    countriesData.forEach((country, index) => {
        const card = `
            <div class="col-md-6 col-lg-4 country-item" data-aos="fade-up" data-aos-delay="${index * 50}" data-category="traditions,music,cuisine,festivals">
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
                        <button class="btn btn-primary btn-sm mt-3 w-100 view-details-btn">
                            <i class="fas fa-eye me-2"></i>View Details
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.append(card);
    });
    
    // Add click event to view details buttons
    $('.view-details-btn').on('click', function(e) {
        e.stopPropagation();
        const countryId = $(this).closest('.country-card').data('country-id');
        showCountryDetails(countryId);
    });
    
    $('.country-card').on('click', function() {
        const countryId = $(this).data('country-id');
        showCountryDetails(countryId);
    });
}

// Load gallery images
function loadGallery() {
    const gallery = $('#galleryGrid');
    gallery.empty();
    
    galleryImages.forEach((image, index) => {
        const item = `
            <div class="col-6 col-md-4 col-lg-3 gallery-item-wrapper" data-aos="zoom-in" data-aos-delay="${index * 50}" data-category="${image.category}">
                <div class="gallery-item" onclick="showGalleryModal('${image.url}', '${image.title}', '${image.country}')">
                    <img src="${image.url}" alt="${image.title}">
                    <div class="gallery-overlay">
                        <div>
                            <h6 class="mb-1">${image.title}</h6>
                            <small>${image.country}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
        gallery.append(item);
    });
}

// Search functionality
function initExploreSearch() {
    $('#exploreSearch').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase().trim();
        let visibleCount = 0;
        
        $('.country-item').each(function() {
            const card = $(this);
            const countryId = card.find('.country-card').data('country-id');
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
            
            if (searchTerm === '' || searchableText.includes(searchTerm)) {
                card.show();
                visibleCount++;
            } else {
                card.hide();
            }
        });
        
        // Show/hide no results message
        if (visibleCount === 0) {
            $('#noResults').show();
        } else {
            $('#noResults').hide();
        }
    });
}

// Category filters
function initCategoryFilters() {
    $('.category-btn').on('click', function() {
        // Update active state
        $('.category-btn').removeClass('active');
        $(this).addClass('active');
        
        const category = $(this).data('category');
        let visibleCount = 0;
        
        if (category === 'all') {
            $('.country-item').show();
            $('.gallery-item-wrapper').show();
            $('#noResults').hide();
            return;
        }
        
        // Filter countries
        $('.country-item').each(function() {
            const card = $(this);
            const countryId = card.find('.country-card').data('country-id');
            const country = countriesData.find(c => c.id === countryId);
            
            if (!country) return;
            
            let hasCategory = false;
            switch(category) {
                case 'traditions':
                    hasCategory = country.traditions.length > 0;
                    break;
                case 'music':
                    hasCategory = country.music.length > 0;
                    break;
                case 'cuisine':
                    hasCategory = country.cuisine.length > 0;
                    break;
                case 'festivals':
                    hasCategory = country.festivals.length > 0;
                    break;
            }
            
            if (hasCategory) {
                card.show();
                visibleCount++;
            } else {
                card.hide();
            }
        });
        
        // Filter gallery
        $('.gallery-item-wrapper').each(function() {
            const itemCategory = $(this).data('category');
            if (itemCategory === category) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        
        // Show/hide no results message
        if (visibleCount === 0) {
            $('#noResults').show();
        } else {
            $('#noResults').hide();
        }
    });
}

// Show country details
function showCountryDetails(countryId) {
    const country = countriesData.find(c => c.id === countryId);
    if (!country) return;
    
    // Create a detailed view modal
    const modalHtml = `
        <div class="modal fade" id="countryDetailModal" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${country.flag} ${country.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
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
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    $('#countryDetailModal').remove();
    
    // Add modal to body
    $('body').append(modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('countryDetailModal'));
    modal.show();
}

// Show gallery modal
function showGalleryModal(imageUrl, title, country) {
    const modalHtml = `
        <div class="modal fade" id="galleryModal" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img src="${imageUrl}" alt="${title}" class="img-fluid rounded" style="max-height: 500px;">
                        <p class="mt-3 text-muted">${country}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    $('#galleryModal').remove();
    
    // Add modal to body
    $('body').append(modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
}

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

if (typeof window !== 'undefined') {
    window.showGalleryModal = showGalleryModal;
}