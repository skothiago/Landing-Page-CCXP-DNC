const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const min = document.getElementById('min')
const seg = document.getElementById('seg')

const lancamento = "27 jan 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal/60/60/24);
    const finalHoras = Math.floor(segTotal/60/60) % 24; 
    const finalMinutos = Math.floor(segTotal/60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60; 

    dia.innerHTML = formatoTempo(finalDias) + "D"
    hora.innerHTML = formatoTempo(finalHoras) + "H"
    min.innerHTML = formatoTempo(finalMinutos) + "M"
    seg.innerHTML = formatoTempo(finalSegundos) + "S"
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)