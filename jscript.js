const huirYAchicar = () => {
    // Reducción de escala muy sutil (0.03 en lugar de 0.05)
    escalaNo -= 0.03; 
    if (escalaNo < 0.5) escalaNo = 0.5; 

    const margen = 100; // Margen más amplio para que no se acerque a las orillas

    // Calculamos el espacio disponible
    const anchoMax = window.innerWidth - (btnNo.offsetWidth * escalaNo) - margen;
    const altoMax = window.innerHeight - (btnNo.offsetHeight * escalaNo) - margen;

    // Generamos la nueva posición
    const x = Math.max(margen, Math.random() * anchoMax);
    const y = Math.max(margen, Math.random() * altoMax);

    // Aplicamos los cambios
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
    btnNo.style.transform = `scale(${escalaNo})`;
};