

function typewriterEffect() {
    const bio = document.querySelector('.profile-bio');
    if (!bio) return;
    
    const text = bio.textContent;
    bio.textContent = '';
    bio.style.borderRight = '2px solid #00ff00';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            bio.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            bio.style.borderRight = 'none';
        }
    }, 100);
}

function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-3';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 35);
}

function addTerminalEffect() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const span = this.querySelector('span');
            if (span) {
                const originalText = span.textContent;
                span.textContent = `$ ${originalText.toLowerCase().replace(/\s+/g, '_')}`;
                span.style.fontFamily = 'Courier New, monospace';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const span = this.querySelector('span');
            if (span) {
                const originalText = span.textContent.replace(/^\$\s*/, '');
                span.textContent = originalText.split('_').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ');
                span.style.fontFamily = 'Inter, sans-serif';
            }
        });
    });
}

function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '-1';
    document.body.appendChild(particlesContainer);
    
    const particles = ['🌸', '🌺', '🌻', '🌹', '🌷', '🐧', '💻', '🔒', '☁️'];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.position = 'absolute';
        particle.style.fontSize = Math.random() * 20 + 10 + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}



function terminalStartup() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    container.style.transform = 'scale(0.8)';
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.transition = 'all 0.5s ease-out';
        container.style.transform = 'scale(1)';
        container.style.opacity = '1';
    }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        typewriterEffect();
        createMatrixRain();
        addTerminalEffect();
        createFloatingParticles();
        terminalStartup();
    }, 500);
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'l') {
        document.body.classList.toggle('linux-mode');
    }
    
    if (e.ctrlKey && e.key === 'f') {
        document.body.classList.toggle('flower-mode');
    }
});

let mouseTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.position = 'fixed';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.width = '4px';
    trail.style.height = '4px';
    trail.style.background = 'rgba(255, 255, 255, 0.8)';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9999';
    trail.style.transition = 'all 0.1s ease';
    
    document.body.appendChild(trail);
    
    mouseTrail.push(trail);
    
    if (mouseTrail.length > maxTrailLength) {
        const oldTrail = mouseTrail.shift();
        if (oldTrail && oldTrail.parentNode) {
            oldTrail.parentNode.removeChild(oldTrail);
        }
    }
    
    // Animate trail
    mouseTrail.forEach((trail, index) => {
        setTimeout(() => {
            if (trail && trail.parentNode) {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0.5)';
                setTimeout(() => {
                    if (trail && trail.parentNode) {
                        trail.parentNode.removeChild(trail);
                    }
                }, 100);
            }
        }, index * 50);
    });
}); 