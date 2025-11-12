// Interactive Map using Leaflet.js
let map;
let markers = [];

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('map')) {
        initMap();
    }
});

function initMap() {
    // Create map centered on world view
    map = L.map('map', {
        zoomControl: true,
        scrollWheelZoom: true
    }).setView([20, 0], 2);
    
    // Add tile layer - using OpenStreetMap
    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        minZoom: 2
    });
    
    tileLayer.addTo(map);
    
    // Add custom marker style
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-pin"><i class="fas fa-map-marker-alt"></i></div>',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
    });
    
    // Add markers for all countries
    countriesData.forEach(country => {
        const marker = L.marker([country.lat, country.lng], {
            icon: customIcon
        }).addTo(map);
        
        // Create popup content
        const popupContent = createPopupContent(country);
        marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'custom-popup'
        });
        
        // Add click event to marker
        marker.on('click', function() {
            showCountryModal(country.id);
        });
        
        markers.push({ marker: marker, country: country });
    });
    
    // Add custom CSS for markers
    addMarkerStyles();
}

function createPopupContent(country) {
    return `
        <div class="popup-content">
            <div style="text-align: center; margin-bottom: 10px;">
                <span style="font-size: 3rem;">${country.flag}</span>
            </div>
            <h5 style="margin-bottom: 10px; color: #2563eb; font-weight: bold;">${country.name}</h5>
            <p style="font-size: 0.9rem; color: #6b7280; margin-bottom: 10px;">${country.description}</p>
            <div style="display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 10px;">
                <span style="background: #dbeafe; color: #1e40af; padding: 3px 8px; border-radius: 12px; font-size: 0.8rem;">Capital: ${country.capital}</span>
            </div>
            <button onclick="showCountryModal(${country.id})" class="btn btn-sm btn-primary w-100">
                View Details
            </button>
        </div>
    `;
}

function addMarkerStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .custom-marker {
            background: none;
            border: none;
        }
        
        .marker-pin {
            width: 30px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #2563eb;
            font-size: 2rem;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
            transition: all 0.3s ease;
        }
        
        .marker-pin:hover {
            transform: scale(1.2);
            color: #1e40af;
        }
        
        .custom-popup .leaflet-popup-content {
            margin: 0;
            padding: 15px;
        }
        
        .custom-popup .leaflet-popup-content-wrapper {
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        
        .custom-popup .leaflet-popup-tip {
            background: white;
        }
    `;
    document.head.appendChild(style);
}

// Function to zoom to specific country
function zoomToCountry(countryId) {
    const countryMarker = markers.find(m => m.country.id === countryId);
    if (countryMarker && map) {
        map.setView([countryMarker.country.lat, countryMarker.country.lng], 5);
        countryMarker.marker.openPopup();
    }
}

// Export functions for use in other scripts
if (typeof window !== 'undefined') {
    window.zoomToCountry = zoomToCountry;
}
