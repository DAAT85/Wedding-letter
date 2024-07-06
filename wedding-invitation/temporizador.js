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
        `<center><h2 class="timer">${days} : ${hours} : ${minutes} : ${seconds}</h2></center><br>
        <center><h2 id="letrasTimer">Dias - Hrs. - Min. - Seg.</h2></center>`;

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


/*Esto viene incluido con JS, estas funciones como asSeconds(), son funciones hechas por una libreira
llamada moment.js
Esto para dominarlo, imagina que cada libreria es un diccionario de funciones
que te indicara que hace cada cosa, solo es cuestion de investigarlo dentro de la misma libreira o videos de 
yutu*/
