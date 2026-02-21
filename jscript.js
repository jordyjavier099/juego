const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const titulo = document.getElementById('titulo');
let escalaNo = 1;

// Función para crear la lluvia de corazones de fondo
function crearCorazones() {
    for(let i=0; i<20; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon-bg';
        corazon.innerHTML = '❤️';
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.animationDuration = (Math.random() * 3 + 2) + 's';
        corazon.style.opacity = Math.random();
        document.body.appendChild(corazon);
    }
}
crearCorazones();

// Lógica para que el botón "No" huya con suavidad y margen seguro
const huirYAchicar = () => {
    // 1. Antes de moverlo, obtenemos su posición real en la pantalla
    const rect = btnNo.getBoundingClientRect();
    
    // 2. Lo fijamos en esa posición exacta para que no dé el salto inicial
    if (btnNo.style.position !== "fixed") {
        btnNo.style.left = `${rect.left}px`;
        btnNo.style.top = `${rect.top}px`;
        btnNo.style.position = "fixed";
        btnNo.style.margin = "0"; // Quitamos márgenes que estorben
    }

    // 3. Reducción de escala sutil
    escalaNo -= 0.03; 
    if (escalaNo < 0.5) escalaNo = 0.5; 

    const margen = 100; 

    // 4. Calculamos el espacio disponible
    const anchoMax = window.innerWidth - (btnNo.offsetWidth * escalaNo) - margen;
    const altoMax = window.innerHeight - (btnNo.offsetHeight * escalaNo) - margen;

    // 5. Generamos la nueva posición (usamos setTimeout para que el navegador procese el cambio de position primero)
    setTimeout(() => {
        const x = Math.max(margen, Math.random() * anchoMax);
        const y = Math.max(margen, Math.random() * altoMax);

        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
        btnNo.style.transform = `scale(${escalaNo})`;
    }, 10);
};
// Eventos para detectar el mouse o el toque en celulares
btnNo.addEventListener('mouseenter', huirYAchicar);
btnNo.addEventListener('touchstart', (e) => { 
    e.preventDefault(); // Evita comportamientos extraños en móviles
    huirYAchicar(); 
});

// Acción al presionar el botón "SÍ"
btnSi.addEventListener('click', () => {
    // Ocultamos los botones con una pequeña animación
    btnSi.style.transform = "translate(-50%, -50%) scale(0)";
    btnSi.style.opacity = "0";
    btnNo.style.display = "none";
    
    // Cambiamos el título a la confirmación final
    titulo.innerHTML = "¡SABÍA QUE DIRÍAS QUE SÍ! ❤️";

    // Creamos la explosión de cupidos voladores
    for(let i=0; i<20; i++) {
        setTimeout(() => {
            const cupido = document.createElement('div');
            cupido.classList.add('cupido');
            cupido.innerHTML = '👼';
            cupido.style.left = "50%";
            cupido.style.top = "50%";
            // Direcciones aleatorias para los cupidos
            cupido.style.setProperty('--dx', (Math.random() * 1000 - 500) + 'px');
            cupido.style.setProperty('--dy', (Math.random() * 1000 - 500) + 'px');
            document.body.appendChild(cupido);
            
            // Limpiamos los elementos después de la animación
            setTimeout(() => cupido.remove(), 3000);
        }, i * 100);
    }

    // Redirección automática a la página del poema tras la celebración
    setTimeout(() => {
        window.location.href = "poema.html";
    }, 3500);
});