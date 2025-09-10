// Reveal on scroll
const reveals = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver((entries) => {
entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.2 });
revelsInit();
function revelsInit(){ reveals.forEach(el => io.observe(el)); }


// Year in footer
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();