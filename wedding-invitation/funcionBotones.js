//Aqui los botones redirigen a la ubicacion
//Primer boton
function ubicacion(){
    window.location.href = 'https://www.google.com.mx/maps/place/Santuario+de+Nuestra+Señora+del+Refugio/@19.2448303,-103.7219776,19z/data=!4m6!3m5!1s0x84255aae8ff3646d:0x92d6b761ecb13244!8m2!3d19.2448303!4d-103.7214144!16s%2Fg%2F1tmxfwgv?entry=ttu';
}


//Segundo boton
function ubicacion2(){
    window.location.href = 'https://www.google.com/maps/place/Hacienda+Pastores,+28963+Col./@19.3128272,-103.7055684,17z/data=!4m6!3m5!1s0x84255b6a0cee7c23:0x3085d893b149ee8f!8m2!3d19.3128272!4d-103.7055684!16s%2Fg%2F11bvtdf_dv?entry=ttu';
}

/*En cada boton lo que hace es, window (llamas a toda la pagina) le colocas
el metodo location (para decirle que vas a cambiar su locacion) y siempre van de la mano 
con href (para colocar el link)
NOTA:
No es lo mismo src y href, href es usado para links de paginas, src es usado
para cosas dentro de tu lap, de ahi su nombre "Source of the file".
Conclusion:
href = indica la destinación de un hyperlink (Todos los links web)
src = inidca la destinacion de un archivo o url */

function music(){
    const music = document.getElementById('music');
    music.play();
}
