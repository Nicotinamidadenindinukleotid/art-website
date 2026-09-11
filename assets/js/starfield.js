const canvas = document.getElementById('starfield');

if (canvas) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    const numStars = 200;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    // Sterne generieren
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            alpha: Math.random(),
            speed: Math.random() * 0.01 + 0.005
        });
    }

    // Animieren (Funkeln)
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) {
                star.speed = -star.speed;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, star.alpha)})`;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}