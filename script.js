document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');

    // Configurar volumen al 15%
    video.volume = 0.15;

    // Los navegadores modernos bloquean el autoplay con sonido. 
    // Si el video no inicia automáticamente con sonido, lo iniciará al primer clic del usuario.
    document.body.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        }
    }, { once: true });

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        // Efecto parallax más suave y hacia arriba para aprovechar el 120vh sin mostrar cortes
        video.style.transform = `translateY(-${scrolled * 0.15}px)`;
    });
});
