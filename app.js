const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');
const cambioGif = document.getElementById('gif');

let [horas, minutos, segundos] = [0,0,0];

let intervaloDeTiempo; 
let estadoCronometro = 'pausado'; 

function actualizarCronometro() {

    segundos++;
    if (segundos / 60 === 1 ){
        segundos = 0; 
        minutos++

        if (minutos / 60 === 1 ){
            minutos = 0;
            horas++;
        }
    }

    const segundosConformato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);

    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConformato}`;
}

function asignarFormato (unidadDeTiempo){
    return unidadDeTiempo < 10 ?  '0' + unidadDeTiempo : unidadDeTiempo;
}

botonInicioPausa.addEventListener('click', function(){
   if (estadoCronometro == 'pausado'){
     intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
     botonInicioPausa.innerHTML = '<i class="bi bi-pause-circle"></i>';
     botonInicioPausa.classList.remove('iniciar');
     botonInicioPausa.classList.add('pausar');
     cambioGif.innerHTML = '<div id="gif"><img src="Imagenes/CORRER.gif" alt=""></div>'
     estadoCronometro = 'andando';

   }else{
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = '<i class="bi bi-play-circle"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    cambioGif.innerHTML = '<div id="gif"><img src="Imagenes/TIRED.gif" alt=""></div>'
    estadoCronometro = 'pausado';
    }
});

botonReiniciar.addEventListener('click', function(){
   window.clearInterval(intervaloDeTiempo);
   
   horas = 0;
   minutos = 0;
   segundos = 0;
   //Reiniciar
   cronometro.innerText = '00:00:00';
   // Actualizar Botones
   botonInicioPausa.innerHTML = '<i class="bi bi-play-circle"></i>';
   botonInicioPausa.classList.remove('pausar');
   botonInicioPausa.classList.add('iniciar');
   cambioGif.innerHTML = '<div id="gif"><img src="Imagenes/READY.gif" alt=""></div>'
   
   //Estado
   estadoCronometro = 'pausado';
});