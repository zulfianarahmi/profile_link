document.addEventListener('DOMContentLoaded', function() {
    initializeProfile();
    initializeSocialLinks();
    addClickTracking();
});

function initializeProfile() {
    const profileName = document.querySelector('.profile-name');
    const profileBio = document.querySelector('.profile-bio');
    const profilePic = document.getElementById('profile-pic');
    
    if (profileName) profileName.textContent = PROFILE_CONFIG.name;
    if (profileBio) profileBio.textContent = PROFILE_CONFIG.bio;
    if (profilePic) profilePic.src = PROFILE_CONFIG.profileImage;
}

function initializeSocialLinks() {
    Object.keys(SOCIAL_MEDIA_CONFIG).forEach(platform => {
        const config = SOCIAL_MEDIA_CONFIG[platform];
        
        if (!config.enabled) {
            const linkElement = document.getElementById(`${platform}-link`);
            if (linkElement) {
                linkElement.style.display = 'none';
            }
            return;
        }
        
        const linkElement = document.getElementById(`${platform}-link`);
        if (linkElement) {
            linkElement.href = config.url;
            linkElement.setAttribute('target', '_blank');
            linkElement.setAttribute('rel', 'noopener noreferrer');
            
            linkElement.setAttribute('aria-label', `Visit my ${config.name} profile`);
        }
    });
}

function addClickTracking() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.id.replace('-link', '');
            
            console.log(`Clicked on ${platform} link`);
            
            setTimeout(() => {
                
            }, 100);
        });
    });
}

function addInteractiveEffects() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

function addSmoothScrolling() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

document.addEventListener('DOMContentLoaded', function() {
    addInteractiveEffects();
    addSmoothScrolling();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

function addThemeToggle() {
    const body = document.body;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    const currentTheme = localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
    }
    
    prefersDark.addListener((e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', addThemeToggle); 