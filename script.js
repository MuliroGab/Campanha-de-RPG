// ===== REVELAÇÃO DAS SEÇÕES AO ROLAR =====
function revealSections() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        }
    });
}

// ===== NAVEGAÇÃO ATIVA =====
function updateActiveNav() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===== BOTÃO VOLTAR AO TOPO =====
function handleBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// ===== SCROLL SUAVE PARA LINKS INTERNOS =====
function smoothScroll(e) {
    const link = e.target.closest('a[href^="#"]');
    
    if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// ===== EFEITO DE DIGITAÇÃO NO TÍTULO (OPCIONAL) =====
function typeWriterEffect() {
    const title = document.querySelector('.hero h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const speed = 80;
    
    function type() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    // Descomente a linha abaixo para ativar o efeito de digitação
    // type();
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    // Revela seções visíveis no carregamento
    revealSections();
    
    // Atualiza navegação ativa
    updateActiveNav();
    
    // Configura botão voltar ao topo
    const backToTopBtn = document.querySelector('.back-to-top');
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll suave para links de navegação
    document.querySelector('.navbar').addEventListener('click', smoothScroll);
    
    // Efeito de digitação (descomente para usar)
    // typeWriterEffect();
});

// Eventos de scroll
window.addEventListener('scroll', () => {
    revealSections();
    updateActiveNav();
    handleBackToTop();
});

// ===== TOOLTIP NOS CARDS DE PERSONAGENS =====
document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
        
        // Adiciona um brilho temporário ao clicar
        this.style.boxShadow = '0 0 40px rgba(201, 168, 76, 0.4)';
        setTimeout(() => {
            if (!this.classList.contains('expanded')) {
                this.style.boxShadow = '';
            }
        }, 500);
    });
});

// ===== GALERIA - PREPARAÇÃO PARA IMAGENS =====
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Placeholder para futuro lightbox
        console.log('Clique na imagem - implemente um lightbox aqui!');
        
        // Efeito visual de clique
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

console.log('⚔️ Crônicas de Eldoria - Site carregado com sucesso!');
console.log('📜 Que os dados rolem a seu favor!');
