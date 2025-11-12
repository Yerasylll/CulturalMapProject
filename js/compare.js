
let selectedCountry1 = null;
let selectedCountry2 = null;

$(document).ready(function() {
    AOS.init();
    initCompare();
    initBackToTop();
});

function initCompare() {
    populateSelectors();
    
    $('#country1Select').on('change', function() {
        const countryId = parseInt($(this).val());
        if (countryId) {
            selectedCountry1 = countriesData.find(c => c.id === countryId);
            showCountryPreview(selectedCountry1, 1);
            checkAndCompare();
        } else {
            selectedCountry1 = null;
            $('#country1Preview').hide();
            $('#comparisonResults').hide();
        }
    });
    
    $('#country2Select').on('change', function() {
        const countryId = parseInt($(this).val());
        if (countryId) {
            selectedCountry2 = countriesData.find(c => c.id === countryId);
            showCountryPreview(selectedCountry2, 2);
            checkAndCompare();
        } else {
            selectedCountry2 = null;
            $('#country2Preview').hide();
            $('#comparisonResults').hide();
        }
    });
    
    $('#resetCompareBtn').on('click', resetComparison);
}

function populateSelectors() {
    const select1 = $('#country1Select');
    const select2 = $('#country2Select');
    
    countriesData.forEach(country => {
        const option = `<option value="${country.id}">${country.flag} ${country.name}</option>`;
        select1.append(option);
        select2.append(option);
    });
}

function showCountryPreview(country, number) {
    const preview = $(`#country${number}Preview`);
    
    const html = `
        <div class="text-center">
            <div class="mb-3">
                <span style="font-size: 4rem;">${country.flag}</span>
            </div>
            <h4>${country.name}</h4>
            <p class="text-muted">${country.description}</p>
            <img src="${country.image}" alt="${country.name}" class="img-fluid rounded" style="max-height: 200px; object-fit: cover; width: 100%;">
        </div>
    `;
    
    preview.html(html).fadeIn(300);
}

function checkAndCompare() {
    if (selectedCountry1 && selectedCountry2) {
        showComparison();
    }
}

function showComparison() {
    $('#compare-name-1').html(`${selectedCountry1.flag} <strong>${selectedCountry1.name}</strong>`);
    $('#compare-name-2').html(`${selectedCountry2.flag} <strong>${selectedCountry2.name}</strong>`);
    
    $('#compare-capital-1').text(selectedCountry1.capital);
    $('#compare-capital-2').text(selectedCountry2.capital);
    
    $('#compare-population-1').text(selectedCountry1.population);
    $('#compare-population-2').text(selectedCountry2.population);
    
    $('#compare-language-1').text(selectedCountry1.language);
    $('#compare-language-2').text(selectedCountry2.language);
    
    // Traditions
    $('#compare-traditions-1').html(createBadgeList(selectedCountry1.traditions, 'primary'));
    $('#compare-traditions-2').html(createBadgeList(selectedCountry2.traditions, 'primary'));
    
    // Music
    $('#compare-music-1').html(createBadgeList(selectedCountry1.music, 'success'));
    $('#compare-music-2').html(createBadgeList(selectedCountry2.music, 'success'));
    
    // Cuisine
    $('#compare-cuisine-1').html(createBadgeList(selectedCountry1.cuisine, 'warning'));
    $('#compare-cuisine-2').html(createBadgeList(selectedCountry2.cuisine, 'warning'));
    
    // Festivals
    $('#compare-festivals-1').html(createBadgeList(selectedCountry1.festivals, 'danger'));
    $('#compare-festivals-2').html(createBadgeList(selectedCountry2.festivals, 'danger'));
    
    // Show results with animation
    $('#comparisonResults').fadeIn(500);
    
    // Scroll to results
    $('html, body').animate({
        scrollTop: $('#comparisonResults').offset().top - 100
    }, 600);
}

function createBadgeList(items, color) {
    let html = '<div class="d-flex flex-wrap gap-2">';
    items.forEach(item => {
        const textClass = color === 'warning' ? 'text-dark' : '';
        html += `<span class="badge bg-${color} ${textClass}">${item}</span>`;
    });
    html += '</div>';
    return html;
}

function resetComparison() {
    selectedCountry1 = null;
    selectedCountry2 = null;
    
    $('#country1Select').val('');
    $('#country2Select').val('');
    
    $('#country1Preview').hide();
    $('#country2Preview').hide();
    $('#comparisonResults').hide();
    
    $('html, body').animate({ scrollTop: 0 }, 600);
}
n
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