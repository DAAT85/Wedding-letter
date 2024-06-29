// Define la fecha objetivo
const targetDate = moment("2024-10-26T19:00:00"); //Aqui cambio la fecha del evento

// Función para actualizar el temporizador
function updateTimer() {
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));

    // Calcula los días, horas, minutos y segundos restantes
    const days = Math.floor(duration.asDays());
    const hours = Math.floor(duration.hours());
    const minutes = Math.floor(duration.minutes());
    const seconds = Math.floor(duration.seconds());

    // Actualiza el contenido del temporizador en el HTML
    document.getElementById('timer').innerHTML = 
        `<center><h2 class="timer">${days} : ${hours} : ${minutes} : ${seconds}</h2></center>
        <center><h2 id="letrasTimer">Dias - Horas - Minutos - Segundos</h2></center>`;

    // Si el temporizador llega a cero, detén la actualización
    if (duration.asSeconds() <= 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = "¡Feliz Boda!";
    }
}

// Actualiza el temporizador cada segundo
const interval = setInterval(updateTimer, 1000);

// Llama a la función para actualizar el temporizador inmediatamente
updateTimer();
