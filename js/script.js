function clockUpdate() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
        if(minutos < 10){
            time = horas + ':' + "0" + minutos;
        }else{
            time = horas + ':' + minutos;
        }
        if(horas < 10){
            time = "0" + time;
        }
    document.getElementById('time').innerHTML = time;
    setTimeout(clockUpdate, 1000);
}

clockUpdate();
