document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Menú hamburguesa
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Funcionalidad de copiar al portapapeles
    const copyButtons = document.querySelectorAll('.contact-copy');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const textToCopy = this.getAttribute('data-text');
            
            // Copiar al portapapeles
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Cambiar el texto temporalmente
                const contactValue = this.querySelector('.contact-value');
                const originalText = contactValue.textContent;
                contactValue.textContent = '✓ Copiado';
                this.classList.add('copied');
                
                // Volver al texto original después de 2 segundos
                setTimeout(() => {
                    contactValue.textContent = originalText;
                    this.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar:', err);
                alert('No se pudo copiar. Por favor, intenta de nuevo.');
            });
        });
    });
});
