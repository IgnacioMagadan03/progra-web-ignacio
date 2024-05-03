
const fechaObjetivo = new Date("2024-05-10T10:30:00");

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function actualizarContador() {
    const ahora = new Date();
    const tiempoRestante = fechaObjetivo - ahora;

    if (tiempoRestante <= 0) {
        clearInterval(intervaloActualizacion);
        dias.textContent = "00";
        horas.textContent = "00";
        minutos.textContent = "00";
        segundos.textContent = "00";
        
        lanzarConfeti();
        
        return; 
    }

    const diasRestantes = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horasRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundosRestantes = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    dias.textContent = diasRestantes.toString().padStart(2, "0");
    horas.textContent = horasRestantes.toString().padStart(2, "0");
    minutos.textContent = minutosRestantes.toString().padStart(2, "0");
    segundos.textContent = segundosRestantes.toString().padStart(2, "0");
}

function lanzarConfeti() {
    var confettiSettings = {
        target: 'confetiCanvas', 
        max: 200,                
        size: 2,                 
        animate: true            
    };

    confetti(confettiSettings);
}
const intervaloActualizacion = setInterval(actualizarContador, 1000);
