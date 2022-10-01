
var iniciar = document.getElementById('iniciar');
var pausar = document.getElementById('pausar');
var cancelar = document.getElementById('cancelar');

var h = document.getElementById("horas");
var m = document.getElementById("minutos");
var s = document.getElementById("segundos");

//Adicionando uma refencia para o timer
var iniciarTimer = null;

iniciar.addEventListener('click', function(){
    //inicia a variavel 
    function startInterval(){
        iniciarTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

pausar.addEventListener('click', function(){
    
    stopInterval()  //pausar o time
   
})
cancelar.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //cancela o time
    stopInterval()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
        if (h.value == 0 && m.value == 0 && s.value == 0){
        return document.getElementById('som').play();}

    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
        
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
        
    }
    return ;
}


function stopInterval() {
    clearInterval(iniciarTimer);
}