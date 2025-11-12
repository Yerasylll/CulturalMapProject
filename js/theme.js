// Dark/Light Mode Theme Toggle (+3% bonus)

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    setupThemeToggle();
});

function initTheme() {
    // Get saved theme from localStorage, default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggle');
    
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    } else {
        body.classList.remove('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
}

function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('themeToggle');
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            const currentTheme = localStorage.getItem('theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            
            // Show toast notification
            showToast(`${newTheme === 'dark' ? 'Dark' : 'Light'} mode activated`);
        });
    }
}

// Toast Notification System (+3% bonus)
function showToast(message, type = 'info', duration = 3000) {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast-notification');
    existingToasts.forEach(toast => toast.remove());
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${getToastIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getToastColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
    `;
    
    // Add to body
    document.body.appendChild(toast);
    
    // Remove after duration
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function getToastIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getToastColor(type) {
    const colors = {
        'success': '#10b981',
        'error': '#ef4444',
        'warning': '#f59e0b',
        'info': '#2563eb'
    };
    return colors[type] || '#2563eb';
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .toast-notification {
        transition: all 0.3s ease;
    }
    
    @media (max-width: 576px) {
        .toast-notification {
            top: 10px;
            right: 10px;
            left: 10px;
            font-size: 0.9rem;
        }
    }
`;
document.head.appendChild(style);

// Export functions for use in other scripts
if (typeof window !== 'undefined') {
    window.showToast = showToast;
    window.applyTheme = applyTheme;
}